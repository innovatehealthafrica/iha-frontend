import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import hexLabLogo from "@/assets/images/brands/Hex Lab.png";
import ituraLogo from "@/assets/images/brands/Tvit.png";
import fossaCareLogo from "@/assets/images/brands/Fossa.png";
import ghealthLogo from "@/assets/images/brands/code-lab.png";
import amaraLogo from "@/assets/images/brands/amara.png";
import uHealthLogo from "@/assets/images/brands/u-mark.png";
import Image from "next/image";

const portfolioBrands = [
  {
    name: "Hexlab",
    logo: hexLabLogo,
  },
  {
    name: "IturaTV",
    logo: ituraLogo,
  },
  {
    name: "FossaCare",
    logo: fossaCareLogo,
  },
  {
    name: "Ghealth",
    logo: ghealthLogo,
  },
  {
    name: "AmaraAI",
    logo: amaraLogo,
  },
  {
    name: "Uhealth",
    logo: uHealthLogo,
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-primary-green/5">
      <div className="flex flex-col gap-8 py-8 pb-36 px-24 max-w-screen-2xl mx-auto">
        <div className="">
          <h1 className="font-[600] text-4xl leading-normal">Our Portfolio:</h1>

          <p className="">Startups we have incubated</p>
        </div>

        <div className="grid grid-cols-3 gap-16">
          {portfolioBrands.map((portfolio, index) => (
            <div
              key={index}
              className="py-16 px-7 bg-white border border-primary-green/20 rounded-2xl flex flex-col gap-8"
            >
              <Image
                src={portfolio.logo}
                alt="Hex Lab"
                className="h-12 w-fit"
              />
              <Link href="#" className="flex gap-1 font-[500] group">
                {portfolio.name}{" "}
                <ArrowRight className="group-hover:translate-x-2 transition-all duration-500" />
              </Link>
            </div>
          ))}
        </div>

        <Link href="#" className="flex gap-1 font-[500] group">
          Explore All{" "}
          <ArrowRight className="group-hover:translate-x-2 transition-all duration-500" />
        </Link>
      </div>
    </section>
  );
}
