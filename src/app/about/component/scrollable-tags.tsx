"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ScrollableTags() {
  const [activeTag, setActiveTag] = useState("Leadership"); // Default active tag

  const tags = [
    "Leadership",
    "Design & Innovation",
    "Partnership & Grants",
    "Research & Development",
    "Communications",
    "Consultations",
  ];

  return (
    <div className="flex gap-4 overflow-x-auto py-0">
      {tags.map((tag, index) => (
        <span
          key={index}
          onClick={() => setActiveTag(tag)}
          className={`block border border-slate-600 px-4 py-2 text-sm md:text-base rounded-sm cursor-pointer text-center text-nowrap 
              ${activeTag === tag
              ? "bg-primary-bright-orange"
              : "bg-white"
            }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
