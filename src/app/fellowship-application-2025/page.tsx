"use client";

import ContactUsSection from "@/components/contact-us-section";
import PartnerSection from "@/app/(landing-page)/components/partners-section";
import Header from "./component/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    title: "Africa & Its Prevailing Healthcare Challenges",
    description: "Module 1",
  },
  {
    title:
      "Introduction to Digital Health and the Continent’s Digital Transformation Strategy",
    description: "Module 2",
  },
  {
    title: "Health Data Management & Interoperability",
    description: "Module 3",
  },
  {
    title: "Design Thinking",
    description: "Module 4",
  },
  {
    title: "Health Data Analytics",
    description: "Module 5",
  },
  {
    title: "Digital Health Entrepreneurship/Venture Building",
    description: "Module 6",
  },
  {
    title: "Responsible Innovation & DPGs for Health",
    description: "Module 7",
  },
];

export default function About() {
  return (
    <>
      <Header />

      {/* Introduction */}
      <section className="bg-white py-14 lg:py-20">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <div className="flex border-b pb-4 w-full gap-8">
            <Link
              className={cn(
                "text-primary font-bold py-4 px-4 text-primary-green rounded-md",
                {
                  "bg-primary-green/10  hover:bg-primary-green/10": true,
                }
              )}
              href="/fellowship-application-2025"
            >
              Overview
            </Link>
            <Link
              className={cn(
                "text-primary font-bold py-4 px-4 text-primary-green rounded-md",
                {
                  "bg-primary-green/10  hover:bg-primary-green/10": true,
                }
              )}
              href="/fellowship-application-2025"
            >
              Structure
            </Link>
            <Link
              className={cn(
                "text-primary font-bold py-4 px-4 text-primary-green rounded-md",
                {
                  "bg-primary-green/10  hover:bg-primary-green/10": true,
                }
              )}
              href="/fellowship-application-2025"
            >
              Core Module
            </Link>
            <Link
              className={cn(
                "text-primary font-bold py-4 px-4 text-primary-green rounded-md",
                {
                  "bg-primary-green/10  hover:bg-primary-green/10": true,
                }
              )}
              href="/fellowship-application-2025"
            >
              Why Apply
            </Link>
            <Link
              className={cn(
                "text-primary font-bold py-4 px-4 text-primary-green rounded-md",
                {
                  "bg-primary-green/10  hover:bg-primary-green/10": true,
                }
              )}
              href="/fellowship-application-2025"
            >
              Eligibility
            </Link>
          </div>

          <p>
            AHIF is a capacity strengthening initiative of InnovateHealth Africa
            (IHA) dedicated to fostering innovation in healthcare by empowering
            young professionals with the required skills, knowledge, resources
            and networks required to lead innovation in their communities. The
            fellowship was designed as a comprehensive response to the urgent
            need and critical demand for professionals who are not only skilled
            in utilising digital solutions, but are also competent at
            co-creating innovative solutions specifically tailored to the unique
            challenges and contexts of the African landscape. 
          </p>

          <p>
            It addresses the pressing need to equip these professionals with the
            knowledge, tools, capabilities and network to lead and innovate in a
            sector that is increasingly reliant on context-aware health
            interventions, technology-driven solutions, and sustainable
            practices that resonate with the diverse needs of the African
            population.
          </p>
        </div>
      </section>

      {/* Structure */}
      <section className="py-14 lg:py-20 bg-primary-green/10">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Structure
          </h2>

          <p>
            The Africa Healthcare Innovation Fellowship (AHIF) 2025 is designed
            as a high-impact, hands-on program that equips fellows with
            practical skills, real-world experience, and direct access to
            industry leaders. The fellowship is structured into three key
            phases, each tailored to provide progressive learning.
          </p>

          <Accordion type="single" collapsible className="space-y-8">
            <AccordionItem value="phase-1">
              <AccordionTrigger className="border border-black px-4 font-bold text-lg">
                Phase 1: The Bootcamp (8 Weeks, Online)
              </AccordionTrigger>
              <AccordionContent className="py-4 text-base">
                <p>
                  The journey begins with an intensive bootcamp, where fellows
                  dive deep into the key focus areas highlighted in earlier
                  sections. This phase is packed with expert-led training,
                  interactive learning, and practical exercises to build a solid
                  foundation in digital health & innovation.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8">
                  What to Expect:
                </h3>

                <ul className="list-disc pl-4">
                  <li>
                    Live Faculty-Led Sessions: Learn from leading digital health
                    experts through interactive masterclasses and Q&A sessions.
                  </li>
                  <li>
                    Case Studies & Real-World Applications: Work on real
                    healthcare challenges, analysing successful health-tech
                    solutions from across Africa and beyond.
                  </li>
                  <li>
                    Hands-On Assignments & Projects: Develop practical digital
                    health solutions based on the curriculum focus areas.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase-2">
              <AccordionTrigger className="border border-black px-4 font-bold text-lg">
                Phase 2: The Lab & Demo Day (4 Weeks, Hybrid)
              </AccordionTrigger>
              <AccordionContent className="py-4 text-base">
                <p>
                  In this phase, fellows will work in collaborative teams to
                  develop and refine their digital health solutions. This phase
                  culminates in a Demo Day where teams present their projects to
                  a panel of experts.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8">
                  What to Expect:
                </h3>

                <ul className="list-disc pl-4">
                  <li>
                    Collaborative Team Projects: Work with peers to develop
                    innovative solutions to real-world healthcare challenges.
                  </li>
                  <li>
                    Mentorship: Receive guidance and feedback from experienced
                    mentors in the digital health field.
                  </li>
                  <li>
                    Demo Day: Present your projects to a panel of industry
                    experts and receive valuable feedback.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase-3">
              <AccordionTrigger className="border border-black px-4 font-bold text-lg">
                Phase 3: Post-Fellowship Support
              </AccordionTrigger>
              <AccordionContent className="py-4 text-base">
                <p>
                  After the fellowship, participants will receive ongoing
                  support to help them implement their projects and continue
                  their professional development.
                </p>

                <h3 className="text-2xl font-bold text-primary mt-8">
                  What to Expect:
                </h3>

                <ul className="list-disc pl-4">
                  <li>
                    Continued Mentorship: Access to a network of mentors for
                    ongoing guidance and support.
                  </li>
                  <li>
                    Networking Opportunities: Connect with industry leaders and
                    potential collaborators.
                  </li>
                  <li>
                    Resources & Tools: Access to resources and tools to help
                    implement and scale your projects.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Core Modules */}
      <section className="bg-white py-14 lg:py-20">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Core Modules
          </h2>

          <p className="">The Fellowship’s core areas of focus include:</p>

          <div className="border border-black rounded-lg px-12 py-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className={cn("mb-8 pb-4", {
                  "border-b": index !== modules.length - 1,
                })}
              >
                <h3 className="text-xl font-bold text-primary">
                  {module.title}
                </h3>
                <p>{module.description}</p>
              </div>
            ))}

            <div className="flex justify-between items-center">
              <p>
                Download the{" "}
                <span className="font-bold italic">fellowship Brochure</span>{" "}
                here for full module
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-8 h-14 px-8 text-base"
              >
                <Link target="_blank" href="#">
                  Download
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apply */}
      <section className="py-14 lg:py-20 bg-primary-green/10">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Why Apply?
          </h2>

          <ul className="list-disc pl-4">
            <li>
              Master cutting-edge innovation tools and methodologies through
              practical workshops, interactive labs, and hands-on projects that
              address Africa’s most pressing healthcare needs.
            </li>
            <li>
              Engage in field experiences and case studies that allow you to
              pilot tangible solutions, create impact in diverse communities,
              and refine your innovations based on direct feedback.
            </li>
            <li>
              Receive guidance from renowned digital health professionals and
              seasoned entrepreneurs who will support your growth, help navigate
              challenges, and shape you into an influential leader in Africa’s
              healthcare space.
            </li>
            <li>
              Join a high-impact community of innovators and foster invaluable
              partnerships that can accelerate your projects and open doors to
              future collaborations.
            </li>
            <li>
              Receive an official certification validating your newly acquired
              expertise in digital health innovation, recognized by institutions
              and employers across the continent.
            </li>
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-white py-14 lg:py-20">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Eligibility
          </h2>

          <ul className="list-disc pl-4">
            <li>Young professionals aged 17–35 years from across Africa.</li>
            <li>
              Healthcare professionals, tech innovators, entrepreneurs,
              policymakers, researchers, government officials.
            </li>
            <li>
              Individuals or teams with ideas, startups, or research interests
              focused on digital health and healthcare transformation.
            </li>
            <li>Must be available for the full 4 months hybrid program.</li>
            <li>
              Prepared to learn, collaborate, and solve problems in healthcare.
            </li>
          </ul>

          <Button asChild className="mt-8 h-14 px-8 text-base">
            <Link
              target="_blank"
              href="https://form.jotform.com/250440880751051"
            >
              Apply Now
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
