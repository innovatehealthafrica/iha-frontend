import { useEffect } from "react";
import doctorImage from "@/assets/images/hero/doctor.png";
import bgImage from "@/assets/images/hero/bg-ellipse.svg";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex justify-center items-center h-80vh bg-transparent">
      <div className="flex flex-col items-center relative">
        <Image
          src={bgImage}
          alt="Doctor"
          className="h-80 rounded-full object-cover mb-8 absolute"
        />
        <Image
          src={doctorImage}
          alt="Doctor"
          className="w-300px h-300px rounded-full object-cover mb-8 absolute"
        />
        <div className="flex gap-4">
          <div className="flex items-center bg-yellow-400 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
            <i className="icon-technology mr-2"></i>
            <span>Technology</span>
          </div>
          <div className="flex items-center bg-yellow-400 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
            <i className="icon-healthcare mr-2"></i>
            <span>Healthcare</span>
          </div>
          <div className="flex items-center bg-yellow-400 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
            <i className="icon-innovation mr-2"></i>
            <span>Innovation</span>
          </div>
          <div className="flex items-center bg-yellow-400 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
            <i className="icon-africa mr-2"></i>
            <span>Africa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
