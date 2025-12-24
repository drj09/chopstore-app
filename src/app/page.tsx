import SearchBar from '@/components/SearchBar';
import JobListingCards from '@/components/JobListingCards';
import jobs from "../app/mockData/jobs.json";


export default function Home() {
        return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-40">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Find your dream job now
        </h1>
        <p className="text-gray-500">
          Browse through thousands of high-paying tech jobs
        </p>
      </div>
	  

      {/* The Search Component */}
      <SearchBar />

	  <main className="min-h-screen">
      <JobListingCards jobs={jobs} />
    </main>
    </main>
  );

}
