import jobs from "@/app/mockData/jobs.json";
import SearchAndJobs from "@/components/SearchAndJobs";
import HeroSlider from "@/components/heroSlider";
import Navbar from "@/components/navBar";


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


const images = [
  "/hero/hero1.jpg",
  "/hero/hero2.jpg",
  "/hero/hero3.jpg",
];



export default function Home() {
  return (
<main className="bg-slate-50">
  <Navbar  />
  <div className="relative text-center pb-10 pt-20 h-[420px] flex items-center justify-center">
    
     
    {/* Hero Slider */}
    <HeroSlider />

    {/* Content 
    <div className="relative z-10">
      <h1 className="text-5xl font-extrabold text-white mb-2">
        Find your dream job now
      </h1>
      <p className="text-white text-xl">
        Browse through thousands of high-paying tech jobs
      </p>
    </div>
*/}
  </div>

 
  <SearchAndJobs jobs={jobs as Job[]} />
</main>

  );
}
