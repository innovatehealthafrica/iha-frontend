"use client";

import { Button } from "@/ui/button";
import { FormEventHandler } from "react";

import colourPrints from "@/assets/images/africa-print.png";
import greyPrints from "@/assets/images/africa-print-grey.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { Info } from "lucide-react";

export default function ContactUsSection() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    toast.error("We are unable to submit your request at the moment.", {
      icon: <Info />,
      className: "border border-primary-green",
    });
  };
  return (
    <section className="bg-white py-6 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 flex">
        <Image src={colourPrints} alt="africa prints" className="w-[42px]" />
        <Image src={greyPrints} alt="africa prints" className="w-20" />
      </div>

      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row ps-16 lg:ps-0 pe-8 lg:pe-0">
        <div className="flex flex-col justify-center items-end lg:items-start lg:px-12 lg:w-1/2">
          <h3 className="font-[600] text-3xl lg:text-5xl mb-4">Get in Touch</h3>
          <p className="max-w-lg text-end lg:text-start">
            We’re open to answer your questions, discuss Partnerships, Services,
            and Collaborative Opportunities!
          </p>
        </div>

        <div className="border-l lg:px-20 w-full lg:max-w-lg py-8 flex flex-col items-end lg:items-start">
          <h2 className="mb-6 font-[600] text-2xl lg:text-4xl text-end lg:text-start">
            Let’s Talk
          </h2>
          <Button
            className="bg-black text-white hover:bg-black/80 hover:text-white rounded-lg w-fit"
            size="lg"
            variant="secondary"
            onClick={() =>
              toast("Feature coming soon.", {
                icon: <Info />,
                className: "border border-primary-green",
              })
            }
          >
            Schedule a meeting
          </Button>

          <div className="flex items-center gap-4 py-6">
            <span className="w-full h-1 border-t"></span>
            <span>OR</span>
            <span className="w-full h-1 border-t"></span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-end lg:items-start"
          >
            <Input
              placeholder="Your name"
              className="h-12 rounded-lg px-6 mb-6 max-w-xs"
            />

            <Input
              placeholder="Your email"
              className="h-12 rounded-lg px-6 mb-6 max-w-xs"
            />

            <Textarea
              placeholder="Leave your message here..."
              className="rounded-lg px-6 mb-6 max-w-xs"
              rows={5}
            />

            <Button
              className="bg-black text-white hover:bg-black/80 hover:text-white rounded-lg"
              size="lg"
              variant="secondary"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
