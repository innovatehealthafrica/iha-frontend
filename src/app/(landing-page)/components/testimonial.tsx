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
    <div className="pe-12">
      <QuoteIcon className="rotate-180 text-primary-green size-10" />
      <p className="min-h-28">{testimonial}</p>

      <div className="flex items-center gap-4 ">
        <Avatar className="bg-primary-green">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>

        <div className="text-xs">
          <h5 className="font-bold">{name}</h5>
          <span>{jobTitle}</span>
        </div>
      </div>
    </div>
  );
}
