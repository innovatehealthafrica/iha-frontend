import Image from "next/image";
import React from "react";

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

export default function PartnerSection() {
  return (
    <section className="bg-white">
      <div className="flex flex-col items-center py-8 pb-36 px-24 space-x-12 max-w-screen-2xl mx-auto">
        <h4 className="font-[600] text-[1.5rem] leading-normal">
          We don’t work alone! 30+ trusted partners in 6+ countries
        </h4>

        <div className="w-full flex flex-col gap-8 items-center justify-center mt-12">
          <div className="flex gap-8">
            <Image className="h-9 w-auto" src={earthLogo} alt="Earth Logo" />
            <Image
              className="h-9 w-auto"
              src={lightingLogo}
              alt="Lighting Logo"
            />
            <Image className="h-9 w-auto" src={avenLogo} alt="Aven Logo" />
            <Image className="h-9 w-auto" src={niraLogo} alt="Nira Logo" />
            <Image className="h-9 w-auto" src={circleLogo} alt="Circle Logo" />
          </div>
          <div className="flex gap-8">
            <Image className="h-9 w-auto" src={livaLogo} alt="Live Logo" />
            <Image className="h-9 w-auto" src={utosiaLogo} alt="Utosia Logo" />
            <Image className="h-9 w-auto" src={aticaLogo} alt="Atica Logo" />
            <Image className="h-9 w-auto" src={codeLabLogo} alt="Earth Logo" />
            <Image className="h-9 w-auto" src={asgardiaLogo} alt="Earth Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
