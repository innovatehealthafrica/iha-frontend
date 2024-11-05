"use client";

import ContactUsSection from "@/components/contact-us-section";
import { Button } from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import coCreatingImg from "@/assets/images/about-page/1img.svg";
import workChartImg from "@/assets/images/about-page/3img.svg";
import partnershipImg from "@/assets/images/about-page/2img.svg";
import LINKS from "@/lib/links";

export default function About() {
  return (
    <>
      {/* Header */}
      <section
        className="bg-primary-green/85 bg-no-repeat bg-cover flex flex-col items-center py-[4rem] px-4"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
          backgroundBlendMode: "darken",
        }}
      >
        <div className="text-center max-w-screen-lg">
          <h1 className="text-primary-bright-orange font-semibold text-6xl lg:text-[6rem] mb-4">
            About Us
          </h1>
          <p className="mb-4 text-white font-light">
            We're driving the co-creation of healthcare solutions with everyone
            from developers to end users, turning ideas into real-world impacts.
          </p>
          <Button variant={"outline"} className="text-primary-green" asChild>
            <Link href="#who-we-are">Read More</Link>
          </Button>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-20 max-w-screen-xl mx-auto px-8 lg:px-0">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-semibold mb-4">
            Who we are
          </h3>
          <p className="max-w-screen-lg mx-auto font-light text-lg leading-relaxed">
            We are an organization dedicated to transforming healthcare in
            Africa by building a digitally proficient workforce and
            collaborating with stakeholders, from end users to developers,
            communities and organizations to co-create effective, locally
            relevant solutions that improve healthcare access, quality and
            outcomes across the continent.
          </p>
        </div>

        <div className="text-center mt-24">
          <h3 className="text-3xl lg:text-4xl font-semibold mb-4">
            How we make impact
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center max-w-lg">
              <Image
                className="mx-auto mb-4 lg:hidden"
                height={150}
                width={150}
                src={coCreatingImg}
                alt={"co-creating icon"}
              />
              <Image
                className="mx-auto mb-4 hidden lg:block"
                height={200}
                width={200}
                src={coCreatingImg}
                alt={"co-creating icon"}
              />
              <h4 className="font-semibold text-xl mb-2">
                Co-creating with the people
              </h4>
              <p className="font-light">
                We collaborate directly with communities, healthcare workers,
                and various stakeholders to design and implement solutions that
                are deeply rooted in the realities and needs of the people we
                serve
              </p>
            </div>

            <div className="text-center max-w-lg">
              <Image
                className="mx-auto mb-4 lg:hidden"
                src={workChartImg}
                height={150}
                width={150}
                alt={"Workforce Capacity Development icon"}
              />
              <Image
                className="mx-auto mb-4 hidden lg:block"
                src={workChartImg}
                height={200}
                width={200}
                alt={"Workforce Capacity Development icon"}
              />
              <h4 className="font-semibold text-xl mb-2">
                Workforce Capacity Development
              </h4>
              <p className="font-light">
                We build tools and deliver programs that empowers healthcare
                professionals to leverage digital technology to improve
                healthcare delivery and outcome across the continent.
              </p>
            </div>

            <div className="text-center max-w-lg">
              <Image
                className="mx-auto mb-4 lg:hidden"
                src={partnershipImg}
                height={150}
                width={150}
                alt={"co-creating icon"}
              />
              <Image
                className="mx-auto mb-4 hidden lg:block"
                src={partnershipImg}
                height={200}
                width={200}
                alt={"co-creating icon"}
              />
              <h4 className="font-semibold text-xl mb-2">
                Strategic Partnership
              </h4>
              <p className="font-light">
                We work with organizations to pioneer new approaches for
                improving healthcare in Africa leveraging innovation principles
                and digital technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-green py-36">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 lg:px-0">
          <div className="space-y-8 max-w-screen-xl mx-auto bg-white border px-8 py-12 text-center w-full">
            <h2 className="font-semibold text-xl">Join our Team</h2>
            <Button variant={"outline"} className="border-black" asChild>
              <Link href={LINKS.Careers}>Careers</Link>
            </Button>
          </div>

          <div className="space-y-8 max-w-screen-xl mx-auto bg-white border px-8 py-12 text-center w-full">
            <h2 className="font-semibold text-xl">Partner with us</h2>
            <Button variant={"outline"} className="border-black" disabled>
              Partner
            </Button>
          </div>

          <div className="space-y-8 max-w-screen-xl mx-auto bg-white border px-8 py-12 text-center w-full">
            <h2 className="font-semibold text-xl">Use our Tools</h2>
            <Button variant={"outline"} className="border-black" disabled>
              Innovation Kits
            </Button>
          </div>
        </div>
      </section>

      {/* Contact us */}
      <ContactUsSection />
    </>
  );
}