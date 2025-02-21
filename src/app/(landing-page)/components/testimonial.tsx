import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { QuoteIcon } from "@radix-ui/react-icons";

export default function Testimonial({
  testimonial: { testimonial, name, jobTitle, avatarUrl },
}: {
  testimonial: {
    testimonial: string;
    name: string;
    jobTitle: string;
    avatarUrl: string;
  };
}) {
  return (
    <div className="lg:pe-12">
      <div className="h-48">
        <div className="relative h-36 border border-primary text-primary bg-white rounded-md px-6 py-5">
          {testimonial}

          {/* Chat Bubble Tip - The curved tip below the chat bubble */}
          <svg
            width="65"
            height="32"
            viewBox="0 0 65 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-[28.3px] left-4"
          >
            <path
              d="M4.81251 4.40555H0.5V0.5H64.5001V4.40555H52.299C49.1386 4.40555 46.0955 5.60269 43.7822 7.75601L18.725 31.0804C17.7185 32.0173 16.0869 31.219 16.2089 29.8494L17.2632 18.0148C17.9146 10.7023 12.1539 4.40555 4.81251 4.40555Z"
              fill="white"
              stroke="#0D2414"
            />
          </svg>

          {/* Chat Bubble Plaster 😅 - It covers the rough work, feels useless but very important (Remove it and see what I'm saying 🫣) */}
          <svg
            width="77"
            height="11"
            viewBox="0 0 77 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-[0] left-4"
          >
            <rect width="77" height="11" fill="#fff" />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-4 ">
        <Avatar className="bg-primary-green ms-3 size-14">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <span className="font-bold">{name}</span>
          <span className="text-sm">{jobTitle}</span>
        </div>
      </div>
    </div>
  );
}
