"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const images = [
  "/hero/logo2.jpeg",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top row */}
        <div className="flex items-center justify-between h-16">
          {/* LEFT — Logo */}
          <div className="flex items-center gap-2">
            <img
              src={images[0]} // put in public
              alt="Chopstore Logo"
              className="h-9 w-auto"
            />
            <span className="text-xl font-extrabold text-orange-500">
              Chopstore
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">
            {["About Us", "Find Jobs", "Contact Us"].map((item) => (
              <button
                key={item}
                className="px-4 py-2 rounded-lg font-semibold text-gray-700
                hover:bg-amber-500 hover:text-white transition"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {["About Us", "Find Jobs", "Contact Us"].map((item) => (
                <button
                  key={item}
                  className="w-full text-left px-4 py-3 rounded-lg
                  font-semibold text-gray-600 
                  hover:bg-amber-500 hover:text-white transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
