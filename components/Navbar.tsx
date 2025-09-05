"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"   // must be inside /public folder
            alt="Bright Step Tutoring"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">Bright Step Tutoring</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <Link
              href="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-4 pb-4">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
