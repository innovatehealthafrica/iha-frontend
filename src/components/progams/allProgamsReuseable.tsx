"use client"

import React from "react"
import { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import TestimonialSection from "@/app/(landing-page)/components/testimonial-section"
import { Play } from "lucide-react"

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
    <section className={cn("max-w-screen-xl mx-auto py-16 px-16", className)}>
      <div className="space-y-24">
        {workItems.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-lg shadow-[rgba(0,0,0,0.24)_0px_3px_8px] flex flex-col 
  items-center justify-center space-y-8"
          >
            <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
            <p className="text-gray-700 leading-7">{item.description}</p>

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
                <h4 className="text-lg font-semibold mb-4 text-primary">What to expect</h4>
                <ul className="space-y-3">
                  {item.expect.map((e, idx) => (
                    <li key={idx} className="relative rounded-lg pb-3">
                      <span className="bg-gray-300 h-6 w-6 rounded-full flex items-center justify-center absolute -left-8 top-1.5">
                        <Play className="w-4 h-4 text-white" />
                      </span>
                      <div className="flex gap-1">
                        <p className="font-semibold text-gray-900">{e.title}:</p>
                        <p className="text-gray-600">{e.description}</p>
                      </div>
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
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  Impact Figures
                </h4>
                <div className="grid gap-6 md:grid-cols-3">
                  {item.impact.map((t, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-xl p-4 shadow-sm"
                    >
                      <h3 className="text-gray-700 italic mb-4">"{t.figure}"</h3>
                      <p className="text-gray-700 italic mb-4">"{t.description}"</p>

                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>


        ))}
      </div>
    </section>
  )
}
