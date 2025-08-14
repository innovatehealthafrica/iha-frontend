"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Info } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import ihaLogo from "@/assets/logo/iha-black.png";
import Image from "next/image";
import NewspaperMonotoneIcon from "@/components/icons/newspaper-monotone";

export default function NewsletterSubscriptionSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="px-8 lg:px-24 py-14 gap-x-12 max-w-screen-lg mx-auto bg-accent-100 rounded-[44px] border border-primary relative overflow-hidden">
        {/* Background Scribbles: Start */}
        <Image
          src={ihaLogo}
          alt="IHA logo"
          className="h-full w-auto absolute -top-6 left-2 opacity-5 object-contain"
        />
        <NewspaperMonotoneIcon className="text-red-300 absolute right-0 bottom-0" />
        {/* Background Scribbles: End */}

        <h3 className="text-xl sm:text-3xl text-center text-primary font-medium sm:mb-3">
          Subscribe to Our Newsletter
        </h3>

        <p className="text-center sm:text-lg text-primary font-light mb-4">
          Keep up with our latest news and events by subscribing to our weekly
          newsletter
        </p>

        <div className="flex justify-center">
          <div className="w-full max-w-sm relative lg:mt-6 col-span-2 lg:col-start-2">
            <Input
              placeholder="Your Email"
              className="w-full h-12 border border-primary"
            />
            <Button
              onClick={() => {
                toast.error("Feature coming soon.", {
                  icon: <Info />,
                  className: "border border-primary-green",
                });
              }}
              className="absolute right-1 top-1"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
