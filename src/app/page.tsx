import SearchBar from '@/components/SearchBar';
import JobListingCards from '@/components/JobListingCards';
import jobs from "../app/mockData/jobs.json";


export default function Home() {
	return (
		<main className="min-h-screen bg-slate-50">
			<div className="text-center mb-8 pt-10 bg-orange-400 pb-10">
				<h1 className="text-4xl font-extrabold text-white mb-2">
					Find your dream job now
				</h1>
				<p className="text-white">
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
