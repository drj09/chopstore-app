"use client";

import SearchBar from "./SearchBar";

type NavbarProps = {
  locations: string[];
  categories: string[];
  onSearch: (filters: {
    title: string;
    category: string;
    location: string;
  }) => void;
};
const images = ["/hero/logo2.jpeg"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto px-10">
        <div className="flex items-center gap-6 py-3">
          {/* LEFT — Logo */}
          <div className="flex flex-1 items-center flex-shrink-0 gap-2">
  <img
    src={images[0]}
    alt="Job Portal Logo"
    className="h-10 w-auto cursor-pointer"
  />
  <span className="text-2xl font-extrabold text-orange-500 cursor-pointer">
    Chopstore
  </span>
</div>

          

          {/* CENTER — Search widget 
          <div className="flex-1 hidden lg:block">
            <SearchBar
              locations={locations}
              categories={categories}
              onSearch={onSearch}
            />
          </div>
          */}

          {/* RIGHT — Nav buttons */}
          <nav className="flex items-center gap-2 flex-shrink-0">
            {["About Us", "Find Jobs", "Contact Us"].map((item) => (
              <button
                key={item}
                className="px-4 py-2 rounded-lg font-semibold text-gray-700
                hover:bg-amber-500 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* MOBILE SEARCH (widget style) */}
        
      </div>
    </header>
  );
}
