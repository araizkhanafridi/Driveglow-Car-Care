
"use client"

import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between gap-4">

        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3 shrink-0"
        >
          <Image
            src="/driveglow-icon.png"
            alt="DriveGlow Car Care Logo"
            width={42}
            height={42}
            className="object-contain"
            priority
          />

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              DriveGlow
            </span>

            <span className="text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[4px] text-gray-500">
              Car Care
            </span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm xl:text-base text-gray-700">

          <a href="#home" className="hover:text-black transition">
            Home
          </a>

          <a href="#about" className="hover:text-black transition">
            About
          </a>

          <a href="#services" className="hover:text-black transition">
            Services
          </a>

          <a href="#packages" className="hover:text-black transition">
            Packages
          </a>

          <a href="#why-us" className="hover:text-black transition">
            Why Us
          </a>

          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>

        </div>

        <a
          href="#contact"
          className="hidden lg:inline-block shrink-0 whitespace-nowrap bg-gray-900 text-white px-4 xl:px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
        >
          Book Now
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 shrink-0"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-gray-900 transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>

      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-gray-200 bg-white"
        >
          <div className="px-6 py-6 flex flex-col gap-5">

            <a
              href="#home"
              onClick={closeMenu}
              className="text-gray-700 hover:text-black transition"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-gray-700 hover:text-black transition"
            >
              About
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="text-gray-700 hover:text-black transition"
            >
              Services
            </a>

            <a
              href="#packages"
              onClick={closeMenu}
              className="text-gray-700 hover:text-black transition"
            >
              Packages
            </a>

            <a
              href="#why-us"
              onClick={closeMenu}
              className="text-gray-700 hover:text-black transition"
            >
              Why Us
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-gray-700 hover:text-black transition"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Book Now
            </a>

          </div>
        </div>
      )}

    </nav>
  )
}
