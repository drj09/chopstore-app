"use client";

import { useEffect, useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import JobListingCards from "@/components/JobListingCards";

function shuffleArray<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function SearchAndJobs({ jobs }) {
  const [shuffledJobs, setShuffledJobs] = useState<typeof jobs>([]);
  const [filters, setFilters] = useState({
    title: "",
    category: "",
    location: "",
  });

  // 🔑 Shuffle only AFTER hydration
  useEffect(() => {
    setShuffledJobs(shuffleArray(jobs));
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return shuffledJobs.filter(job => {
      if (
        filters.title &&
        !job.title.toLowerCase().includes(filters.title.toLowerCase())
      ) return false;

      if (filters.category && job.category !== filters.category) return false;
      if (filters.location && job.location !== filters.location) return false;

      return true;
    });
  }, [shuffledJobs, filters]);

  const categories = [...new Set(jobs.map(j => j.category).filter(Boolean))];
  const locations = [...new Set(jobs.map(j => j.location).filter(Boolean))];

  return (
    <>
      <div className="text-center mb-4 bg-orange-400 pb-10 rounded-b-[15px]">
        <SearchBar
          categories={categories}
          locations={locations}
          onSearch={setFilters}
        />
      </div>

      <JobListingCards jobs={filteredJobs} />
    </>
  );
}
