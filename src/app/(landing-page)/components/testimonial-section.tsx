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
      "Thanks to IHA, my healthcare app is now used by thousands, transforming patient care across multiple regions.",
    name: "Dr. Alex O.",
    jobTitle: "App Developer",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "The support and resources provided by IHA have been invaluable in scaling our healthcare services.",
    name: "Sarah W.",
    jobTitle: "Healthcare Administrator",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "IHA's innovative solutions have significantly improved our hospital's operational efficiency.",
    name: "Michael T.",
    jobTitle: "Hospital Manager",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    testimonial:
      "The user-friendly interface of the IHA platform has made a big difference in our daily operations.",
    name: "Linda P.",
    jobTitle: "Nurse",
    avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "IHA has helped us streamline our patient management system, saving us time and resources.",
    name: "John D.",
    jobTitle: "Clinic Owner",
    avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "With IHA, we have seen a notable increase in patient satisfaction and engagement.",
    name: "Emily R.",
    jobTitle: "Patient Coordinator",
    avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "The analytics tools provided by IHA are top-notch and have helped us make better decisions.",
    name: "James K.",
    jobTitle: "Data Analyst",
    avatarUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "IHA's training and support have been exceptional, helping our team get up to speed quickly.",
    name: "Karen L.",
    jobTitle: "Training Manager",
    avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "The integration capabilities of IHA have been crucial for connecting our various healthcare systems.",
    name: "Daniel S.",
    jobTitle: "IT Specialist",
    avatarUrl: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "IHA has truly transformed how we deliver care to our patients, making our processes more efficient and effective.",
    name: "Patricia M.",
    jobTitle: "Chief Medical Officer",
    avatarUrl: "https://randomuser.me/api/portraits/women/10.jpg",
  },
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
        <h4 className="text-lg font-semibold text-primary text-center">{title}</h4>
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
