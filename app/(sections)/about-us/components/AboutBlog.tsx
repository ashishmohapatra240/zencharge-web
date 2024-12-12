"use client";
import { useState } from "react";
import Container from "@/app/components/ui/Container";
import { blogPosts } from "@/app/lib/constants/blog-data";
import Image from "next/image";
import Link from "next/link";

export default function AboutBlog() {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

  return (
    <section className="py-8 sm:py-12 md:py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 justify-start items-start max-w-screen-xl mx-auto">
          {/* Left Side - Main Blog Post */}
          <div className="w-full lg:w-2/3 flex flex-col gap-4 sm:gap-6 md:gap-8">
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 sm:gap-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-montserrat text-[#2D3E50] leading-tight max-w-2xl">
                  {selectedPost.title}
                </h2>
                <div className="text-gray-600 text-sm md:text-base font-montserrat md:text-right">
                  <time className="block">{selectedPost.date}</time>
                  <span className="block mt-1">{selectedPost.author}</span>
                </div>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">{selectedPost.content}</p>
              </div>
              <Link 
                href={selectedPost.readMoreLink} 
                className="inline-flex items-center gap-2 text-[#2D3E50] font-medium border-2 border-[#2D3E50] rounded-lg hover:bg-[#2D3E50] hover:text-white transition-colors duration-300 py-3 px-6 w-fit"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Blog List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#2D3E50] mb-2">More Articles</h3>
            {blogPosts.map((post, index) => (
              <div key={post.id}>
                <button
                  className={`w-full text-left transition-all duration-300 ${
                    selectedPost.id === post.id
                      ? "bg-gray-50 shadow-md"
                      : "hover:bg-gray-50"
                  } rounded-lg overflow-hidden`}
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="flex gap-3 sm:gap-4 p-3 sm:p-4">
                    <div className="relative w-20 sm:w-24 md:w-32 aspect-[4/3] rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h4 className="font-montserrat font-medium text-sm sm:text-base text-[#2D3E50] line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="text-xs sm:text-sm text-gray-600">
                        <time className="block">{post.date}</time>
                        <span className="block">{post.author}</span>
                      </div>
                    </div>
                  </div>
                </button>
                {index < blogPosts.length - 1 && (
                  <div className="h-px bg-gray-200 my-3 sm:my-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
