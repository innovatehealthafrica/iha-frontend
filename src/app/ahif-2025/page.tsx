import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "./components/header";
import { Metadata } from "next";
import AHIFNavigation from "./components/navigation";
import AHIFSocialCard from "@/assets/images/ahif/ahif-socail-card.webp";
import { LockClosedIcon } from "@radix-ui/react-icons";

const modules = [
  {
    title: "Africa & Its Prevailing Healthcare Challenges",
    description: "Module 1",
  },
  {
    title:
      "Introduction to Digital Health and the Continent's Digital Transformation Strategy",
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

export default function AHIF2025Page() {
  return (
    <>
      <Header />

      {/* Sticky Navigation */}
      <AHIFNavigation />

      {/* Introduction */}
      <section id="overview" className="bg-white py-14 lg:py-20">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Overview
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mb-6">
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

          <p className="text-lg leading-relaxed text-gray-800">
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
      <section id="structure" className="py-14 lg:py-20 bg-primary-green/10">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Structure
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mb-8">
            The Africa Healthcare Innovation Fellowship (AHIF) 2025 is designed
            as a high-impact, hands-on program that equips fellows with
            practical skills, real-world experience, and direct access to
            industry leaders. The fellowship is structured into three key
            phases, each tailored to provide progressive learning.
          </p>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="phase-1" className="border-0">
              <AccordionTrigger className="border border-black/70 px-6 py-4 rounded-md font-bold text-lg hover:bg-primary-green/5 transition-colors">
                Phase 1: The Bootcamp (8 Weeks, Online)
              </AccordionTrigger>
              <AccordionContent className="py-6 px-4 text-base">
                <p className="text-gray-800 leading-relaxed mb-6">
                  The journey begins with an intensive bootcamp, where fellows
                  dive deep into the key focus areas highlighted in earlier
                  sections. This phase is packed with expert-led training,
                  interactive learning, and practical exercises to build a solid
                  foundation in digital health & innovation.
                </p>

                <h3 className="text-xl font-bold text-primary mt-8 mb-4">
                  What to Expect:
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-800">
                  <li className="leading-relaxed">
                    <span className="font-semibold">
                      Live Faculty-Led Sessions:
                    </span>{" "}
                    Learn from leading digital health experts through
                    interactive masterclasses and Q&A sessions.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">
                      Case Studies & Real-World Applications:
                    </span>{" "}
                    Work on real healthcare challenges, analysing successful
                    health-tech solutions from across Africa and beyond.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">
                      Hands-On Assignments & Projects:
                    </span>{" "}
                    Develop practical digital health solutions based on the
                    curriculum focus areas.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase-2" className="border-0">
              <AccordionTrigger className="border border-black/70 px-6 py-4 rounded-md font-bold text-lg hover:bg-primary-green/5 transition-colors">
                Phase 2: The Lab & Demo Day (4 Weeks, Hybrid)
              </AccordionTrigger>
              <AccordionContent className="py-6 px-4 text-base">
                <p className="text-gray-800 leading-relaxed mb-6">
                  This is where learning meets action! Fellows who successfully
                  complete the bootcamp will have the opportunity to move into
                  the Lab Phase, where they refine, test, and validate their
                  digital health solutions under expert mentorship.
                </p>

                <h3 className="text-xl font-bold text-primary mt-8 mb-4">
                  What Happens in This Phase?
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-800">
                  <li className="leading-relaxed">
                    <span className="font-semibold">
                      Collaborative Innovation:
                    </span>{" "}
                    Fellows work in teams to build and refine their healthtech
                    solutions.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">
                      Hands-On Experimentation:
                    </span>{" "}
                    Receive technical guidance, feedback, and iterative support
                    from industry mentors.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Demo Day:</span> Fellows
                    will present their solutions to a panel of experts,
                    policymakers, health organizations, and funding bodies. Top
                    solutions will potentially have access to incubation, and
                    acceleration opportunities.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase-3" className="border-0">
              <AccordionTrigger className="border border-black/70 px-6 py-4 rounded-md font-bold text-lg hover:bg-primary-green/5 transition-colors">
                Phase 3: Post-Fellowship Support
              </AccordionTrigger>
              <AccordionContent className="py-6 px-4 text-base">
                <p className="text-gray-800 leading-relaxed mb-6">
                  After the fellowship, participants will receive ongoing
                  support to help them implement their projects and continue
                  their professional development.
                </p>

                <h3 className="text-xl font-bold text-primary mt-8 mb-4">
                  What to Expect:
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-gray-800">
                  <li className="leading-relaxed">
                    <span className="font-semibold">Continued Mentorship:</span>{" "}
                    Access to a network of mentors for ongoing guidance and
                    support.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">
                      Networking Opportunities:
                    </span>{" "}
                    Connect with industry leaders and potential collaborators.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold">Resources & Tools:</span>{" "}
                    Access to resources and tools to help implement and scale
                    your projects.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Core Modules */}
      <section id="core-modules" className="bg-white py-14 lg:py-20">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Core Modules
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mb-8">
            The Fellowship&apos;s core areas of focus include:
          </p>

          <div className="border rounded-lg px-4 sm:px-8 py-10 shadow-sm">
            {modules.map((module, index) => (
              <div
                key={index}
                className={cn("mb-8 pb-6", {
                  "border-b border-gray-200": index !== modules.length - 1,
                })}
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-700">{module.description}</p>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-4 border-t border-gray-200">
              <p className="text-gray-800">
                Download the{" "}
                <a
                  className="font-bold italic"
                  target="_blank"
                  href="https://drive.google.com/file/d/1LmrVYJnNMDSXfx4X7qGid8ihtpUIKvcv/view?usp=drive_link"
                  download
                >
                  fellowship Brochure
                </a>{" "}
                here for full module details
              </p>
              <Button
                asChild
                variant="outline"
                className="h-12 px-8 text-base font-medium"
              >
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1LmrVYJnNMDSXfx4X7qGid8ihtpUIKvcv/view?usp=drive_link"
                  download
                >
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apply */}
      <section id="why-apply" className="py-14 lg:py-20 bg-primary-green/10">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
            Why Apply?
          </h2>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Master cutting-edge innovation tools and methodologies through
                practical workshops, interactive labs, and hands-on projects
                that address Africa&apos;s most pressing healthcare needs.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Engage in field experiences and case studies that allow you to
                pilot tangible solutions, create impact in diverse communities,
                and refine your innovations based on direct feedback.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Receive guidance from renowned digital health professionals and
                seasoned entrepreneurs who will support your growth, help
                navigate challenges, and shape you into an influential leader in
                Africa&apos;s healthcare space.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Join a high-impact community of innovators and foster invaluable
                partnerships that can accelerate your projects and open doors to
                future collaborations.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Receive an official certification validating your newly acquired
                expertise in digital health innovation, recognized by
                institutions and employers across the continent.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="bg-white py-14 lg:py-20">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
            Eligibility
          </h2>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Young professionals aged 17–35 years from across Africa.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Healthcare professionals, tech innovators, entrepreneurs,
                policymakers, researchers, government officials.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Individuals or teams with ideas, startups, or research interests
                focused on digital health and healthcare transformation.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Must be available for the full 4 months hybrid program.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Prepared to learn, collaborate, and solve problems in
                healthcare.
              </p>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-800 mt-8">
            For enquiries or questions, send us an email at{" "}
            <a
              href="mailto:info@innovatehealthafrica.org"
              className="text-primary-green underline"
            >
              info@innovatehealthafrica.org
            </a>
          </p>

          <div className="flex justify-center">
            <Button
              disabled
              className="h-14 px-10 text-lg font-medium transition-transform hover:scale-105 disabled:opacity-30"
            >
              <Link
                target="_blank"
                className="flex items-center"
                href="javascript:void(0)"
              >
                <LockClosedIcon className="me-2" />
                <span>Application Closed</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Africa Healthcare Innovation Fellowship 2025",
  description:
    "Empowering innovators to transform healthcare in Africa through digital solutions.",
  alternates: {
    canonical: "https://innovatehealth.africa/ahif-2025",
  },

  openGraph: {
    title: "Africa Healthcare Innovation Fellowship 2025",
    description:
      "Empowering innovators to transform healthcare in Africa through digital solutions.",
    url: "https://innovatehealth.africa/ahif-2025",
    type: "website",
    images: [
      {
        url: AHIFSocialCard.src,
        width: 1200,
        height: 630,
        alt: "AHIF 2025 Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Healthcare Innovation Fellowship 2025",
    description:
      "Empowering innovators to transform healthcare in Africa through digital solutions.",
    images: [AHIFSocialCard.src],
  },
};
