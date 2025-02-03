import React from 'react'
import member1 from "@/assets/images/team/oluwatobi.png";
import member2 from "@/assets/images/team/Timeyin.png";
import member3 from "@/assets/images/team/Faridat.png";
import member4 from "@/assets/images/team/Joseph.png";
import member5 from "@/assets/images/team/Ezinne.png";
import linkedin from '@/assets/images/about-page/linkedin.svg';
import Image from "next/image";
import { Linkedin } from 'lucide-react';

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
export default function TeamMembers() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 m-[1.5rem] items-center justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="relative ">
              <div className="flex flex-col items-center justify-center text-center p-6 bg-[#AEB6B1] rounded-xl shadow-lg mt-20">
                <div className="relative -top-28 z-20 left-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="clip-path-mypolygon w-5/6 object-cover rounded-2xl"
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
                <Linkedin color="white" size={28} className='rounded-full  bg-[#5E6D62] p-[2px]' />
                {/* <Image
                  src={linkedin}
                  alt={member.name + "linkendin"}
                  height={26}
                  width={26}
                  className="rounded-full  bg-[#5E6D62] p-[2px]"
                /> */}
              </a>
            </div>
          ))}
        </div>
  )
}
