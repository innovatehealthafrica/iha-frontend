import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export function ProjectHeader() {
  return (
    <section className="relative bg-no-repeat bg-cover bg-[#07120A80]/50 aspect-auto h-[70vh] sm:h-[600px] flex flex-col items-center">

      <div className="absolute inset-0 bg-primary/50 z-0" />
      <div className="text-center max-w-screen-lg my-36 px-4 z-[2]">
        <h1 className="text-primary-bright-orange text-center font-bold mb-12 text-5xl lg:text-5xl">
          Programs & Projects
        </h1>
        <p className="mx-8 mb-4 text-white font-medium text-2xl text-center">
          At Innovate Health Africa, we drive impactful programs and projects aimed at addressing key healthcare challenges across the continent.
        </p>
        <Button className="mt-14 text-md" size="lg" variant="secondary">
          <Link href="#who-we-are">Work with Us</Link>
        </Button>
      </div>
    </section>
  );
}
