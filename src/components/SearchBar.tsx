import React from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-2 md:p-3">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
        
        {/* 1. Search Keyword */}
        <div className="relative flex-[2] min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search job title..."
            className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none text-gray-700"
          />
        </div>

        <div className="hidden md:block w-px h-8 bg-gray-200"></div>

        {/* 2. Category Dropdown */}

        {/* Using relative div to position the ChevronDown icon 
        
        <div className="relative flex-1 min-w-[140px]">
          <select className="appearance-none w-full px-4 py-3 bg-transparent focus:outline-none cursor-pointer text-gray-600 font-medium">
            <option>Category</option>
            <option>Design</option>
            <option>Dev</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>

        <div className="hidden md:block w-px h-8 bg-gray-200"></div>

        
        <div className="relative flex-1 min-w-[140px]">
          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <select className="appearance-none w-full pl-9 pr-8 py-3 bg-transparent focus:outline-none cursor-pointer text-gray-600 font-medium">
            <option>Job Type</option>
            <option>Full-time</option>
            <option>Remote</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>

        <div className="hidden md:block w-px h-8 bg-gray-200"></div>
*/}

        {/* 4. Location */}
        <div className="relative flex-1 min-w-[140px]">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <select className="appearance-none w-full pl-9 pr-8 py-3 bg-transparent focus:outline-none cursor-pointer text-gray-600 font-medium">
            <option>Location</option>
            <option>Remote</option>
            <option>New York</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
        </div>

        {/* Search Button */}
        <button className="w-full md:w-auto px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all">
          Search
        </button>
      </div>
    </div>
  );
}