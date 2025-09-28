"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { SanityTypes } from "@/@types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface BlogCardProps {
  post: SanityTypes.BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const postDate = new Date(post._createdAt).toLocaleDateString();
  const postImage = post.mainImage
    ? urlFor(post.mainImage).url()
    : "/hero-bg.png";

  return (
    <Card className="overflow-hidden cursor-pointer bg-transparent border-none shadow-none">
      <Link href={`/news/${post.slug.current}`} className="flex flex-col gap-4">

        <div className="relative w-full h-64 bg-gray-100 rounded-md overflow-hidden">
          <Image
            src={postImage}
            alt={post.title}
            fill
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0..."
          />
        </div>



        {/* Content */}
        <div>
          <div className="flex justify-between items-center gap-2 mb-3">
            {post?.categories?.length ? (
              <Badge className="uppercase font-semibold bg-primary-bright-orange">
                {post.categories[0]?.title ?? "Uncategorized"}
              </Badge>
            ) : (
              <Badge className="uppercase font-semibold bg-primary-bright-orange">Uncategorized</Badge>
            )}
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              {postDate}
            </div>
          </div>

          <h4 className="font-semibold text-lg leading-7 line-clamp-2 sm:line-clamp-3 h-[56px] sm:h-[84px]">
            {post.title}
          </h4>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {post.description}
          </p>
        </div>
      </Link>
    </Card>
  );
}
