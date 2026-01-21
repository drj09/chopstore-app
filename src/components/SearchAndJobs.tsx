"use client";

import { useEffect, useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import JobListingCards from "@/components/JobListingCards";

function shuffleArray<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}


interface SearchAndJobsProps {
  jobs: Job[];
}



interface Job {
  id: number;
  title: string;
  category: string;
  location: string;
  type: string;
  brief: string;
  companyLogo: string;
  company: string;
  description: string;
  salary: string;
  requirements: string[];
  responsibilities: string[];
  jobTags?: string;
}

export default function SearchAndJobs({ jobs }: SearchAndJobsProps) {
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
      <div className="text-center p-10 rounded-b-[15px]">
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
