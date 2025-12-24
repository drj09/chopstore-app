"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, ArrowRight } from 'lucide-react';


export type Job = {
    id: number;
    title: string;
    location: string;
    type: string;
    brief: string;
    requirements: string[];
    responsibilities: string[];
};

type CareerJobsProps = {
    jobs: Job[];
    heading?: string;
};

export default function CareerJobs({
    jobs,
    heading = "Careers",
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
        }, 300); // must match animation duration
    };

    return (
        <section className="px-6 py-12">
            {/* Job Cards */}
            <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="border border-neutral-300 p-5 bg-white hover:shadow-lg  "
                    >
                        <h2 className="text-xl font-semibold text-orange-500">
                            {job.title}
                        </h2>
                        <p className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                            {/* Location */}
                            <span className="flex items-center gap-1 rounded-full border border-black/20 px-3 py-1 text-black">
                                <MapPin className="w-3.5 h-3.5 text-black/60" />
                                {job.location}
                            </span>

                            {/* Job Type */}
                            <span className="flex items-center gap-1 rounded-full border border-black/20 px-3 py-1 text-black">
                                <Briefcase className="w-3.5 h-3.5 text-black/60" />
                                {job.type}
                            </span>
                        </p>




                        <button
                            onClick={() => openModal(job)}
                            className="mt-4 flex items-center gap-1 text-black font-medium
             hover:opacity-70 transition"
                        >
                            More details
                            <ArrowRight className="w-4 h-4 text-black/60" />
                        </button>
                    </div>
                ))}
            </div>


            {/* Bottom Modal */}
            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-end bg-black/50">
                    <div
                        className={`bg-white w-full mr-2 ml-2
    min-h-[80vh] max-h-[85vh]
    rounded-t-2xl
    border-t border-black
    p-6 pb-10
    overflow-y-auto
    ${isClosing ? "animate-slideDown" : "animate-slideUp"}
  `}
                    >



                        {/* Header */}
                        <div className="flex justify-between items-start gap-4 mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-black">
                                    {selectedJob.title}
                                </h2>
                                <p className="text-sm text-black mt-1">
                                    {selectedJob.location} · {selectedJob.type}
                                </p>
                            </div>

                            <button
                                onClick={closeModal}
                                className="text-black text-xl leading-none
                     hover:opacity-60 transition"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-black mb-6" />

                        {/* Job Brief */}
                        <section className="mb-8">
                            <h3 className="text-lg font-semibold text-black mb-2">
                                Job Brief
                            </h3>
                            <p className="text-black leading-relaxed">
                                {selectedJob.brief}
                            </p>
                        </section>

                        {/* Requirements */}
                        <section className="mb-8">
                            <h3 className="text-lg font-semibold text-black mb-2">
                                Requirements
                            </h3>
                            <ul className="list-disc pl-5 space-y-1 text-black">
                                {selectedJob.requirements.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Responsibilities */}
                        <section className="mb-4">
                            <h3 className="text-lg font-semibold text-black mb-2">
                                Responsibilities
                            </h3>
                            <ul className="list-disc pl-5 space-y-1 text-black">
                                {selectedJob.responsibilities.map((res, index) => (
                                    <li key={index}>{res}</li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>
            )}



        </section>
    );
}
