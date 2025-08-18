"use client"

import React from "react"
import { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import TestimonialSection from "@/app/(landing-page)/components/testimonial-section"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "../ui/button"

export interface WorkItem {
  title: string
  description: string
  image?: StaticImageData
  tags?: string[]
  expect?: { title: string; description: string }[]
  testimonials?: boolean
  impact?: {
    figure: string,
    description: string
  }[],
  link?: string
  linkText?: string
}

interface ReusableProgramSectionProps {
  workItems: WorkItem[]
  className?: string
}

export default function ReusableProgramSection({
  workItems,
  className,
}: ReusableProgramSectionProps) {
  return (
    <section className={cn("max-w-screen-xl mx-auto pb-16 lg:pb-16 px-4 lg:px-16", className)}>
      <div className="space-y-24">
        <h1 className="text-[#0D2414] text-center font-bold text-4xl lg:text-5xl">
          Our Programs
        </h1>
        {workItems.map((item, i) => (
          <div
            key={i}
            className="bg-white p-4 lg:p-8 rounded-lg shadow-[rgba(0,0,0,0.24)_0px_3px_8px] flex flex-col 
  items-center justify-center space-y-8"
          >
            <div className="lg:px-7 flex flex-col items-center space-y-4">
              <h3 className="text-2xl lg:text-[40px] font-semibold text-primary text-center">{item.title}</h3>
              <p className="text-gray-700 leading-7">{item.description}</p>

            </div>
            {/* Tags */}
            {item.tags && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#CFD3D0] text-[#0D2414] rounded-md px-3 py-2 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* What to expect */}
            {item.expect && (
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-lg lg:text-[24px] font-semibold mb-4 text-primary">What to expect</h4>
                <ul className="space-y-3">
                  {item.expect.map((e, idx) => (
                    <li key={idx} className="relative rounded-lg pb-3 lg:pl-8">
                      <div className="flex items-center gap-2">
                        <span className="bg-gray-300 h-6 w-6 rounded-full flex items-center justify-center lg:absolute lg:-left-7 lg:top-1.5">
                          <Play className="w-4 h-4 text-white" />
                        </span>
                        <p className="font-semibold text-[#35493B]">{e.title}</p>
                      </div>
                      <p className="text-[#35493B] mt-1">{e.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Testimonials */}
            {item.testimonials && (
              <TestimonialSection embedded title="What AHIF fellows say"
                className="max-w-5xl mx-auto" />
            )}

            {item.impact && (
              <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
                <h4 className="text-lg lg:text-[24px] font-semibold mb-4 text-primary">
                  Impact Figures
                </h4>
                <div className="grid gap-6 md:grid-cols-3">
                  {item.impact.map((t, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center"
                    >
                      <h3 className="text-primary text-[40px] mb-4 font-medium">{t.figure}</h3>
                      <p className="text-[#5E6D62] font-normal text-xl mb-4 max-w-[250px] text-center">{t.description}</p>

                    </div>
                  ))}
                </div>
              </div>
            )}


            <div className="py-8">
              {item.link && (
                <Button
                  variant="link"
                  className="font-medium text-xl flex items-center justify-start bg-primary text-white"
                  asChild
                >
                  <a href={item.link}>
                    {item.linkText || "Learn More"}

                  </a>
                </Button>
              )}
            </div>
          </div>


        ))}
      </div>
    </section>
  )
}
