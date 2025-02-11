import Image from "next/image";
import Link from "next/link";
import React from "react";

import post1Image from "@/assets/images/blogs/post-1.png";
import post2Image from "@/assets/images/blogs/post-2.png";
import post3Image from "@/assets/images/blogs/post-3.png";
import post4Image from "@/assets/images/blogs/post-4.png";
import { Button } from "@/components/ui/button";

const higlights = [
  {
    title: "Innovate Health Africa Launches New Accelerator Program",
    date: "4th June, 2001",
    thumbnail: post1Image,
  },
  {
    title:
      "IHA Partners with Leading Tech Firm to Enhance Digital Health Solutions",
    date: "22th August, 2023",
    thumbnail: post2Image,
  },
  {
    title: "IHA Hosts Annual African Health Innovation Summit",
    date: "14th Dec, 2024",
    thumbnail: post3Image,
  },
  {
    title: "Innovate Health Africa Receives Grant for Rural Health Initiative",
    date: "4th May, 2007",
    thumbnail: post4Image,
  },
];

export default function BlogSection() {
  return (
    <section className="bg-primary-green/5 py-20">
      <div className="px-8 lg:px-24 gap-x-12 max-w-screen-xl mx-auto">
        <div className="mb-10 flex flex-col lg:flex-row justify-between lg:items-end gap-y-4 lg:gap-y-0">
          <h2 className="text-xl sm:text-2xl">
            IHA news and <br />
            <span className="font-[600] text-3xl sm:text-5xl lg:leading-normal">
              highlights
            </span>
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {higlights.map(({ title, date, thumbnail }, index) => (
            <div key={index} className="flex flex-col gap-5">
              <Image
                src={thumbnail}
                alt={`${title} thumbnail`}
                className="rounded-md"
              />
              <div>
                <h4 className="font-medium text-lg leading-7 line-clamp-2 sm:line-clamp-3 h-[56px] sm:h-[84px]">
                  {title}
                </h4>
                <span className="text-base font-light">{date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button className="mt-12" size="lg">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}
