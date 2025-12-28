import jobs from "@/app/mockData/jobs.json";
import SearchAndJobs from "@/components/SearchAndJobs";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <div className="text-center bg-orange-400 pb-10 pt-20 ">
        <h1 className="text-5xl font-extrabold text-white mb-2">
          Find your dream job now
        </h1>
        <p className="text-white text-xl">
          Browse through thousands of high-paying tech jobs
        </p>
      </div>

      {/* Client-side logic lives here */}
      <SearchAndJobs jobs={jobs} />
    </main>
  );
}
