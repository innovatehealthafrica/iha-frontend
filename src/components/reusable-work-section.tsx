import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export interface WorkItem {
  title: string;
  description: string;
  image: any;
  tags: string[];
  reverse?: boolean;
  link?: string;
  linkText?: string;
}

interface ReusableWorkSectionProps {
  title?: string;
  workItems: WorkItem[];
  showViewMoreButton?: boolean;
  viewMoreButtonText?: string;
  viewMoreButtonLink?: string;
  className?: string;
}

export default function ReusableWorkSection({
  title = "Our Work",
  workItems,
  showViewMoreButton = true,
  viewMoreButtonText = "View More",
  viewMoreButtonLink,
  className,
}: ReusableWorkSectionProps) {
  return (
    <section className={cn("max-w-screen-xl mx-auto sm:28 pb-0", className)}>
      <div className="px-8 lg:px-0 pb-0 gap-x-12">
        <h3 className="text-3xl lg:text-5xl text-center text-primary font-bold mb-4 sm:mb-12">
          {title}
        </h3>

        <div className="space-y-14">
          {workItems.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "flex flex-col-reverse lg:flex-row items-center gap-x-12 bg-white p-4 sm:p-8 rounded-lg shadow-[0_0_8px_8px_rgba(0,0,0,0.05)]",
                {
                  "lg:flex-row-reverse": item.reverse,
                }
              )}
            >
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">
                  {item.title}
                </h4>
                <p className="leading-8 mb-7 text-lg">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#CFD3D0] text-[#0D2414] rounded-md px-3 py-2 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {item.link && (
                  <Button
                    variant="link"
                    className="mt-2 flex items-center justify-start"
                    asChild
                  >
                    <a href={item.link}>
                      {item.linkText || "Learn More"}
                      <span><ArrowRight className="w-3 h-3 ml-2" /></span>
                    </a>
                  </Button>
                )}
              </div>
              <Image
                src={item.image}
                width={1408}
                height={768}
                alt={item.title}
                className="rounded-lg aspect-video w-full sm:w-1/2 mb-4 sm:mb-0"
              />
            </div>
          ))}
        </div>

        {showViewMoreButton && (
          <div className="flex justify-center">
            <Button
              className="mt-12"
              size="lg"
              asChild={!!viewMoreButtonLink}
            >
              {viewMoreButtonLink ? (
                <a href={viewMoreButtonLink}>{viewMoreButtonText}</a>
              ) : (
                viewMoreButtonText
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
