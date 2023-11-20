"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-semibold">Accountales Co.</h1>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link
              href="/"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
