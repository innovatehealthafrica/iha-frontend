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
    <div className="mx-4 mb-6 overflow-hidden">
      <motion.div
        className="flex gap-4 items-center whitespace-nowrap cursor-grab"
        drag="x"
        dragConstraints={{ left: -300, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            onClick={() => setActiveTag(tag)}
            className={`border border-slate-600 px-4 py-2 rounded-sm cursor-pointer text-center text-nowrap 
              ${
                activeTag === tag
                  ? "bg-primary-bright-orange text-white" // Active class
                  : "bg-white"
              }`}
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
