import { Heart } from "lucide-react";
import { Job } from "./JobListingCards";

type ApplyNowButtonProps = {
  job: Job;
};

export default function applyNowButton({ job }: ApplyNowButtonProps) {
  const msg = encodeURIComponent(
    `Hello,
    I would like to apply for this job:
    Job ID: ${job.id}
    Company: ${job.company}
    Title: ${job.title}

    Please let me know the next steps.`
  );

  return (
    <section className="">
      <div className="relative group flex-1">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-100 px-4 py-2 text-sm font-bold text-orange-500 transition hover:bg-orange-500 hover:text-white"
        >
          Apply Now
          <Heart className="w-4 h-4" />
        </button>

        <div className="absolute left-0 top-full z-50 hidden w-full rounded-lg border border-gray-200 bg-white text-black shadow-lg group-hover:block group-focus-within:block">
          <a
            href={`mailto:hr@company.com?subject=${encodeURIComponent(
              `Job Application: ${job.title}`
            )}&body=${msg}`}
            className="block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Apply by Email
          </a>
          <a
            href="tel:+911234567890"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Apply by Phone
          </a>
          <a
            href={`https://wa.me/918178462379?text=${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Apply by WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
