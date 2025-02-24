"use client";

import Link from "next/link";
import Image from "next/image";
import { BiMenu, BiX, BiDownload } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with company name */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/logo.png"
                alt="MoyiScan Logo"
                width={40}
                height={40}
                className="h-8 w-auto md:h-12"
              />
              <div className="text-xl md:text-2xl font-bold">
                <span className="text-brand-primary">Moyi</span>
                <span className="text-brand-secondary">Scan</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-brand-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button with animation */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="#download"
                className="group bg-brand-primary text-white px-6 py-2.5 rounded-full hover:bg-brand-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2">
                  Download App
                  <BiDownload className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button with animation */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-300"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <BiX className="w-6 h-6 transform rotate-90 transition-transform duration-300" />
                ) : (
                  <BiMenu className="w-6 h-6 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-16 md:top-20 left-0 right-0 bg-white z-40 md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="py-4 px-4 border-t border-gray-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between text-gray-600 hover:text-brand-primary px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#download"
              className="flex items-center justify-center gap-2 bg-brand-primary text-white px-4 py-3 rounded-lg hover:bg-brand-accent transition-colors duration-300 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Download App
              <BiDownload className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
