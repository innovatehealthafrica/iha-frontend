import React from "react"
import ReusableProgramSection, { WorkItem } from "./allProgamsReuseable"




const programsWorkItems: WorkItem[] = [

  {
    title: "PITCHYARD",
    description:
      "Most accelerators are built for startups already in motion. PitchYard is different. We’re Africa’s launchpad for idea - stage healthtech innovators, the nurses, doctors, technologists, and young builders closest to the problems.",
    tags: ["Design Thinking", "Prototyping", "Testing", "Business Model"],
    expect: [
      {
        title: "A safe space to test and validate early ideas.",
        description: "Training in digital health innovation, design thinking, health data analytics, and digital entrepreneurship.",
      },
      {
        title: " ⁠Guidance & accountability to turn concepts into traction.",
        description: "Practical workshops, real-world case studies, and field projects to test and refine solutions.",
      },
      {
        title: "Pathways to partners & funders when your solution is ready.",
        description: "Access to experienced digital health professionals, industry leaders, and successful entrepreneurs.",
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
    link: "mailto:info@innovatehealthafrica.org",
    linkText: "Submit your Ideas",
  },

]

export function PitchYard() {
  return (
    <ReusableProgramSection
      workItems={programsWorkItems}
      className="py-20"
    />
  )
}

