import React from "react";
import mapImage from "@/assets/images/the-map.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Info, Search } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

export default function ConnectWithInnovatorSection() {
  return (
    <section className="border-t md:border-none">
      <div className="flex flex-col lg:flex-row gap-16">
        <Image
          src={mapImage}
          alt="Connect with innovators"
          className="w-full hidden lg:block"
        />
        <div className="flex flex-col justify-center w-full px-8 lg:px-0 py-28 lg:py-0">
          <h1 className="font-[600] text-3xl lg:text-4xl lg:leading-normal max-w-sm">
            Connect With Innovators Across Africa
          </h1>

          <p className="mt-6 lg:mt-12 max-w-screen-sm">
            Search our vibrant network of over 2,000 healthcare innovators,
            fostering collaboration and growth across the continent.
          </p>

          <div className="w-full md:max-w-60 relative mt-6">
            <Input
              placeholder="Country"
              className="w-full rounded-full h-12 text-lg px-8"
            />
            <Button
              onClick={() => {
                toast.error("Feature coming soon.", {
                  icon: <Info />,
                  className: "border border-primary-green",
                });
              }}
              className="absolute right-1 top-1 rounded-full h-10 w-10 p-0"
            >
              <Search className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
