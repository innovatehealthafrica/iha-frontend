import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

import AHIFNavigation from "@/components/navigation/AHIFNavigation";
import AHIFSocialCard from "@/assets/images/ahif/ahif-socail-card.webp";
import AHIFHeader2026 from "@/components/navigation/AHIFHeader2026";

// const modules = [
//   {
//     title: "Africa & Its Prevailing Healthcare Challenges",
//     description: "Module 1",
//   },
//   {
//     title:
//       "Introduction to Digital Health and the Continent's Digital Transformation Strategy",
//     description: "Module 2",
//   },
//   {
//     title: "Health Data Management & Interoperability",
//     description: "Module 3",
//   },
//   {
//     title: "Design Thinking",
//     description: "Module 4",
//   },
//   {
//     title: "Health Data Analytics",
//     description: "Module 5",
//   },
//   {
//     title: "Digital Health Entrepreneurship/Venture Building",
//     description: "Module 6",
//   },
//   {
//     title: "Responsible Innovation & DPGs for Health",
//     description: "Module 7",
//   },
// ];

export default function AHIF2025Page() {
  return (
    <>
      <AHIFHeader2026 />
      {/* Sticky Navigation */}
      <AHIFNavigation />

      {/* Introduction */}
      <section id="overview" className="bg-white py-14 lg:py-20">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Overview
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mb-6">
            Africa continues to face complex healthcare challenges ranging from limited access to services
            and workforce shortages, to fragmented digital health systems and growing disease burdens.
            Addressing these realities requires more than technology; it requires leaders who understand
            systems, context, and people. The Africa Healthcare Innovation Fellowship (AHIF) was
            designed to produce such leaders.

          </p>

          <p className="text-lg leading-relaxed text-gray-800">
            The AHIF 2026 cohort is a 14-weeks, field-based fellowship designed to equip young African
            professionals with the skills, networks, and hands-on experience needed to identify problems,
            design, test, and scale context-relevant healthcare solutions.
          </p>
          <p> Developed by InnovateHealth Africa (IHA), AHIF 2026 will place fellows directly within real
            health systems to work on real problems, alongside health facilities, communities, policymakers,
            and innovation hubs across the continent.
            Applications for AHIF 2026 are now open.</p>
        </div>
      </section>

      {/* What You'll Gain */}
      <section id="gain" className="bg-primary-green/10 py-14 lg:py-20">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            What You&apos;ll Gain
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mb-8">
            As an AHIF Fellow, you will:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Gain Hands-on experience designing and validating healthcare solutions within
                real-world health system contexts
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Develop core innovation, systems, and decision-making competencies relevant to health
                transformation
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Participate in structured cross-country and multidisciplinary collaboration
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Access guidance from experienced professionals across health, policy, and innovation
                ecosystems
              </p>
            </li>


            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Join a high-impact community of innovators and foster invaluable partnerships that can
                accelerate your projects and open doors to future collaborations
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Receive an official certification validating your newly acquired expertise in digital health
                innovation, recognized by institutions and employers across the continent.
              </p>
            </li>

          </ul>
        </div>
      </section>


      {/* Structure */}
      <section id="structure" className="py-14 lg:py-20 bg-white">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Fellowship Structure
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mb-8">
            AHIF 2026 is a 14 Weeks Fellowship which runs from May to June 2026, through six interconnected phases combining virtual learning with on-site,
            field-based experiences. The phases are:
          </p>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="phase-1" className="border-0">
              <AccordionTrigger className="border border-black/70 px-6 py-4 rounded-md font-bold text-lg hover:bg-primary-green/5 transition-colors">
                Phase 1: Orientation & Foundational Learning | Virtual
              </AccordionTrigger>
              <AccordionContent className="py-6 px-4 text-base">
                <p className="text-gray-800 leading-relaxed mb-6">
                  Introduction to Africa&apos;s health systems, digital transformation priorities, innovation ecosystems,
                  and core competencies
                </p>

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase-2" className="border-0">
              <AccordionTrigger className="border border-black/70 px-6 py-4 rounded-md font-bold text-lg hover:bg-primary-green/5 transition-colors">
                Phase 2: Problem Discovery | On-site
              </AccordionTrigger>
              <AccordionContent className="py-6 px-4 text-base">
                <p className="text-gray-800 leading-relaxed mb-6">
                  Direct engagement with hospitals, communities, and partner institutions to observe challenges
                  and understand user needs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase-3" className="border-0">
              <AccordionTrigger className="border border-black/70 px-6 py-4 rounded-md font-bold text-lg hover:bg-primary-green/5 transition-colors">
                Phase 3:  Problem Validation & Capacity Building | Virtual
              </AccordionTrigger>
              <AccordionContent className="py-6 px-4 text-base">
                <p className="text-gray-800 leading-relaxed mb-6">
                  Guided mentorship and structured learning across leadership, ethics, data, and digital health
                  entrepreneurship.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase-3" className="border-0">
              <AccordionTrigger className="border border-black/70 px-6 py-4 rounded-md font-bold text-lg hover:bg-primary-green/5 transition-colors">
                Phase 4:  Prototyping Lab | On-site
              </AccordionTrigger>
              <AccordionContent className="py-6 px-4 text-base">
                <p className="text-gray-800 leading-relaxed mb-6">
                  Design sprints to co-create and develop solution prototypes, progressing toward MVPs.
                </p>

              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase-3" className="border-0">
              <AccordionTrigger className="border border-black/70 px-6 py-4 rounded-md font-bold text-lg hover:bg-primary-green/5 transition-colors">
                Phase 5:  Field Pilot | On-site
              </AccordionTrigger>
              <AccordionContent className="py-6 px-4 text-base">
                <p className="text-gray-800 leading-relaxed mb-6">
                  Testing solutions in either simulated or operational settings, gathering feedback, and refining for
                  improvements.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="phase-3" className="border-0">
              <AccordionTrigger className="border border-black/70 px-6 py-4 rounded-md font-bold text-lg hover:bg-primary-green/5 transition-colors">
                Phase 6: Demo Day | Virtual
              </AccordionTrigger>
              <AccordionContent className="py-6 px-4 text-base">
                <p className="text-gray-800 leading-relaxed mb-6">
                  Presentation of solutions to ecosystem actors for feedback and post-fellowship ongoing support.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="bg-primary-green/10 py-14 lg:py-20">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
            Who Should Apply ?
          </h2>

          <p className="text-lg leading-relaxed text-gray-800 mb-6">
            AHIF 2026 is designed for young African Professionals who are ready to commit, learn and build.

            You are eligible if you:</p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Are a citizen of an African country and currently reside on the continent
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Are aged 18–35 years at the time of application
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Have a background or demonstrated experience in healthcare, public health, digital
                health, technology, or innovation
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Show a strong interest in healthcare innovation and digital transformation
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Can commit time and effort to the full duration of the fellowship
              </p>
            </li>
          </ul>

        </div>
      </section>


      {/* Key Dates */}
      <section id="keyDates" className="bg-white py-14 lg:py-20">
        <div className="px-8 lg:px-0 space-y-8 max-w-screen-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
            Key Dates
          </h2>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Applications Open: January 2026
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Screening & Selection: March – April 2026
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Fellowship Period: May – July 2026
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-primary-green w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <p className="text-lg leading-relaxed text-gray-800">
                Post-Fellowship Support: August 2026 - onwards
              </p>
            </li>

          </ul>
          <p className="text-lg leading-relaxed text-gray-800 mt-8">
            If you meet the eligibility criteria and can commit to the programme duration, proceed to the
            application form</p>
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
              asChild
              className="h-14 px-10 text-lg font-medium transition-transform hover:scale-105 cursor-pointer"
            >
              <Link
                target="_blank"
                href="https://forms.gle/gGcocuE2qZEJfsBB6"
              >
                Apply Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Africa Healthcare Innovation Fellowship 2026",
  description:
    "Empowering innovators to transform healthcare in Africa through digital solutions.",
  alternates: {
    canonical: "https://innovatehealth.africa/ahif-2026",
  },

  openGraph: {
    title: "Africa Healthcare Innovation Fellowship 2026",
    description:
      "Empowering innovators to transform healthcare in Africa through digital solutions.",
    url: "https://innovatehealth.africa/ahif-2026",
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
    title: "Africa Healthcare Innovation Fellowship 2026",
    description:
      "Empowering innovators to transform healthcare in Africa through digital solutions.",
    images: [AHIFSocialCard.src],
  },
};
