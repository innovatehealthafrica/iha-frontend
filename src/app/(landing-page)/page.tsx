"use client";

import { Button } from "@/ui/button";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.png";
import KeySolutionsSection from "./components/key-solutions-section";
import TestimonialSection from "./components/testimonial-section";
import ConnectWithInnovatorSection from "./components/connect-with-innovators";
import PortfolioSection from "./components/PortfolioSection";
import connectedImage from "@/assets/images/connected.png";
import PartnerSection from "./components/partners-section";
import BlogSection from "./components/blog-section";
import ContactUsSection from "@/components/contact-us-section";

const statistics = [
  { label: "Healthcare solution developed", value: 250 },
  { label: "Healthcare Innovators Trained", value: 1200 },
  { label: "Research conducted", value: 100 },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-primary-green/85 bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
          backgroundBlendMode: "darken",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 pt-24 lg:pt-8 pb-36 px-8 lg:px-24 gap-x-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col justify-center w-full max-w-xl text-center lg:text-start items-center lg:items-start">
            <h1 className="font-bold text-2xl lg:text-[2.0rem]  leading-normal text-white">
              Building Tomorrow’s Healthcare{" "}
              <span className="text-primary-bright-orange">Solution</span>{" "}
              Today, <br />
              <span className="text-white/50">By Africans, for Africa</span>
            </h1>

            <p className="mt-6 text-white text-lg">
              We{"'"}re driving the co-creation of healthcare solutions with
              everyone from developers to end users, turning ideas into
              real-world impacts.
            </p>

            <Button className="w-fit mt-6 rounded-full bg-white text-primary-green">
              Read More
            </Button>
          </div>

          <div className="flex justify-center w-full">
            <Image
              src={heroImage}
              alt="Building Tomorrow’s Healthcare Solution Today, By Africans, for
            Africa"
              className="w-full max-w-[553px] h-auto"
            />
            {/* TODO: Animated Hero Section */}
            {/* <HeroImage /> */}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="-mt-[25%] sm:-mt-[12%] lg:-mt-[5%] lg:absolute w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-8 px-8 lg:px-24 gap-4 sm:gap-6 lg:gap-8 max-w-screen-2xl mx-auto">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="col-span-1 px-4 py-6 shadow-lg rounded-3xl space-y-2 sm:space-y-3 bg-white"
            >
              <h3 className="text-lg sm:text-xl text-center">{stat.label}</h3>
              <p className="font-bold text-2xl sm:text-3xl lg:text-[2.5rem] text-center">
                {stat.value}+
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Solutions */}
      <KeySolutionsSection />

      {/* Programs and Initiatives Section */}
      <section className="bg-primary-green/85 bg-no-repeat bg-cover">
        <div className="flex flex-col lg:flex-row py-28 px-8 lg:px-24 space-x-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col justify-center w-full">
            <h2 className="font-[500] text-4xl lg:text-5xl text-white">
              Our Programs & Initiatives
            </h2>

            <p className="mt-12 text-white">
              Our programs and initiatives empower Africa healthcare innovators
              with the support, skills and resources to drive innovation,
              transform ideas into impactful products, and improve healthcare
              outcome—positively impacting millions of lives across the
              continent
            </p>
          </div>

          <div className=""></div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Connect With Innovators */}
      <ConnectWithInnovatorSection />

      {/* Portfolios */}
      <PortfolioSection />

      {/* CTA */}
      <section className="bg-white py-16 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:py-8 lg:pb-36 px-8 lg:px-24 lg:space-x-12 gap-8 lg:gap-0 max-w-screen-2xl mx-auto">
          <div className="flex flex-col justify-center w-full max-w-lg order-1 lg:order-2">
            <h2 className="font-[600] text-3xl lg:text-[2.5rem] leading-tight lg:leading-normal">
              Join the largest community of healthcare innovators
            </h2>

            <p className="mt-4">
              Join the largest community of innovators, encompassing product
              developers, data scientists, engineers, healthcare professionals,
              AI developers, cloud engineers, and more.
            </p>

            <Button
              className="w-fit mt-4 lg:mt-9 rounded-full bg-black text-white hover:bg-black/60"
              variant="secondary"
              size="lg"
            >
              Join Community
            </Button>
          </div>

          <div className="w-full flex justify-center order-2 lg:order-1 ">
            <Image
              src={connectedImage}
              alt="Image of innovators connected by one goal"
              width={553}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <PartnerSection />

      {/* News and Highlights */}
      <BlogSection />

      {/* Contact us */}
      <ContactUsSection />
    </>
  );
}
