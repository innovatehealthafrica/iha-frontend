"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectHeaderProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageUrl?: string;
  overlayClassName?: string;
  heightClassName?: string;
  className?: string;
};

export function ProjectHeader({
  title = "Programs & Projects",
  description =
  "At Innovate Health Africa, we drive impactful programs and projects aimed at addressing key healthcare challenges across the continent.",
  ctaLabel = "Work with Us",
  backgroundImageUrl,
  overlayClassName = "bg-primary/50",
  heightClassName = "h-[70vh] sm:h-[600px]",
  className,
}: ProjectHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={cn(
        "relative bg-no-repeat bg-cover bg-center aspect-auto flex flex-col items-center",
        heightClassName,
        className
      )}
      style={
        backgroundImageUrl
          ? { backgroundImage: `url(${backgroundImageUrl})` }
          : undefined
      }
    >
      <div className={cn("absolute inset-0 z-0", overlayClassName)} />
      <div className="text-center max-w-screen-lg mt-24 mb-36 lg:my-36 px-4 z-[2] space-y-4 lg:space-y-8">
        <h1 className="text-primary-bright-orange text-center font-bold lg:mb-12 text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="lg:mx-8 mb-2 lg:mb-4 text-white font-medium text-lg lg:text-2xl text-center">
          {description}
        </p>

        {/* Button to open modal */}
        <Button
          className="lg:mt-14 text-md"
          size="lg"
          variant="secondary"
          onClick={() => setIsOpen(true)}
        >
          {ctaLabel}
        </Button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md text-center">
            <h2 className="text-xl font-bold mb-4">Work with Us</h2>
            <p className="mb-6">
              Send us an email at{" "}
              <a
                href="mailto:info@innovatehealthafrica.org"
                className="text-primary-bright-orange underline font-semibold"
              >
                info@innovatehealthafrica.org
              </a>
            </p>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
