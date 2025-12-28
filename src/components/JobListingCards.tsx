"use client";

import { useState } from "react";
import {  MapPin, MoveRight, MoveLeft, Heart } from "lucide-react";

export type Job = {
    id: number;
    title: string;
    location: string;
    type: string;
    brief: string;
    companyLogo: string;
    company: string;
    description: string;
    salary: string;
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
            <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="flex flex-col bg-white justify-between border border-neutral-100 p-5 hover:shadow-lg transition rounded-lg"
                    >
                        {/* ================= Section 1 ================= */}
                        <div className="flex items-start gap-3">
                            {/* Company Logo */}
                            <img
                                src={job.companyLogo}
                                alt='company logo'
                                className="w-15 h-15 rounded-md bg-gray-100 border border-gray-100"
                            />

                            <div>
                                <h3 className="font-semibold text-xl text-black">
                                    {job.company || "Temp Holder"}
                                </h3>

                                <div className="mt-1 flex flex-wrap gap-2 text-xs text-gray-600">
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

                        {/* ================= Section 2 ================= */}
                        <div className="mt-5">
                            <h2 className="text-xl font-bold text-black">{job.title}</h2>

                            <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                                {job.description}
                            </p>

                            <p className="mt-4 text-lg font-semibold text-orange-500">
                                {job.salary || "₹X,XX,XXX PA"}
                            </p>
                        </div>

                        {/* ================= Section 3 ================= */}
                        <div className="mt-6 flex gap-3">
                            {/* View Details Button */}
                            <button
                                onClick={() => openModal(job)}
                                className="flex flex-1 font-semibold items-center justify-center gap-2 rounded-lg border border-black px-4 py-2 text-sm text-black font-medium transition hover:bg-black hover:text-white"
                            >
                                Details
                                <MoveRight className="w-4 h-4" />
                            </button>

                            <div className="relative group flex-1">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
                                >
                                    Apply Now
                                    <Heart className="w-4 h-4" />
                                </button>

                                <div className="absolute left-0 top-full z-50 mt-2 hidden w-full rounded-lg border border-gray-200 bg-white text-black shadow-lg group-hover:block group-focus-within:block">
                                    <a href="mailto:hr@company.com" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                        Apply by Email
                                    </a>
                                    <a href="tel:+911234567890" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                        Apply by Phone
                                    </a>
                                    <a
                                        href="https://wa.me/918178462379"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                                    >
                                        Apply by WhatsApp
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </div>


            {/* Bottom Modal */}

            {selectedJob && (
                <div className="fixed inset-0 z-50 flex items-end bg-black/50">
                    <div
                        className={`bg-white w-full mx-2 min-h-[80vh] max-h-[85vh] rounded-t-2xl text-black p-10 p-6 pb-10 overflow-y-auto
        ${isClosing ? "animate-slideDown" : "animate-slideUp"}
      `}
                    >
                        {/* Close button */}
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={closeModal}
                                className="text-black text-xl hover:opacity-60 transition"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Split layout */}
                        <div className="flex flex-col md:flex-row gap-8">

                            {/* LEFT — Company Info (≈70%) */}
                            <div className="md:flex-[7] p-6">

                                <div className="flex justify-start mb-4">
                                    <button
                                        onClick={closeModal}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 text-gray-800 font-medium text-sm hover:bg-gray-300 transition"
                                        aria-label="Back to all jobs"
                                        type="button"
                                    >
                                        <MoveLeft className="w-4 h-4" aria-hidden="true" />
                                        <span>All Jobs</span>
                                    </button>
                                </div>


                                {/* Job Title */}
                                <h2 className="text-2xl font-bold text-black mb-4">
                                    {selectedJob.title}
                                </h2>

                                {/* Meta Tabs */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1 text-sm border border-black rounded-full">
                                        {selectedJob.location}
                                    </span>
                                    <span className="px-3 py-1 text-sm border border-black rounded-full">
                                        {selectedJob.type}
                                    </span>
                                    <span className="px-3 py-1 text-sm border border-black rounded-full">
                                        {selectedJob.salary}
                                    </span>
                                </div>

                                {/* Description */}
                                <section className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">Job Brief</h3>
                                    <p className="text-black leading-relaxed">
                                        {selectedJob.brief}
                                    </p>
                                </section>

                                {/* Requirements */}
                                <section className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        {selectedJob.requirements.map((req, i) => (
                                            <li key={i}>{req}</li>
                                        ))}
                                    </ul>
                                </section>

                                {/* Responsibilities */}
                                <section>
                                    <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        {selectedJob.responsibilities.map((res, i) => (
                                            <li key={i}>{res}</li>
                                        ))}
                                    </ul>
                                </section>





                            </div>



                            {/* RIGHT — Job Details (≈30%) */}
                            <div className="md:flex-[3]">
                                <div className="w-20 h-20 bg-gray-100  rounded-lg flex items-center justify-center mb-6">
                                    <img
                                        src={selectedJob.companyLogo}
                                        alt={selectedJob.company}
                                        className="w-15 h-15 rounded-md bg-gray-100 border border-gray-100"
                                    />
                                </div>

                                {/* Company Name */}
                                <h3 className="text-xl font-bold text-black mb-6">
                                    {selectedJob.company}
                                </h3>

                                {/* Apply Button */}
                                <button className="flex flex-1 font-semibold items-center justify-center gap-2 rounded-lg  bg-orange-100 px-4 py-2 text-sm text-orange-500 font-medium transition hover:bg-orange-500 hover:text-white">
                                    Apply Now
                                    <Heart className="w-10 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}





        </section>
    );
}
