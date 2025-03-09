import React from "react";
import member1 from "@/assets/images/team/oluwatobi.png";
import member2 from "@/assets/images/team/Timeyin.png";
import member3 from "@/assets/images/team/Faridat.png";
import member4 from "@/assets/images/team/Joseph.png";
import member5 from "@/assets/images/team/Ezinne.png";
import Image from "next/image";
import { Linkedin } from "lucide-react";

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
    <div className="flex flex-wrap justify-center gap-6 m-[1.5rem]">
      {teamMembers.map((member) => (
        <div key={member.name} className="h-[340px] flex items-end">
          <div className="flex flex-col items-center justify-center text-center px-[2.5rem] text-white pb-4 h-[230px] bg-primary/40 rounded-xl shadow-lg">
            <div className="-mt-[150px] top-0 flex flex-col items-center justify-center text-center">
              <Image
                src={member.image}
                alt={member.name}
                className="clip-path-mypolygon w-full object-cover rounded-2xl"
              />
            </div>

            <h4 className="font-bold mb-1 mt-3 text-primary text-xl sm:text-2xl">
              {member.name}
            </h4>
            <span className="text-sm mb-2 text-primary">{member.title}</span>
            <a
              target="_blank"
              href={member.linkedIn}
              className="size-7 flex justify-center items-center rounded-full bg-primary/40"
            >
              <Linkedin color="white" size={18} className="p-[2px]" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
