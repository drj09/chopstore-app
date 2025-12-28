"use client";

import { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";

type SearchBarProps = {
  locations: string[];
  categories: string[];
  onSearch: (filters: {
    title: string;
    category: string;
    location: string;
  }) => void;
};

export default function SearchBar({
  locations,
  categories,
  onSearch,
}: SearchBarProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl bg-white shadow-xl border border-gray-100 p-2 md:p-3 ">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2">

        {/* Job Title */}
        <div className="relative flex-[2] min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Search job title..."
            className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none text-gray-700"
          />
        </div>

        <div className="hidden md:block w-px h-8 bg-gray-200" />

        {/* Category */}
        <div className="relative flex-1 min-w-[140px]">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="appearance-none w-full px-4 py-3 bg-transparent focus:outline-none cursor-pointer text-gray-600 font-medium"
          >
            <option value="">Category</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          

          
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <div className="hidden md:block w-px h-8 bg-gray-200" />

        {/* Location */}
        <div className="relative flex-1 min-w-[140px]">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="appearance-none w-full pl-9 pr-8 py-3 bg-transparent focus:outline-none cursor-pointer text-gray-600 font-medium"
          >
            <option value="">Location</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Search Button */}
        <button
          onClick={() => onSearch({ title, category, location })}
          className="w-full md:w-auto px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all"
        >
          Search
        </button>
      </div>
    </div>
  );
}


{/*
  1️⃣ Update SearchBar to emit changes immediately

Replace your select onChange handlers like this:

<select
  value={category}
  onChange={(e) => {
    const value = e.target.value;
    setCategory(value);
    onSearch({ title, category: value, location });
  }}
>

<select
  value={location}
  onChange={(e) => {
    const value = e.target.value;
    setLocation(value);
    onSearch({ title, category, location: value });
  }}
>
  */}