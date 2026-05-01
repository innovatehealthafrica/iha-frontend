import React from "react"
import ReusableProgramSection, { WorkItem } from "./allProgamsReuseable"




const programsWorkItems: WorkItem[] = [
  {
    title: "Africa Health Innovation Fellowship",
    description:
      "The African Health Innovation Fellowship (AHIF) by Innovate Health Africa empowers young professionals, aged 17 - 35 years, with the skills, knowledge, and networks to drive healthcare innovation. It equips them to co-create digital and context-aware solutions tailored to Africa’s unique health challenges. The fellowship addresses the growing need for leaders who can deliver sustainable, technology-driven healthcare interventions.",
    tags: ["Leadership", "Co-creation", "Problem-Solving", "Innovation", "Networking", "Mentorship"],
    expect: [
      {
        title: "Advanced Skills & Knowledge",
        description: "Training in digital health innovation, design thinking, health data analytics, and digital entrepreneurship.",
      },
      {
        title: "Hands-On Experience",
        description: "Practical workshops, real-world case studies, and field projects to test and refine solutions.",
      },
      {
        title: "Mentorship & Guidance",
        description: "Access to experienced digital health professionals, industry leaders, and successful entrepreneurs.",
      },
      {
        title: "Networking Opportunities",
        description: "Join a pan-African community of innovators, fostering long-term collaborations and partnerships.",
      },
      {
        title: "Post-Fellowship Support",
        description: "Ongoing assistance to scale and implement innovative healthcare solutions in local communities.",
      },
      {
        title: "Certification",
        description: "Receive a recognized certificate, enhancing career opportunities and professional credibility.",
      },
    ],
    testimonials: true,
    link: "#",
    linkText: "Join Next Cohort",
  }
]

export function AhifPrograms() {
  return (
    <ReusableProgramSection
      workItems={programsWorkItems}
      className="py-20"
    />
  )
}

