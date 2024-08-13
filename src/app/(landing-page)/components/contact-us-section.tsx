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
    <section className="bg-white py-24 relative">
      <div className="absolute top-0 flex">
        <Image src={colourPrints} alt="africa prints" className="w-[42px]" />
        <Image src={greyPrints} alt="africa prints" className="w-20" />
      </div>

      <div className="w-full max-w-screen-xl mx-auto flex">
        <div className="flex flex-col justify-center px-12 w-1/2">
          <h3 className="font-[600] text-5xl mb-4">Get in Touch</h3>
          <p className="max-w-lg ">
            We’re open to answer your questions, discuss Partnerships, Services,
            and Collaborative Opportunities!
          </p>
        </div>

        <div className="border-l px-20 w-full max-w-lg py-8">
          <h2 className="mb-6 font-[600] text-4xl">Let’s Talk</h2>
          <Button
            className="bg-black text-white hover:bg-black/80 hover:text-white rounded-lg"
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

          <form onSubmit={handleSubmit} className="">
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
