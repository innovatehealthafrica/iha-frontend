import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Testimonial from "./testimonial";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

type TestimonialItem = {
  testimonial: string;
  name: string;
  jobTitle: string;
  avatarUrl: string;
};

const defaultTestimonials: TestimonialItem[] = [
  {
    testimonial:
      "AHIF 2025 has not only expanded my knowledge and skillset but also reshaped how I see my path forward.",
    name: "Esther Murunga, Kenya.",
    jobTitle: "AHIF Fellow 2025",
    avatarUrl: "/icon.png",
  },
  {
    testimonial:
      " I learned the importance of human-centered design, focusing on the real needs of African communities when developing innovative solutions.",
    name: "Yisak Mitiku Debela, Ethiopia",
    jobTitle: "AHIF Fellow 2025",
    avatarUrl: "/icon.png",
  },
  {
    testimonial:
      "Participating in the AHIF 2025 Fellowship has been a defining moment in my journey as a healthcare innovator.",
    name: "Toyyib Muhammad-Jamiu, Nigeria",
    jobTitle: "AHIF Fellow 2025",
    avatarUrl: "/icon.png",
  },
  {
    testimonial:
      "I’m truly motivated and very excited to start working on my project, and I feel much more confident about it.",
    name: "Atfa Mohamed Awad Ahmaidi, Sudan",
    jobTitle: "AHIF Fellow 2025",
    avatarUrl: "/icon.png",
  },
  {
    testimonial:
      " I leave the fellowship empowered, inspired, and ready to drive meaningful change in healthcare across the continent.",
    name: "ABDULMALIK SALIHU MAIWADA, Nigeria",
    jobTitle: "AHIF Fellow 2025",
    avatarUrl: "/icon.png",
  },
  {
    testimonial:
      "I am overjoyed to have been introduced to digital health, I am now confident and I know a lot has been done",
    name: "Aime Ishimwe,Rwanda",
    jobTitle: "AHIF Fellow 2025",
    avatarUrl: "/icon.png"
  }
];

export default function TestimonialSection({
  testimonials = defaultTestimonials,
  title = "Testimonials",
  embedded = false,
  className,
}: {
  testimonials?: TestimonialItem[];
  title?: string;
  embedded?: boolean;
  className?: string;
}) {
  if (embedded) {
    return (
      <div className={cn("w-full space-y-6", className)}>
        <h4 className="text-lg lg:text-[24px] font-semibold text-primary text-center">{title}</h4>
        <div>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full px-8"
            plugins={[Autoplay({ delay: 5000 })]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="!pl-4 md:basis-1/2 lg:basis-1/3">
                  <Testimonial testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 top-1/2 -translate-y-1/2 z-10 text-primary border-none bg-white/80 hover:bg-white shadow" />
            <CarouselNext className="right-4 top-1/2 -translate-y-1/2 z-10 text-primary border-none bg-white/80 hover:bg-white shadow" />
          </Carousel>
        </div>
      </div>
    );
  }

  return (
    <section className="">
      <div className="py-8 sm:py-28 px-8 lg:px-24 max-w-screen-2xl mx-auto space-y-8 sm:space-y-20">
        <h2 className="font-bold text-3xl lg:text-5xl leading-normal text-center text-primary">
          {title}
        </h2>

        <div className="px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            plugins={[Autoplay({ delay: 5000 })]}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Testimonial testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 top-1/2 -translate-y-1/2 z-10 text-primary border-none bg-white/80 hover:bg-white shadow" />
            <CarouselNext className="-right-12 top-1/2 -translate-y-1/2 z-10 text-primary border-none bg-white/80 hover:bg-white shadow" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
