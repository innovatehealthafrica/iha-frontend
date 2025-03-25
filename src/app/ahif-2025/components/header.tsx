import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AHIFHeroImage from "@/assets/images/ahif/ahif-hero-image.png";
import { LockClosedIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <section className="relative bg-no-repeat bg-cover aspect-auto h-[80vh] sm:h-[664px] flex flex-col items-center">
      <Image
        src={AHIFHeroImage}
        className="w-full object-cover h-full absolute"
        alt="AHIF 2025"
      />
      <div className="absolute inset-0 bg-primary/70 z-0" />
      <div className="text-start max-w-screen-lg my-36 px-4 z-[2]">
        <h1 className="text-white font-bold text-start text-4xl lg:text-6xl lg:leading-tight">
          Africa Healthcare <span className="text-accent">Innovation</span>{" "}
          <br />
          Fellowship (AHIF) 2025
        </h1>
        <p className="mb-4 text-white font-medium text-base sm:text-xl text-start">
          Empowering bold thinkers to transform healthcare in Africa through
          digital innovation. Gain world-class mentorship, resources, and a
          network to build and accelerate your impact.
        </p>
        <Button
          disabled
          className="mt-14 text-md h-14 bg-white text-primary-green font-medium hover:bg-primary-green hover:text-white"
          size="lg"
          variant="secondary"
        >
          <Link
            target="_blank"
            className="flex items-center"
            href="javascript:void(0)"
          >
            <LockClosedIcon className="me-2" />
            <span>Application Closed</span>
          </Link>
        </Button>
        <span className="block text-white text-sm mt-2">
          1000+ Previously Enrolled
        </span>
      </div>
    </section>
  );
}
