import React from 'react'
import { Button } from "@/ui/button";
import headerImg from "@/assets/images/about-page/about_image.png";
import Link from "next/link";

export default function Header() {
  return (
    <section
        className=" bg-no-repeat bg-cover aspect-auto h-[664px] flex flex-col items-center px-4"
        style={{
          backgroundImage: `url(${headerImg.src})`,
          backgroundBlendMode: "darken",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "300px",
          maxHeight: "90vh",
        }}
      >
        <div className="text-center max-w-screen-lg my-36">
          <h1 className="text-primary-bright-orange text-center font-bold mb-12 text-5xl lg:text-[3rem]">
            About us{" "}
          </h1>
          <p className="mx-8 mb-4 text-white font-light text-2xl text-center">
            At Innovate Health Africa, we harness empathy, local expertise, and
            bold thinking to transform healthcare access, quality, and outcomes.
          </p>
          <Button className="mt-14 text-md" size="lg" variant="secondary">
            <Link href="#who-we-are">Work with Us</Link>
          </Button>
        </div>
      </section>
  )
}
