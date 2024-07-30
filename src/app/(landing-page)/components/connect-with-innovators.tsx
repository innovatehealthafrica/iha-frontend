import React from "react";
import mapImage from "@/assets/images/the-map.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/ui/button";
import { Search } from "lucide-react";

export default function ConnectWithInnovatorSection() {
  return (
    <section className="">
      <div className="flex gap-16">
        <Image
          src={mapImage}
          alt="Connect with innovators"
          className="w-full"
        />
        <div className="flex flex-col justify-center w-full">
          <h1 className="font-[600] text-4xl leading-normal max-w-sm">
            Connect With Innovators Across Africa
          </h1>

          <p className="mt-12 max-w-screen-sm">
            Search our vibrant network of over 2,000 healthcare innovators,
            fostering collaboration and growth across the continent.
          </p>

          <div className="w-full max-w-60 relative mt-6">
            <Input placeholder="Country" className="w-full rounded-full h-12" />
            <Button className="absolute right-1 top-1 rounded-full h-10 w-10 p-0">
              <Search className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
