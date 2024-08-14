"use client";

import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "@/ui/button";
import toast from "react-hot-toast";
import { Info, Search } from "lucide-react";

const resources = [
  {
    label: "Design Thinking",
    link: "#",
  },
  {
    label: "Health Informatics",
    link: "#",
  },
  {
    label: "WHO Digital Health Guideline",
    link: "#",
  },
  {
    label: "One Health Policy Framework",
    link: "#",
  },
  {
    label: "Bioinformatics",
    link: "#",
  },
  {
    label: "Data Governance",
    link: "#",
  },
  {
    label: "Maturity Model for DH",
    link: "#",
  },
  {
    label: "Digital Health and Climate Change",
    link: "#",
  },
  {
    label: "Lean Methodology",
    link: "#",
  },
  {
    label: "Human Centered Design",
    link: "#",
  },
  {
    label: "Digital Health Landscape in Africa",
    link: "#",
  },
];

const organizations = [
  {
    label: "Team",
    link: "#",
  },
  {
    label: "Values",
    link: "#",
  },
  {
    label: "Strategic Objectives",
    link: "#",
  },
  {
    label: "Mission",
    link: "#",
  },
  {
    label: "Vision",
    link: "#",
  },
  {
    label: "Venture Studio",
    link: "#",
  },
  {
    label: "School of Healthcare Innovation",
    link: "#",
  },
  {
    label: "Innovation Support",
    link: "#",
  },
  {
    label: "Innovators Network",
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
    label: "Digital Health Germany",
    link: "#",
  },
  {
    label: "Investors Network",
    link: "#",
  },
  {
    label: "Health Innovation Courses",
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-green py-24">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-0 w-full max-w-screen-xl px-8 lg:mx-auto">
        <div className="flex flex-col gap-4 lg:gap-8 lg:row-span-2">
          <h5 className="text-white font-[600] text-xl lg:text-3xl leading-normal">
            Resources
          </h5>

          <ul>
            {resources.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="text-sm lg:text-xl leading-7 lg:leading-9 text-primary-lemon-green hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:gap-8">
          <h5 className="text-white font-[600] text-xl lg:text-3xl leading-normal">
            Our Organization
          </h5>

          <ul>
            {organizations.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="text-sm lg:text-xl leading-7 lg:leading-9 text-primary-lemon-green hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:gap-8">
          <h5 className="text-white font-[600] text-xl lg:text-3xl leading-normal">
            More
          </h5>

          <ul>
            {more.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="text-sm lg:text-xl leading-7 lg:leading-9 text-primary-lemon-green hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-lg relative lg:mt-6 col-span-2 lg:col-start-2">
          <Input
            placeholder="Subscribe to our Newsletter (Email)"
            className="w-full rounded-none h-12"
          />
          <Button
            onClick={() => {
              toast.error("Feature coming soon.", {
                icon: <Info />,
                className: "border border-primary-green",
              });
            }}
            className="absolute right-1 top-1 rounded-none bg-primary-green hover:bg-primary-green/90"
          >
            Subscribe
          </Button>
        </div>
      </div>

      <div className="text-primary-lemon-green flex flex-col lg:flex-row items-center lg:justify-between gap-8 lg:gap-0 w-full max-w-screen-xl mx-auto pt-24">
        <span className="text-sm lg:text-lg">
          @2024 INNOVATEHEALTH AFRICA. ALL RIGHT RESERVED
        </span>

        <div className="flex">
          <Link
            href="#"
            className="after:content-['|'] after:px-4 text-sm lg:text-lg hover:underline"
          >
            Newsletter
          </Link>
          <Link
            href="#"
            className="after:content-['|'] after:px-4 text-sm lg:text-lg hover:underline"
          >
            {" "}
            Terms of Use
          </Link>
          <Link href="#" className="text-sm lg:text-lg hover:underline">
            {" "}
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
