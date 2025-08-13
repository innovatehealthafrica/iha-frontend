import React, { useState } from "react";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import teamData from "@/json/teamData.json";

const teamDataArray = teamData as MemberType[];

interface MemberType {
  name: string;
  title: string;
  image: string;
  linkedIn: string;
  tag: string;
}

export default function TeamMembers() {
  const [activeTag, setActiveTag] = useState("Leadership");

  const tags = [
    "Leadership",
    "Design & Innovation",
    "Partnership & Grants",
    "Research & Development",
    "Communications",
    "Consultations",
    "Programs"
  ];

  const renderMember = (member: MemberType) => (
    <div key={member.name} className="h-[380px] flex items-end justify-center">
      <div className="relative flex flex-col items-center justify-center text-center px-6 text-white pb-4 h-[230px] bg-primary/40 rounded-xl shadow-lg w-[280px]">
        {/* Hexagonal Avatar */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
          <div className="relative w-40 h-40">
            {member.image ? (
              <div
                className="w-full h-full overflow-hidden"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
                }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: "center top",
                      filter:
                        "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
              </div>
            ) : (
              <div
                className="w-full h-full bg-gray-200 flex items-center justify-center"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
                }}
              >
                <span className="text-gray-600 text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Member Info */}
        <div className="flex flex-col items-center justify-center mt-12">
          <h4 className="font-bold mb-1 text-primary text-xl sm:text-2xl pt-8">
            {member.name}
          </h4>
          <p className="text-sm text-primary mb-2">{member.title}</p>
          {member.linkedIn && (
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="size-7 flex justify-center items-center rounded-full bg-primary/40"
            >
              <Linkedin color="white" size={18} className="p-[2px]" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tag Filters */}
      <div className="px-4 max-w-screen-xl mx-auto flex justify-center mb-12">
        <div className="flex gap-4 overflow-x-auto py-0">
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveTag(tag)}
              className={`block border border-slate-600 px-4 py-2 text-sm md:text-base rounded-sm cursor-pointer text-center text-nowrap 
              ${activeTag === tag
                  ? "bg-primary-bright-orange"
                  : "bg-white"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Team Members Grid - Center leftover row */}
      <div className="px-4">
        {(() => {
          const filtered = teamDataArray.filter(
            (member) => member.tag === activeTag
          );
          const itemsPerRow = 4;
          const fullRowsCount = Math.floor(filtered.length / itemsPerRow);
          const fullRows = filtered.slice(0, fullRowsCount * itemsPerRow);
          const leftover = filtered.slice(fullRowsCount * itemsPerRow);

          return (
            <>
              {/* Full rows */}
              {fullRows.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center mx-auto">
                  {fullRows.map((member) => renderMember(member))}
                </div>
              )}

              {/* Last row with centering */}
              {leftover.length > 0 && (
                <div
                  className={`mt-6 grid gap-6 items-center justify-center mx-auto`}
                  style={{
                    gridTemplateColumns: `repeat(${leftover.length}, minmax(0, 1fr))`,
                    justifyContent: "center",
                    justifyItems: "center",
                  }}
                >
                  {leftover.map((member) => renderMember(member))}
                </div>
              )}
            </>
          );
        })()}
      </div>
    </div>
  );
}
