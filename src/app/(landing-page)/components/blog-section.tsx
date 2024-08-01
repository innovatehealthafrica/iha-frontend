import Image from "next/image";
import Link from "next/link";
import React from "react";

import post1Image from "@/assets/images/blogs/post-1.png";
import post2Image from "@/assets/images/blogs/post-2.png";
import post3Image from "@/assets/images/blogs/post-3.png";
import post4Image from "@/assets/images/blogs/post-4.png";

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
      <div className="px-24 gap-x-12 max-w-screen-2xl mx-auto">
        <div className="mb-10 flex justify-between items-end">
          <h2 className="text-2xl">
            IHA news and <br />
            <span className="font-[600] text-5xl leading-normal">
              highlights
            </span>
          </h2>

          <Link href="#" className="block text-right ">
            View all
          </Link>
        </div>
        <div className="w-full grid grid-cols-4 gap-6">
          {higlights.map(({ title, date, thumbnail }, index) => (
            <div key={index} className="flex flex-col gap-5">
              <Image src={thumbnail} alt={`${title} thumbnail`} />
              <div>
                <h4 className="font-[600] text-xl leading-8">{title}</h4>
                <span className="text-sm">{date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
