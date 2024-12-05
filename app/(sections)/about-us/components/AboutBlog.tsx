"use client";
import { useState } from "react";
import Container from "@/app/components/ui/Container";
import { blogPosts } from "@/app/lib/constants/blog-data";

export default function AboutBlog() {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 justify-start items-start max-w-screen-xl mx-auto">
          {/* Left Side - Main Blog Post */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-[457px] object-cover rounded-lg"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start gap-4">
                  <h2 className="text-2xl font-bold font-montserrat text-black leading-normal">
                    {selectedPost.title}
                  </h2>
                  <div className="text-right text-black text-lg font-montserrat italic font-light">
                    Date: {selectedPost.date}
                    <br />
                    Author: {selectedPost.author}
                  </div>
                </div>
                <div className="text-black text-base font-montserrat">
                  <span className="font-medium">Introduction:</span>
                  <span className="font-light">{selectedPost.content}</span>
                </div>
              </div>
              <button className="px-7 py-4 bg-white shadow-md rounded text-[#2D3E50] font-montserrat text-lg self-start hover:shadow-lg transition-shadow">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Blog List */}
          <div className="lg:w-1/3 flex flex-col gap-5">
            {blogPosts.map((post, index) => (
              <div key={post.id} className="w-full">
                <div
                  className="flex justify-start items-center gap-4 cursor-pointer hover:bg-gray-50 p-4 transition-colors"
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-[173px] h-[133px] object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-black text-lg font-montserrat font-medium leading-normal">
                      {post.title}
                    </h3>
                    <div className="text-black text-sm font-montserrat italic font-light">
                      Date: {post.date}
                      <br />
                      Author: {post.author}
                    </div>
                  </div>
                </div>
                {index < blogPosts.length - 1 && (
                  <div className="h-[1px] bg-black opacity-70 my-5 mx-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
