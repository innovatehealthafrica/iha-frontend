"use client";

import ContactUsSection from "@/components/contact-us-section";
import { Button } from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import Img1 from "@/assets/images/about-page/img1.png";
import Img2 from "@/assets/images/about-page/img2.png";
import Img3 from "@/assets/images/about-page/img3.png";
import PartnerSection from "@/app/(landing-page)/components/partners-section";
import LINKS from "@/lib/links";
import ComingSoonTag from "@/ui/coming-soon-tag";
import linkedinIcon from "@/assets/icons/linkedin.png";
import member1 from "@/assets/images/team/oluwatobi.png";
import member2 from "@/assets/images/team/Timeyin.png";
import member3 from "@/assets/images/team/Faridat.png";
import member4 from "@/assets/images/team/Joseph.png";
import member5 from "@/assets/images/team/Ezinne.png";
import member6 from "@/assets/images/team/ibironke.png";
import member7 from "@/assets/images/team/Solome.png";
import member8 from "@/assets/images/team/Raphael.png";
import headerImg from "@/assets/images/about-page/about_image.png";

const teamMembers = [
  {
    name: "Oluwatobi Adewumi",
    title: "Executive Director",
    image: member1,
    funFact: "Loves to Dance but very bad at it. Brain of IHA",
    linkedIn: "https://linkedin.com/in/josephajibodu",
  },

  {
    name: "Timehin Arueyingho",
    title: "Director of Training & Development",
    image: member2,
    funFact: "",
    linkedIn: "https://linkedin.com/in/josephajibodu",
  },

  {
    name: "Faridat Ibidun",
    title: "Director of Programs",
    image: member3,
    funFact: "",
    linkedIn: "https://linkedin.com/in/josephajibodu",
  },

  {
    name: "Joseph Ajibodu",
    title: "Director of Technology",
    image: member4,
    funFact: "",
    linkedIn: "https://linkedin.com/in/josephajibodu",
  },

  {
    name: "Ezinne Awah",
    title: "Director of Communication",
    image: member5,
    funFact: "",
    linkedIn: "https://linkedin.com/in/josephajibodu",
  },

  {
    name: "Mary Ibironke",
    title: "Community Manage",
    image: member6,
    funFact: "",
    linkedIn: "https://linkedin.com/in/josephajibodu",
  },

  {
    name: "Solome Nekahiwot",
    title: "Program Manager, Ethiopia",
    image: member7,
    funFact: "",
    linkedIn: "https://linkedin.com/in/josephajibodu",
  },

  {
    name: "Raphael Oyeniji",
    title: "Program Manager, Nigeria",
    image: member8,
    funFact: "",
    linkedIn: "https://linkedin.com/in/josephajibodu",
  },
];

