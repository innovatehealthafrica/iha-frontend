import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import asgardiaLogo from "@/assets/images/partners/Asgardia.png";
import aticaLogo from "@/assets/images/partners/Atica.png";
import avenLogo from "@/assets/images/partners/Aven.png";
import circleLogo from "@/assets/images/partners/Circle.png";
import codeLabLogo from "@/assets/images/partners/Code-Lab.png";
import earthLogo from "@/assets/images/partners/Earth.png";
import lightingLogo from "@/assets/images/partners/Lighting.png";
import livaLogo from "@/assets/images/partners/Liva.png";
import niraLogo from "@/assets/images/partners/Nira.png";
import utosiaLogo from "@/assets/images/partners/Utosia.png";

const partnerLogos = [
  earthLogo,
  lightingLogo,
  avenLogo,
  niraLogo,
  circleLogo,
  livaLogo,
  utosiaLogo,
  aticaLogo,
  codeLabLogo,
  asgardiaLogo,
];

export default function PartnerSection() {
  return (
    <section className="bg-accent-100">
      <div className="flex flex-col items-center py-24 px-8 lg:px-24 max-w-screen-2xl mx-auto">
        <h4 className="font-[600] text-[1.5rem] leading-normal text-center lg:text-start">
          We don’t work alone! 30+ trusted partners in 6+ countries
        </h4>

        <div className="w-full mt-12">
          <Marquee speed={50} gradient={false} pauseOnHover>
            {partnerLogos.map((logo, index) => (
              <div key={index} className="mx-8">
                <Image
                  className="h-9 w-auto"
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
