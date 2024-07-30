import { Button } from "@/ui/button";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.png";
import StartupLaunchIcon from "./components/startup-launch-icon";
import { ArrowRight, Book, LifeBuoy } from "lucide-react";
import { Share1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const statistics = [
  { label: "Healthcare solution developed", value: 250 },
  { label: "Healthcare Innovators Trained", value: 1200 },
  { label: "Research conducted", value: 100 },
];

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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-primary-green/85 bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/hero-bg.png")',
          backgroundBlendMode: "darken",
        }}
      >
        <div className="flex py-8 pb-36 px-24 space-x-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col justify-center w-full">
            <h1 className="font-bold text-4xl text-white">
              Building Tomorrow’s Healthcare{" "}
              <span className="text-primary-bright-orange">Solution</span>{" "}
              Today, <br />
              <span className="text-white/50">By Africans, for Africa</span>
            </h1>

            <p className="mt-12 text-white">
              We{"'"}re driving the co-creation of healthcare solutions with
              everyone from developers to end users, turning ideas into
              real-world impacts.
            </p>

            <Button className="w-fit mt-9 rounded-full bg-white text-primary-green">
              Read More
            </Button>
          </div>

          <div className="">
            <Image
              src={heroImage}
              alt="Building Tomorrow’s Healthcare Solution Today, By Africans, for
            Africa"
              className="min-w-[553px] w-[553px]"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="-mt-[5%] absolute w-full">
        <div className="grid grid-cols-3 py-8 px-24 space-x-12 max-w-screen-2xl mx-auto">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="col-span-1 px-4 py-6 shadow-lg rounded-3xl space-y-3 bg-white"
            >
              <h3 className="text-xl">{stat.label}</h3>
              <p className="font-bold text-5xl">{stat.value}+</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Solutions */}
      <section className="bg-white pt-32">
        <div className="py-8 px-28 space-x-12 max-w-screen-2xl mx-auto flex">
          <div className="flex flex-col justify-center">
            <h3 className="font-[600] text-4xl">Get started with us at IHA!</h3>
            <p className="font-light text-base mt-6">
              Explore Our Key Solutions empowering You with the Tools,
              Knowledge, Platform and Network to Drive Healthcare Innovation
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 px-12">
            <div className="grid gap-y-11 pb-24">
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

            <div className="grid gap-y-11 pt-24">
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
    </>
  );
}
