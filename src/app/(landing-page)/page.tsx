import { Button } from "@/ui/button";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.png";
import KeySolutionsSection from "./components/key-solutions-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Testimonial from "./components/testimonial";
import TestimonialSection from "./components/testimonial-section";

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
        <div className="flex py-8 pb-36 px-24 space-x-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col justify-center w-full">
            <h1 className="font-bold text-4xl text-white">
              Building Tomorrow’s Healthcare{" "}
              <span className="text-primary-bright-orange">Solution</span>{" "}
              Today, <br />
              <span className="text-white/50">By Africans, for Africa</span>
            </h1>

            <p className="mt-12 text-white">
              We{"'"}re driving the co-creation of healthcare solutions with
              everyone from developers to end users, turning ideas into
              real-world impacts.
            </p>

            <Button className="w-fit mt-9 rounded-full bg-white text-primary-green">
              Read More
            </Button>
          </div>

          <div className="">
            <Image
              src={heroImage}
              alt="Building Tomorrow’s Healthcare Solution Today, By Africans, for
            Africa"
              className="min-w-[553px] w-[553px]"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="-mt-[5%] absolute w-full">
        <div className="grid grid-cols-3 py-8 px-24 space-x-12 max-w-screen-2xl mx-auto">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="col-span-1 px-4 py-6 shadow-lg rounded-3xl space-y-3 bg-white"
            >
              <h3 className="text-xl">{stat.label}</h3>
              <p className="font-bold text-5xl">{stat.value}+</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Solutions */}
      <KeySolutionsSection />

      {/* Programs and Initiatives Section */}
      <section className="bg-primary-green/85 bg-no-repeat bg-cover">
        <div className="flex py-28 px-24 space-x-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col justify-center w-full">
            <h2 className="font-[500] text-5xl text-white">
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
    </>
  );
}
