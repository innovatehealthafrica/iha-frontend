"use client";
import Link from "next/link";

const resources = [
  {
    label: "Bioinformatics",
    link: "#",
  },
  {
    label: "Data Governance",
    link: "#",
  },
  {
    label: "Design Thinking",
    link: "#",
  },
  {
    label: "Digital Health and Climate Change",
    link: "#",
  },
  {
    label: "Digital Health Landscape in Africa",
    link: "#",
  },
  {
    label: "Health Informatics",
    link: "#",
  },
  {
    label: "Human Centered Design",
    link: "#",
  },
  {
    label: "Lean Methodology",
    link: "#",
  },
  {
    label: "Maturity Model for DH",
    link: "#",
  },
  {
    label: "One Health Policy Framework",
    link: "#",
  },
  {
    label: "WHO Digital Health Guideline",
    link: "#",
  },
];

const organizations = [
  {
    label: "Innovators Network",
    link: "#",
  },
  {
    label: "School of Healthcare Innovation",
    link: "#",
  },
  {
    label: "Mission",
    link: "#",
  },
  {
    label: "Innovation Support",
    link: "#",
  },
  {
    label: "Strategic Objectives",
    link: "#",
  },
  {
    label: "Team",
    link: "#",
  },
  {
    label: "Values",
    link: "#",
  },
  {
    label: "Venture Studio",
    link: "#",
  },
  {
    label: "Vision",
    link: "#",
  },
];

const more = [
  {
    label: "AIBot",
    link: "#",
  },
  {
    label: "DigitalHealth London",
    link: "#",
  },
  {
    label: "Digital Health Africa",
    link: "#",
  },
  {
    label: "Digital Health India",
    link: "#",
  },
  {
    label: "Digital Health London",
    link: "#",
  },
  {
    label: "Health Innovation Courses",
    link: "#",
  },
  {
    label: "Investors Network",
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-24">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-y-0 w-full max-w-screen-xl px-8 mx-auto">
        <div className="flex flex-col gap-4 lg:gap-8 lg:row-span-2">
          <h5 className="text-md md:text-2xl text-accent font-[500] leading-normal">
            Resources
          </h5>

          <ul className="space-y-1 md:space-y-3">
            {resources.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="text-xs lg:text-base font-[300] text-white hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:gap-8">
          <h5 className="text-md md:text-2xl text-accent font-[500] leading-normal">
            Our Organization
          </h5>

          <ul className="space-y-1 md:space-y-3">
            {organizations.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="text-xs lg:text-base font-[300] text-white hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:gap-8">
          <h5 className="text-md md:text-2xl text-accent font-[500] leading-normal">
            More
          </h5>

          <ul className="space-y-1 md:space-y-3">
            {more.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="text-xs lg:text-base font-[300] text-white hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-accent flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-0 w-full max-w-screen-xl mx-auto px-4 pt-24">
        <span className="text-xs lg:text-lg font-[300]">
          @2024 INNOVATEHEALTH AFRICA. ALL RIGHT RESERVED
        </span>

        <div className="flex text-white">
          <Link
            href="#"
            className="after:content-['|'] after:px-4 text-xs lg:text-base hover:underline"
          >
            {" "}
            Terms of Use
          </Link>
          <Link href="#" className="text-xs lg:text-base hover:underline">
            {" "}
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
