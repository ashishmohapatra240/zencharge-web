"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./common/CustomButton";
import { usePathname } from "next/navigation";

const AppBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    setShowModal(false);
  };

  const getLinkClassName = (path: string) => {
    const isActive = pathname === path;
    return `${
      isActive
        ? "text-[#2D3E50] font-bold"
        : "text-gray-800 hover:text-gray-600"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://cdn.jsdelivr.net/gh/ashishmohapatra240/zencharge-web/public/images/logo.png"
                width={140}
                height={140}
                alt="Logo"
                className="w-auto h-12"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <Link href="/" className={getLinkClassName("/")}>
              Home
            </Link>
            <Link href="/about-us" className={getLinkClassName("/about-us")}>
              About Us
            </Link>
            <Link href="/our-model" className={getLinkClassName("/our-model")}>
              Our Model
            </Link>
            <Link href="/franchise" className={getLinkClassName("/franchise")}>
              Franchise
            </Link>
            <Link href="/find-us" className={getLinkClassName("/find-us")}>
              Find us
            </Link>
            <Link href="/careers" className={getLinkClassName("/careers")}>
              Careers
            </Link>
          </nav>

          {/* Get Started Button - Hide on mobile/tablet */}
          <div className="hidden lg:block">
            <CustomButton
              color="bg-[#2D3E50]"
              textColor="text-white"
              text="Get Started"
              className="hover:opacity-90"
              onClick={() => setShowModal(true)}
            />
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile/Tablet Menu */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div className="fixed inset-0 bg-black bg-opacity-25" onClick={toggleMenu} />
              <nav className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl z-50">
                <div className="flex justify-between items-center p-4 border-b">
                  <span className="text-lg font-semibold text-[#2D3E50]">Menu</span>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="py-2">
                  <Link
                    href="/"
                    className={`block px-4 py-3 ${getLinkClassName("/")} hover:bg-gray-50`}
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className={`block px-4 py-3 ${getLinkClassName("/about-us")} hover:bg-gray-50`}
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/our-model"
                    className={`block px-4 py-3 ${getLinkClassName("/our-model")} hover:bg-gray-50`}
                    onClick={toggleMenu}
                  >
                    Our Model
                  </Link>
                  <Link
                    href="/franchise"
                    className={`block px-4 py-3 ${getLinkClassName("/franchise")} hover:bg-gray-50`}
                    onClick={toggleMenu}
                  >
                    Franchise
                  </Link>
                  <Link
                    href="/find-us"
                    className={`block px-4 py-3 ${getLinkClassName("/find-us")} hover:bg-gray-50`}
                    onClick={toggleMenu}
                  >
                    Find us
                  </Link>
                  <Link
                    href="/careers"
                    className={`block px-4 py-3 ${getLinkClassName("/careers")} hover:bg-gray-50`}
                    onClick={toggleMenu}
                  >
                    Careers
                  </Link>
                  <div className="px-4 py-3">
                    <CustomButton
                      color="bg-[#2D3E50]"
                      textColor="text-white"
                      text="Get Started"
                      className="w-full hover:opacity-90"
                      onClick={() => {
                        setShowModal(true);
                        toggleMenu();
                      }}
                    />
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Email Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Stay Updated!
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-4">
              Enter your email to get notified about our latest updates!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <CustomButton
                color="bg-[#2D3E50]"
                textColor="text-white"
                text="Subscribe"
                className="w-full hover:opacity-90"
                type="submit"
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default AppBar;
