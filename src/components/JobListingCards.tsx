"use client";

import { useState } from "react";
import { MapPin, MoveRight, MoveLeft } from "lucide-react";
import ApplyNowButton from "./applyNowButton";

export type Job = {
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
};

type CareerJobsProps = {
  jobs: Job[];
  heading?: string;
};

export default function CareerJobs({
  jobs,
  heading = "Find all job openings here",
}: CareerJobsProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (job: Job) => {
    setSelectedJob(job);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedJob(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <section className="px-4 py-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-black mb-6">{heading}</h1>

      {/* Job cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col bg-white justify-between border border-neutral-100 p-5 rounded-lg hover:shadow-lg transition"
          >
            {/* Top */}
            <div className="flex gap-3">
              <img
                src={job.companyLogo}
                alt="company logo"
                className="w-14 h-14 rounded-md bg-gray-100 border"
              />
              <div>
                <h3 className="font-semibold text-black text-xl">{job.company}</h3>
                <div className="mt-1 flex gap-2 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 border">
                    {job.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Middle */}
            <div className="mt-5">
              <h2 className="text-xl text-black font-bold">{job.title}</h2>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {job.description}
              </p>
              <p className="mt-4 text-lg font-semibold text-orange-500">
                {job.salary || "₹X,XX,XXX PA"}
              </p>
            </div>

            {/* Bottom */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => openModal(job)}
                className="flex-1 flex items-center text-black justify-center gap-2 rounded-lg border border-black px-4 py-2 text-sm font-semibold hover:bg-black hover:text-white transition"
              >
                Details
                <MoveRight className="w-4 h-4" />
              </button>
              <ApplyNowButton job={job} />
            </div>
          </div>
        ))}
      </div>

      {/* ================= BOTTOM MODAL ================= */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-end bg-black/50 px-2"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white w-full max-h-[90vh] rounded-t-2xl overflow-y-auto
            ${isClosing ? "animate-slideDown" : "animate-slideUp"}`}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 px-4 py-4 flex justify-between items-center bg-gray-100">
              <button
                onClick={closeModal}
                className="flex items-center gap-2 px-2 py-2 rounded-full bg-white text-sm text-black font-medium border border-gray-300 hover:bg-gray-200 transition">
                <MoveLeft className="w-4 h-4" />
                All Jobs 
              </button>
              <button
                onClick={closeModal}
                className="text-sm font-semibold text-gray-500 border bg-white rounded-full px-3 py-1 border border-gray-300 hover:bg-gray-200 transition"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className=" px-4 pb-28 pt-4 flex flex-col md:flex-row gap-6">
              {/* Left */}
              <div className="md:flex-[7]">
                <h2 className="text-2xl text-black font-bold">{selectedJob.title}</h2>
                <p className="mt-2 text-sm text-gray-600">
                  {selectedJob.description}
                </p>

                <div className="flex flex-wrap gap-2 my-4 text-gray-500">
                  <span className="px-3 py-1 text-sm border rounded-full">
                    {selectedJob.location}
                  </span>
                  <span className="px-3 py-1 text-sm border rounded-full">
                    {selectedJob.type}
                  </span>
                  <span className="px-3 py-1 text-sm border rounded-full">
                    {selectedJob.salary}
                  </span>
                </div>

                <section className="mb-4">
                  <h3 className="font-semibold text-black mb-1">Job Brief</h3>
                  <p className="text-gray-500 ">{selectedJob.brief}</p>
                </section>

                <section className="mb-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-500">
                    {selectedJob.requirements.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold mb-1 text-black">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-500">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Right */}
              <div className="md:flex-[] order-first md:order-last flex flex-col items-center">
                <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src={selectedJob.companyLogo}
                    alt={selectedJob.company}
                    className="w-30 h-30 rounded-md"
                  />
                </div>
                <h3 className="text-lg text-black font-bold text-center pb-4">
                  {selectedJob.company}
                </h3>
                <ApplyNowButton job={selectedJob} />
              </div>
              
            </div>

            {/* Sticky Apply Button (mobile) 
            <div className="fixed bottom-0 left-0 right-0 md:static bg-white border-t p-4 z-20">
              <ApplyNowButton job={selectedJob} />
            </div>
            */}
          </div>
        </div>
      )}
    </section>
  );
}
