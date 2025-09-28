import React from "react";
import fellowshipImage from "@/assets/images/fellowship.png";
import workshopImage from "@/assets/images/workshop.png";
import pitchyardImage from "@/assets/images/pitchyard.webp";
import innovationLabsImage from "@/assets/images/innovation_lab.png";
import ReusableWorkSection, { WorkItem } from "@/components/reusable-work-section";
import { AhifPrograms } from "./ahifComponent";
import { PitchYard } from "./pitchYard";
import { OpenLabPrograms } from "./openLab";


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
    viewMoreButtonLink: "https://innovatehealth.africa/ahif-2025",
    moreComponent: <AhifPrograms />
  },
  {
    title: "PITCHYARD",
    description:
      "Most accelerators are built for startups already in motion. PitchYard is different. We’re Africa’s launchpad for idea - stage healthtech innovators, the nurses, doctors, technologists, and young builders closest to the problems.",
    image: pitchyardImage,
    tags: ["Design Thinking", "Prototyping", "Testing", "Business Model"],
    reverse: true,
    moreText: "View More",
    moreComponent: <PitchYard />
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
  {
    title: "Digital Health Literacy Self-Assessment Tool (DHL‑SAT)",
    description:
      "DHL-SAT is scientifically validated tool built for African frontline healthcare professionals to self-assess their digital health literacy. In just a few minutes, users receive a personalized literacy profile and curated learning recommendations to bridge skill gaps and advance their digital capabilities.",
    image: workshopImage,
    tags: ["Design Thinking", "Co-creation", "Prototyping", "Testing"],
    moreText: "Take the Assessment",
    viewMoreButtonLink: "https://dhl.innovatehealth.africa/"
  },
  {
    title: "Mpox Diagnostic Tool",
    description:
      "Built in response to the Mpox outbreak, our AI-powered skin lesion detection tool helps healthcare workers in low-resource settings make faster, more accurate diagnoses. Developed through our open innovation lab and grounded in real-world data, the tool is being piloted across Africa to support early detection and outbreak response.",
    image: innovationLabsImage,
    tags: ["Design Thinking", "Co-creation", "Prototyping", "Testing"],
    moreText: " Learn More",
    viewMoreButtonLink: "#"
  },
  {
    title: "Innovation Toolkit for African HealthTech Innovators",
    description:
      "This practical toolkit is your innovation co-pilot. Access expert insights, plug-and-play templates, interactive worksheets, and scalable frameworks—all designed to help you build, test, and launch impactful health solutions in Africa. Whether you're at concept stage or ready to scale, this toolkit helps you do it right.",
    image: innovationLabsImage,
    tags: ["Design Thinking", "Co-creation", "Prototyping", "Testing"],
    moreText: " Access Toolkit",
    viewMoreButtonLink: "#"
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

