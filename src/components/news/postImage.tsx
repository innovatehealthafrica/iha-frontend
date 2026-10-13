import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
import type { SanityTypes } from "@/@types";

interface PostImageProps {
  image: SanityTypes.BlogPost["mainImage"] | undefined;
  alt: string;
  /** Max width the foreground image will be requested at from Sanity. */
  width?: number;
  sizes: string;
  className?: string;
  priority?: boolean;
}

const FALLBACK = "/hero-bg.png";

/**
 * Shows the whole post image, never cropped, inside a fixed-ratio frame.
 * A blurred, scaled copy of the same image fills the frame behind it so
 * square or portrait uploads sit on a matching backdrop instead of grey bars.
 */
export function PostImage({ image, alt, width = 800, sizes, className, priority }: PostImageProps) {
  const hasImage = Boolean(image);
  const src = hasImage
    ? urlFor(image!).width(width).fit("max").auto("format").url()
    : FALLBACK;
  const backdrop = hasImage
    ? urlFor(image!).width(80).fit("max").blur(40).auto("format").url()
    : FALLBACK;

  return (
    <div className={cn("relative w-full overflow-hidden bg-gray-100", className)}>
      {/* Blurred backdrop */}
      <Image
        src={backdrop}
        alt=""
        aria-hidden="true"
        fill
        sizes="200px"
        className="object-cover scale-110 blur-2xl opacity-80"
      />
      {/* Full, uncropped image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}
