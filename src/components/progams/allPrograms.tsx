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
  },
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
  {
    title: "Open Innovation Lab",
    description:
      "Our Open Innovation Lab is a dynamic, public innovation space that unites diverse grassroots stakeholders—community leaders, health professionals, developers, and entrepreneurs—to co-create digital solutions for pressing healthcare challenges. By bringing together voices from the front lines of healthcare and leveraging cutting-edge technology, the Lab fosters a collaborative environment where local insights meet global best practices. Through support and partnership, high-level institutions can help accelerate these community-driven innovations, ensuring sustainable impact and improved healthcare outcomes across Africa.",
    tags: ["Design Thinking", "Co-creation", "Prototyping", "Testing"],
    expect: [
      {
        title: "Advanced Skills & Knowledge",
        description: "Training in digital health innovation, design thinking, health data analytics, and entrepreneurship.",
      },
      {
        title: "Hands-On Experience",
        description: "Practical workshops, real-world case studies, and field projects to test and refine solutions.",
      },
    ],
    testimonials: true,
    link: "",
    linkText: "Register Now",
  },
]

export function AllPrograms() {
  return (
    <ReusableProgramSection
      workItems={programsWorkItems}
      className="mt-24"
    />
  )
}


const ImpactFigure = () => {
  return (
    <div className="grid grid-cols-3 gap-6">


    </div>
  )
}