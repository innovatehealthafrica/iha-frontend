"use client";

import { FormEventHandler } from "react";

import colourPrints from "@/assets/images/africa-print.png";
import greyPrints from "@/assets/images/africa-print-grey.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { Info } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function ContactUsSection() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    toast.error("We are unable to submit your request at the moment.", {
      icon: <Info />,
      className: "border border-primary-green",
    });
  };
  return (
    <section className="bg-white flex">
      <div className="top-0 flex">
        <Image src={colourPrints} alt="africa prints" className="w-[42px]" />
        <Image src={greyPrints} alt="africa prints" className="w-20" />
      </div>

      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row ps-12 lg:ps-0 pe-8 lg:pe-0 py-8 lg:py-24">
        <div className="flex flex-col justify-center items-center lg:items-start lg:px-12 lg:w-1/2">
          <h3 className="font-[600] text-3xl lg:text-5xl mb-4">Get in Touch</h3>
          <p className="max-w-lg text-center lg:text-start mb-4 italic font-light">
            We’re open to answer your questions, discuss Partnerships, Services,
            and Collaborative Opportunities!
          </p>
        </div>

        <div className="lg:border-l lg:px-20 w-full lg:w-1/2 mx-auto">
          <div className="w-full max-w-sm mx-auto flex flex-col items-center ">
            <h2 className="mb-6 font-[600] text-3xl lg:text-5xl text-end lg:text-start">
              Let’s Talk
            </h2>
            <Button
              className="w-full"
              size="lg"
              onClick={() =>
                toast("Feature coming soon.", {
                  icon: <Info />,
                  className: "border border-primary-green",
                })
              }
            >
              Schedule a meeting
            </Button>

            <div className="flex items-center gap-4 py-6 w-full">
              <Separator className="flex-1" />
              <span>OR</span>
              <Separator className="flex-1" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-end lg:items-center"
            >
              <Input
                placeholder="Your name"
                className="h-12 rounded-lg px-6 mb-6"
              />

              <Input
                placeholder="Your email"
                className="h-12 rounded-lg px-6 mb-6"
              />

              <Textarea
                placeholder="Leave your message here..."
                className="rounded-lg px-6 mb-6"
                rows={10}
              />

              <Button className="w-full sm:w-fit" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
