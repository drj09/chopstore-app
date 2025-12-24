import SearchBar from '@/components/SearchBar';
import JobListingCards from '@/components/JobListingCards';
import jobs from "../app/mockData/jobs.json";


export default function Home() {
	return (
		<main className=" bg-slate-50">
			<div className="text-center mb-8 bg-orange-400 pb-10 pt-30 rounded-b-[30px]">

				<h1 className="text-5xl font-extrabold text-white mb-2">
					Find your dream job now
				</h1>
				<p className="text-white text-xl">
					Browse through thousands of high-paying tech jobs
				</p>
				{/* The Search Component */}
				<div className='pt-5'>
					<SearchBar />
				</div>
			</div>
			<JobListingCards jobs={jobs} />
		</main>
	);

}
