"use client";

import { Button } from "@/ui/button";
import Image from "next/image";
import heroSlide1 from "@/assets/images/hero/hero_slide_1.png";
import heroSlide2 from "@/assets/images/hero/hero_slide_2.png";
import heroSlide3 from "@/assets/images/hero/hero_slide_3.png";
import KeySolutionsSection from "./components/key-solutions-section";
import TestimonialSection from "./components/testimonial-section";
import ConnectWithInnovatorSection from "./components/connect-with-innovators";
import PortfolioSection from "./components/PortfolioSection";
import connectedImage from "@/assets/images/connected.png";
import PartnerSection from "./components/partners-section";
import BlogSection from "./components/blog-section";
import ContactUsSection from "@/components/contact-us-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const statistics = [
  { label: "Healthcare solution developed", value: 250 },
  { label: "Healthcare Innovators Trained", value: 1200 },
  { label: "Research conducted", value: 100 },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-green/85 bg-no-repeat bg-cover relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center max-w-screen-2xl mx-auto z-10">
          <h1 className="text-white font-bold text-center text-5xl lg:text-6xl lg:leading-tight">
            Advancing <span className="text-accent">Equitable Healthcare</span>{" "}
            across <br />
            Africa through Digital Innovation
          </h1>
          <p className="py-2.5 px-8 mt-9 rounded-lg text-2xl font-[500] bg-primary/25 backdrop-blur text-white border border-white/25">
            By Africans, for Africa
          </p>
          <Button className="mt-14 text-md" size="lg" variant="secondary">
            Learn More
          </Button>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
            Fade(),
          ]}
          className="w-full"
        >
          <CarouselContent className="m-0">
            <CarouselItem className="p-0">
              <Image
                src={heroSlide1}
                alt="Image of healthcare professionals"
                width={1440}
                height={664}
                className="w-full"
              />
            </CarouselItem>

            <CarouselItem className="p-0">
              <Image
                src={heroSlide2}
                alt="Image of healthcare professionals"
                width={1440}
                height={664}
                className="w-full"
              />
            </CarouselItem>

            <CarouselItem className="p-0">
              <Image
                src={heroSlide3}
                alt="Image of healthcare professionals"
                width={1440}
                height={664}
                className="w-full"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Statistics */}
      <section className="-mt-[25%] sm:-mt-[12%] lg:-mt-[5%] lg:absolute w-full">
        <div className="shadow-lg rounded-3xl grid grid-cols-1 lg:grid-cols-3 py-8 px-8 lg:px-24 gap-4 sm:gap-6 lg:gap-8 max-w-screen-xl mx-auto bg-white">
          {statistics.map((stat, index) => (
            <div key={index} className="col-span-1 px-4 space-y-2 sm:space-y-3">
              <p className="font-[400] font-spaceGrotesk text-2xl md:text-3xl lg:text-5xl text-center">
                {stat.value}+
              </p>
              <h3 className="font-[300] text-lg md:text-lg text-center">
                {stat.label}
              </h3>
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
