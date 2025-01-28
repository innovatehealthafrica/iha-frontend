import React from "react";
import fellowshipImage from "@/assets/images/fellowship.png";
import workshopImage from "@/assets/images/workshop.png";
import innovationLabsImage from "@/assets/images/innovation_lab.png";
import Image from "next/image";
import { reverse } from "dns";
import { cn } from "@/lib/utils";

const workItems = [
  {
    title: "Africa Health Innovation Fellowship",
    description:
      "Through AHIF, we equip the next generation of healthcare innovation leaders with the skills, resources, and networks they need to drive sustainable innovation in their communities.",
    image: fellowshipImage,
    tags: [
      "Leadership",
      "Co-creation",
      "Problem-Solving",
      "Innovation",
      "Networking",
      "Mentorship",
    ],
  },
  {
    title: "Healthcare Innovation Workshop",
    description:
      "This hands-on session empowers healthcare leaders to break barriers, craft user-driven solutions, and unlock business opportunities, delivering impact where it matters most.",
    image: workshopImage,
    tags: ["Design Thinking", "Prototyping", "Testing", "Business Model"],
    reverse: true,
  },
  {
    title: "Open Innovation Lab",
    description:
      "At the Open Innovation Lab, we combine frontline, grassroots perspectives with advanced technologies and global best practices to design solutions that meet real, local healthcare needs",
    image: innovationLabsImage,
    tags: ["Design Thinking", "Co-creation", "Prototyping", "Testing"],
  },
];
export default function OurWorkSection() {
  return (
    <section className="max-w-screen-xl mx-auto py-20">
      <div className="px-8 lg:px-0 py-20 gap-x-12 max-w-screen-2xl mx-auto">
        <h3 className="text-5xl text-center text-primary font-bold mb-12">
          Our Work
        </h3>

        <div className="space-y-12">
          {workItems.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-x-12 bg-white p-8 rounded-lg shadow-[0_0_8px_8px_rgba(0,0,0,0.05)]",
                {
                  "lg:flex-row-reverse": item.reverse,
                }
              )}
            >
              <div>
                <h4 className="text-3xl font-[500] text-primary mb-6">
                  {item.title}
                </h4>
                <p className="leading-8 mb-7">{item.description}</p>
                <div className="flex gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#CFD3D0] text-[#0D2414] rounded-lg p-2 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Image
                src={item.image}
                width={1408}
                height={768}
                alt="Fellowship"
                className="rounded-lg w-1/2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
