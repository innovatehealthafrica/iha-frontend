import React from "react";
import fellowshipImage from "@/assets/images/fellowship.png";
import workshopImage from "@/assets/images/workshop.png";
import innovationLabsImage from "@/assets/images/innovation_lab.png";
import ReusableWorkSection, { WorkItem } from "@/components/reusable-work-section";
import { AhifPrograms } from "./ahifComponent";
import { InnovationPrograms } from "./innovationWorkshop";
import { OpenLabPrograms } from "./openLab";

// Example of using the main reusable work section for programs
const programsWorkItems: WorkItem[] = [
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
    moreText: "View More",
    moreComponent: <AhifPrograms />
  },
  {
    title: "Healthcare Innovation Workshop",
    description:
      "This hands-on session empowers healthcare leaders to break barriers, craft user-driven solutions, and unlock business opportunities, delivering impact where it matters most.",
    image: workshopImage,
    tags: ["Design Thinking", "Prototyping", "Testing", "Business Model"],
    reverse: true,
    moreText: "View More",
    moreComponent: <InnovationPrograms />
  },
  {
    title: "Open Innovation Lab",
    description:
      "At the Open Innovation Lab, we combine frontline, grassroots perspectives with advanced technologies and global best practices to design solutions that meet real, local healthcare needs",
    image: innovationLabsImage,
    tags: ["Design Thinking", "Co-creation", "Prototyping", "Testing"],
    moreText: "View More",
    moreComponent: <OpenLabPrograms />
  },
];

export default function ProgramsWorkSection() {
  return (
    <ReusableWorkSection
      title="Our Programs"
      workItems={programsWorkItems}
      showViewMoreButton={true}
      viewMoreButtonText="View All Programs"
      className="py-20"
    />
  );
}