const boardMembers = [
  {
    name: "Oluwatobi Adewumi",
    title: "Executive Director",
    image: member1,
    funFact: "Loves to Dance but very bad at it. Brain of IHA",
    linkedIn: "https://linkedin.com/in/josephajibodu",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section
        className=" bg-no-repeat bg-cover aspect-auto h-[68vh] flex flex-col items-center px-4"
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
          <p className="mx-8 mb-4 text-white font-light text-xl text-center">
            At Innovate Health Africa, we harness empathy, local expertise, and
            bold thinking to transform healthcare access, quality, and outcomes.
          </p>
          <Button variant={"outline"} className="text-primary-green" asChild>
            <Link href="#who-we-are">Work with Us</Link>
          </Button>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-20 max-w-screen-xl mx-auto px-8 lg:px-0">
        <div className="text-center mb-12">
          <h3 className="text-5xl text-center font-bold mb-12 text-primary">
            Who We Are
          </h3>
          <p className="max-w-screen-lg mx-auto font-light text-lg leading-relaxed">
            Our mission is to accelerate the transformation of healthcare in
            Africa by building a future-ready workforce, fostering partnership
            for innovation, and working with communities to co-design solutions
            that enhance healthcare access, quality, and outcomes for everyone
          </p>
        </div>

        {/* How We Make Impact */}
        <div className="text-center mt-24">
          <h3 className="text-5xl text-center font-bold mb-12 text-primary">
            How We Make Impact{" "}
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="text-center max-w-lg">
              <Image
                className="mx-auto mb-4"
                height={350}
                width={350}
                src={Img1}
                alt={"co-creating image"}
              />
              <h4 className="font-semibold text-xl mb-2">
                Co-creating with the people
              </h4>
              <p className="font-light p-4">
                We collaborate directly with communities, healthcare workers,
                and various stakeholders to design and implement solutions that
                are deeply rooted in the realities and needs of the people we
                serve
              </p>
            </div>

            <div className="text-center max-w-lg">
              <Image
                className="mx-auto mb-4"
                src={Img2}
                height={350}
                width={350}
                alt={"Workforce Capacity Development image"}
              />
              <h4 className="font-semibold text-xl mb-2">
                Workforce Capacity Development{" "}
              </h4>
              <p className="font-light">
                We provide digital solutions and training that help healthcare
                workers use technology to deliver better patient care across
                Africa.
              </p>
            </div>

            <div className="text-center max-w-lg">
              <Image
                className="mx-auto mb-4"
                src={Img3}
                height={350}
                width={350}
                alt={"co-creating icon"}
              />
              <h4 className="font-semibold text-xl mb-2">
                Strategic Partnership{" "}
              </h4>
              <p className="font-light">
                We partner with organizations to develop innovative digital
                solutions that advance healthcare in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Partners */}
      <PartnerSection />

      {/* CTA */}
      <section className="bg-primary-green py-36">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 lg:px-0">
          <div className="space-y-8 max-w-screen-xl mx-auto bg-white border px-8 py-12 text-center w-full">
            <h2 className="font-semibold text-xl">Join our Team</h2>
            <Button variant={"outline"} className="border-black" asChild>
              <Link href={LINKS.Careers.href}>Careers</Link>
            </Button>
          </div>

          <div className="space-y-8 max-w-screen-xl mx-auto bg-white border px-8 py-12 text-center w-full">
            <h2 className="font-semibold text-xl">Partner with us</h2>
            <Button
              variant={"outline"}
              className="border-black relative"
              disabled
            >
              Partner
              <ComingSoonTag />
            </Button>
          </div>

          <div className="space-y-8 max-w-screen-xl mx-auto bg-white border px-8 py-12 text-center w-full">
            <h2 className="font-semibold text-xl">Use our Tools</h2>
            <Button
              variant={"outline"}
              className="border-black relative"
              disabled
            >
              Innovation Kits
              <ComingSoonTag />
            </Button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-screen-xl mx-auto px-8 lg:px-0 py-16">
        <h2 className="text-4xl font-semibold">The Team</h2>
        <p className="font-light mb-12">Meet the people of IHA</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative group overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                className="w-full group-hover:scale-110 transition-all duration-500 ease-out"
              />

              <div className="absolute bottom-0 flex flex-col px-4 text-white pb-4">
                <span className="font-medium">{member.name}</span>
                <span className="text-sm">{member.title}</span>
              </div>

              <div className="absolute inset-0 bg-black hidden duration-1000 transition-all group-hover:flex flex-col items-center justify-center text-center gap-4 opacity-65 pointer-events-none"></div>

              <div className="absolute inset-0 bg-transparent duration-1000 transition-all hidden group-hover:flex flex-col items-center justify-center text-white pb-4 px-8 text-center gap-4 pointer-events-none">
                {member.funFact}
                <Button variant={"secondary"} className="relative">
                  Read More
                  <ComingSoonTag />
                </Button>
              </div>

              <a
                target="_blank"
                href={member.linkedIn}
                className="absolute top-6 right-4 opacity-0"
              >
                <Image
                  src={linkedinIcon}
                  alt={member.name + "linkendin"}
                  height={36}
                  width={36}
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact us */}
      <ContactUsSection />
    </>
  );
}
