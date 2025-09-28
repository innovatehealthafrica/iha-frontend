import React from "react"
import ReusableProgramSection, { WorkItem } from "./allProgamsReuseable"

const programsWorkItems: WorkItem[] = [
  {
    title: "Open Innovation Lab",
    description:
      "Our Open Innovation Lab is a dynamic, public innovation space that unites diverse grassroots stakeholders—community leaders, health professionals, developers, and entrepreneurs—to co-create digital solutions for pressing healthcare challenges. By bringing together voices from the front lines of healthcare and leveraging cutting-edge technology, the Lab fosters a collaborative environment where local insights meet global best practices. Through support and partnership, high-level institutions can help accelerate these community-driven innovations, ensuring sustainable impact and improved healthcare outcomes across Africa.",
    tags: ["Design Thinking", "Co-creation", "Prototyping", "Testing"],
    // expect: [
    //   {
    //     title: "Advanced Skills & Knowledge",
    //     description: "Training in digital health innovation, design thinking, health data analytics, and entrepreneurship.",
    //   },
    //   {
    //     title: "Hands-On Experience",
    //     description: "Practical workshops, real-world case studies, and field projects to test and refine solutions.",
    //   },
    // ],
    testimonials: false,
    link: "#",
    linkText: "Join Next Cohort",
  },
]

export function OpenLabPrograms() {
  return (
    <ReusableProgramSection
      workItems={programsWorkItems}
      className="py-20"
    />
  )
}

