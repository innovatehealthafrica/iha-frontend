"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AHIFNavigation() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // Handle scroll for sticky nav
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const navHeight = document.getElementById("sticky-nav")?.offsetHeight || 0;

    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - navHeight - 20, // Subtract nav height and add some padding
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="sticky-nav"
      className={cn(
        "sticky top-0 w-full bg-white z-50 transition-all duration-300",
        isScrolled ? "shadow-md py-3" : "py-4"
      )}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex gap-2 md:gap-4 min-w-max">
            <Link
              className={cn(
                "text-primary font-medium py-2 px-3 md:py-3 md:px-5 rounded-md transition-colors whitespace-nowrap text-sm md:text-base",
                {
                  "bg-primary-green/10 hover:bg-primary-green/20 text-primary-green":
                    activeSection !== "overview",
                  "bg-primary-green text-white": activeSection === "overview",
                }
              )}
              href="#overview"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("overview");
              }}
            >
              Overview
            </Link>
            <Link
              className={cn(
                "text-primary font-medium py-2 px-3 md:py-3 md:px-5 rounded-md transition-colors whitespace-nowrap text-sm md:text-base",
                {
                  "bg-primary-green/10 hover:bg-primary-green/20 text-primary-green":
                    activeSection !== "structure",
                  "bg-primary-green text-white": activeSection === "structure",
                }
              )}
              href="#structure"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("structure");
              }}
            >
              Structure
            </Link>
            <Link
              className={cn(
                "text-primary font-medium py-2 px-3 md:py-3 md:px-5 rounded-md transition-colors whitespace-nowrap text-sm md:text-base",
                {
                  "bg-primary-green/10 hover:bg-primary-green/20 text-primary-green":
                    activeSection !== "core-modules",
                  "bg-primary-green text-white":
                    activeSection === "core-modules",
                }
              )}
              href="#core-modules"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("core-modules");
              }}
            >
              Core Module
            </Link>
            <Link
              className={cn(
                "text-primary font-medium py-2 px-3 md:py-3 md:px-5 rounded-md transition-colors whitespace-nowrap text-sm md:text-base",
                {
                  "bg-primary-green/10 hover:bg-primary-green/20 text-primary-green":
                    activeSection !== "why-apply",
                  "bg-primary-green text-white": activeSection === "why-apply",
                }
              )}
              href="#why-apply"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("why-apply");
              }}
            >
              Why Apply
            </Link>
            <Link
              className={cn(
                "text-primary font-medium py-2 px-3 md:py-3 md:px-5 rounded-md transition-colors whitespace-nowrap text-sm md:text-base",
                {
                  "bg-primary-green/10 hover:bg-primary-green/20 text-primary-green":
                    activeSection !== "eligibility",
                  "bg-primary-green text-white":
                    activeSection === "eligibility",
                }
              )}
              href="#eligibility"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("eligibility");
              }}
            >
              Eligibility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
