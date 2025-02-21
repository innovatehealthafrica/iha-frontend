import React from "react";
import headerImg from "@/assets/images/about-page/about-header.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <section className="relative bg-no-repeat bg-cover aspect-auto h-[70vh] sm:h-[664px] flex flex-col items-center">
      <Image
        src={headerImg}
        className="w-full object-cover h-full absolute"
        alt="About Us"
      />
      <div className="absolute inset-0 bg-primary/50 z-0" />
      <div className="text-center max-w-screen-lg my-36 px-4 z-[2]">
        <h1 className="text-primary-bright-orange text-center font-bold mb-12 text-5xl lg:text-5xl">
          About Us
        </h1>
        <p className="mx-8 mb-4 text-white font-medium text-2xl text-center">
          At Innovate Health Africa, we harness empathy, local expertise, and
          bold thinking to transform healthcare access, quality, and outcomes.
        </p>
        <Button className="mt-14 text-md" size="lg" variant="secondary">
          <Link href="#who-we-are">Work with Us</Link>
        </Button>
      </div>
    </section>
  );
}
