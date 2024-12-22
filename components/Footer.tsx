import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 md:py-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        {/* Logo and Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="ZenCharge Logo"
              width={208}
              height={60}
              className="h-auto"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-[#1E1E1E] text-sm md:text-base font-montserrat">
            <a href="/about-us" className="hover:underline">
              About Us
            </a>
            <a href="/our-models" className="hover:underline">
              Our Model
            </a>
            <a href="/franchise" className="hover:underline">
              Franchise
            </a>
            <a href="/find-us" className="hover:underline">
              Find Us
            </a>
            <a href="/careers" className="hover:underline">
              Careers
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#2D3E50] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#2D3E50] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#2D3E50] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#2D3E50] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-black/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[#1E1E1E] text-sm md:text-base font-montserrat">
          <p className="text-center md:text-left">
            © 2024 ZenCharge. All rights reserved. Accelerating sustainable
            mobility across India.
          </p>

          <div className="flex gap-6 md:gap-8">
            <a href="#terms" className="hover:underline">
              Terms Of Service
            </a>
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
