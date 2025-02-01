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
import linkedinIcon from "@/assets/images/about-page/Vector.png";
import member1 from "@/assets/images/team/oluwatobi.png";
import member2 from "@/assets/images/team/Timeyin.png";
import member3 from "@/assets/images/team/Faridat.png";
import member4 from "@/assets/images/team/Joseph.png";
import member5 from "@/assets/images/team/Ezinne.png";
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
        className=" bg-no-repeat bg-cover aspect-auto h-[664px] flex flex-col items-center px-4"
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

      {/* Team */}
      <section className="max-w-screen-xl mx-auto px-8 lg:px-0 py-16">
        <h3 className="text-5xl text-center font-bold mb-12 text-primary">
          Meet The <span className="text-primary-bright-orange">Team</span> at
          IHA
        </h3>
        <div className="flex gap-4 mx-4 items-center justify-center align-middle mb-6">
          <span className="border border-slate-600 p-1 cursor-pointer rounded-sm bg-primary-bright-orange">
            Leadership
          </span>
          <span className="border border-slate-600 p-1 rounded-sm cursor-pointer">
            Design & Innovation
          </span>
          <span className="border border-slate-600 p-1 rounded-sm cursor-pointer">
            Partnership & Grants
          </span>
          <span className="border border-slate-600 p-1 rounded-sm cursor-pointer">
            Research & Development
          </span>
          <span className="border border-slate-600 p-1 rounded-sm cursor-pointer">
            Communications
          </span>
          <span className="border border-slate-600 p-1 rounded-sm cursor-pointer">
            Consultations
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 m-[1.5rem] ">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative ">
              <div className="flex flex-col items-center p-6 bg-[#AEB6B1] rounded-xl shadow-lg w-60 mt-20">
                <div className="relative -top-28 z-20 left-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="clip-path-mypolygon w-5/6 object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 flex flex-col items-center justify-center text-center px-[2.5rem] text-white pb-4 mb-12 mx-auto">
                <span className="font-medium">{member.name}</span>
                <span className="text-sm">{member.title}</span>
              </div>
              <a
                target="_blank"
                href={member.linkedIn}
                className="absolute bottom-6 right-28"
              >
                <Image
                  src={linkedinIcon}
                  alt={member.name + "linkendin"}
                  height={26}
                  width={26}
                  className="rounded-full  bg-[#5E6D62] p-[2px]" 
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
