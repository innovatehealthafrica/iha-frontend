import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Share1Icon } from "@radix-ui/react-icons";
import { ArrowRight, Book, LifeBuoy } from "lucide-react";
import React from "react";
import StartupLaunchIcon from "./startup-launch-icon";

const solutions = [
  [
    {
      title: "Venture Lab",
      description:
        "Turn your Idea into a market ready product with the support of our expert teams and trusted partners",
      cta: "Build with us",
      color: "bg-primary-bright-orange",
      icon: <StartupLaunchIcon fill="white" />,
    },
    {
      title: "Innovation Support",
      description:
        "Access support to smartly apply innovation and technology in solving your organization’s social and commercial problems.",
      cta: "Build with us",
      color: "bg-primary-green",
      icon: <LifeBuoy color="white" />,
    },
  ],
  [
    {
      title: "School of Healthcare Innovation",
      description:
        "Equip yourself with cutting-edge skills to lead healthcare innovation—join 1,200+ professionals who have transformed their careers with us",
      cta: "Learn with us",
      color: "bg-primary-green",
      icon: <Book color="white" className="size-5" />,
    },
    {
      title: "Innovator’s Network",
      description:
        "Join our network of healthcare innovators, entrepreneurs and investors",
      cta: "Join now",
      color: "bg-primary-bright-orange",
      icon: <Share1Icon color="white" className="size-5" />,
    },
  ],
];

export default function KeySolutionsSection() {
  return (
    <section className="bg-white pt-20 lg:pt-32">
      <div className="py-8 px-8 lg:px-28 lg:space-x-12 max-w-screen-2xl mx-auto flex flex-col lg:flex-row">
        <div className="flex flex-col justify-center">
          <h3 className="font-[600] text-3xl lg:text-4xl">
            Get started with us at IHA!
          </h3>
          <p className="font-light text-base mt-6">
            Explore Our Key Solutions empowering You with the Tools, Knowledge,
            Platform and Network to Drive Healthcare Innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 py-8 lg:py-0 gap-y-11 lg:gap-y-0 gap-x-8 lg:px-12">
          <div className="grid gap-y-11 lg:pb-24">
            {solutions[0].map((solution, index) => (
              <div
                className={cn(
                  "shadow-[2px_2px_50px_7px_rgba(0,0,0,0.15)] py-7 px-8 h-96",
                  "rounded-tl-[40px]"
                )}
                key={index}
              >
                <div className="flex items-center">
                  <span
                    className={cn(
                      "size-12 flex justify-center items-center rounded-full",
                      solution.color
                    )}
                  >
                    {solution.icon}
                  </span>
                  <h4 className="font-bold text-xl ps-4">{solution.title}</h4>
                </div>

                <p className="mt-14 text-base">{solution.description}</p>

                <Button variant="outline" className="mt-10 rounded-full">
                  {solution.cta} <ArrowRight />{" "}
                </Button>
              </div>
            ))}
          </div>

          <div className="grid gap-y-11 lg:pt-24">
            {solutions[1].map((solution, index) => (
              <div
                className={cn(
                  "shadow-[2px_2px_50px_7px_rgba(0,0,0,0.15)] py-7 px-8 h-96",
                  "rounded-tr-[40px]"
                )}
                key={index}
              >
                <div className="flex items-center">
                  <span
                    className={cn(
                      "size-12 flex justify-center items-center rounded-full",
                      solution.color
                    )}
                  >
                    {solution.icon}
                  </span>
                  <h4 className="font-bold text-xl ps-4">{solution.title}</h4>
                </div>

                <p className="mt-14 text-base">{solution.description}</p>

                <Button variant="outline" className="mt-10 rounded-full">
                  {solution.cta} <ArrowRight />{" "}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
