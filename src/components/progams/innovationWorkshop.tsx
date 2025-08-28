import React from "react"
import ReusableProgramSection, { WorkItem } from "./allProgamsReuseable"




const programsWorkItems: WorkItem[] = [

  {
    title: "Healthcare Innovation Workshop",
    description:
      "This is an educative, highly engaging and interactive session designed to help healthcare leaders to understand innovation techniques and business principles that will improve service users experience, deliver new solutions, untie bottlenecks and unlock new opportunities for the business. This hands-on session empowers healthcare leaders to break barriers, craft user-driven solutions, and unlock business opportunities, delivering impact where it matters most.",
    tags: ["Design Thinking", "Prototyping", "Testing", "Business Model"],
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
    impact: [
      {
        figure: "100+",
        description: "Innovative healthcare solutions developed & piloted"
      },
      {
        figure: "100+",
        description: "Innovative healthcare solutions developed & piloted"
      },
      {
        figure: "100+",
        description: "Innovative healthcare solutions developed & piloted"
      }
    ],
    link: "#",
    linkText: "Join Now",
  },

]

export function InnovationPrograms() {
  return (
    <ReusableProgramSection
      workItems={programsWorkItems}
      className="py-20"
    />
  )
}

