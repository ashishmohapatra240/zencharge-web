import React from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./common/CustomButton";

const AppBar = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={180}
                height={180}
                alt="Logo"
              />{" "}
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/about-us"
              className="text-gray-800 hover:text-gray-600"
            >
              About Us
            </Link>
            <Link
              href="/our-model"
              className="text-gray-800 hover:text-gray-600"
            >
              Our Model
            </Link>
            <Link
              href="/franchise"
              className="text-gray-800 hover:text-gray-600"
            >
              Franchise
            </Link>
            <Link href="/find-us" className="text-gray-800 hover:text-gray-600">
              Find us
            </Link>
            <Link href="/careers" className="text-gray-800 hover:text-gray-600">
              Careers
            </Link>
          </nav>
          <CustomButton
            color="bg-[#2D3E50]"
            textColor="text-white"
            text="Get Started"
            className="hover:opacity-90"
          />

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
              aria-label="Open Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
