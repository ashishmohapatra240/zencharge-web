import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-10 px-6 md:px-[104px] relative">
      <div className="flex flex-col items-center md:items-start gap-10">
        {/* Logo and Navigation Links */}
        <div className="flex flex-col md:flex-row items-center md:justify-start gap-10 md:gap-[317px]">
          {/* Logo */}
          <img
            src="/images/logo.png"
            alt="ZenCharge Logo"
            className="w-[208px] h-auto"
          />

          {/* Navigation Links */}
          <div className="flex gap-8 md:gap-[88px] text-[#1E1E1E] text-sm md:text-base font-montserrat font-normal">
            <a href="#about" className="hover:underline">
              About Us
            </a>
            <a href="#model" className="hover:underline">
              Our Model
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#team" className="hover:underline">
              Our Team
            </a>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full max-w-[1445px] border-t border-black"></div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-[#1E1E1E] text-sm md:text-base font-montserrat font-normal">
          {/* Copyright Text */}
          <p className="text-center md:text-left max-w-full md:max-w-[500px]">
            © 2024 ZenCharge. All rights reserved. Accelerating sustainable
            mobility across India.
          </p>

          {/* Terms and Privacy Links */}
          <div className="flex gap-8">
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
