import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import africaCDCLogo from "@/assets/images/partners/africaCDC_Logo.png";
import ahaLogo from "@/assets/images/partners/aha-logo.svg";
import dhaLogo from "@/assets/images/partners/dha_logo.png";
import ethioHealthLogo from "@/assets/images/partners/Ethio-Health-Logo-.png";
import healthlyticLogo from "@/assets/images/partners/healthlytic.webp";
import pranaEventsLogo from "@/assets/images/partners/prana_events.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const partnerLogos = [
  africaCDCLogo,
  ahaLogo,
  dhaLogo,
  ethioHealthLogo,
  healthlyticLogo,
  pranaEventsLogo,
];

export default function PartnerSection() {
  const isSmallScreen = useMediaQuery("(max-width: 500px)");

  return (
    <section className="bg-accent-100">
      <div className="flex flex-col items-center py-24 sm:px-8 lg:px-24 max-w-screen-2xl mx-auto">
        <h4 className="font-[600] text-[1.5rem] leading-normal text-center lg:text-start">
          We don’t work alone! 30+ trusted partners in 6+ countries
        </h4>

        <div className="w-full mt-12">
          <Marquee
            speed={50}
            gradient={true}
            gradientColor="hsl(var(--accent-100))"
            gradientWidth={isSmallScreen ? 50 : 100}
            pauseOnHover
          >
            {partnerLogos.map((logo, index) => (
              <div key={index} className="mx-8">
                <Image
                  className="h-7 sm:h-9 w-auto"
                  src={logo}
                  alt={`Partner ${index + 1}`}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
