import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import reportCover from "@/assets/images/the_state_of_digital_health_readines_in_the_african_health_workforce_report_2026.png";

const REPORT_URL =
  "https://zenodo.org/records/22009775?token=eyJhbGciOiJIUzUxMiJ9.eyJpZCI6IjFjYzhlNzFmLTNlYjgtNDkyMC04MDViLWU5OThiMDU2MDU3OSIsImRhdGEiOnt9LCJyYW5kb20iOiJiY2YyNWQ1OGNlYjVmOGI1YjYwMzNhNzgyNzgzNDQzNyJ9.iDSRug3_rxo9FBynQltZUja9B4rZPERdaguGhAyF8WMP6UJBedEdEcen-7mNk7XSKRDZyKt0nuyJP5JuPoGLWg";

export default function FeaturedReport() {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 items-center">
          {/* Heading (mobile: 1st · desktop: top of right column) */}
          <div className="lg:col-start-2 lg:row-start-1 lg:self-end">
            <span className="inline-block text-accent font-semibold uppercase tracking-wide text-sm mb-4">
              Inaugural Report
            </span>

            <h2 className="font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight">
              The State of Digital Health Readiness in the African Health
              Workforce &mdash; 2026
            </h2>
          </div>

          {/* Report cover (mobile: 2nd · desktop: left column, spans both rows) */}
          <div className="flex justify-center lg:col-start-1 lg:row-start-1 lg:row-span-2">
            <Image
              src={reportCover}
              alt="Cover of The State of Digital Health Readiness in the African Health Workforce Report 2026"
              width={520}
              height={520}
              className="w-full max-w-md h-auto rounded-lg shadow-2xl"
              priority={false}
            />
          </div>

          {/* Description + button (mobile: 3rd · desktop: bottom of right column) */}
          <div className="lg:col-start-2 lg:row-start-2 lg:self-start">
            <p className="text-lg text-white/90 leading-8 mb-8 text-justify lg:text-left">
              The first comprehensive, evidence-based assessment of digital
              health readiness among health workers across Sub-Saharan Africa.
              Drawing on global health workforce indices, national digital
              health strategies, and peer-reviewed literature spanning 48
              countries, this inaugural report maps the structural conditions
              shaping workforce readiness and synthesises what the evidence
              reveals about how health workers are engaging with digital health
              in practice.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href={REPORT_URL} target="_blank" rel="noopener noreferrer">
                  Read the Report
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
