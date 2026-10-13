"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { SanityTypes } from "@/@types";
import Link from "next/link";
import { PostImage } from "./postImage";

interface BlogCardProps {
  post: SanityTypes.BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const postDate = new Date(post._createdAt).toLocaleDateString();

  return (
    <Card className="overflow-hidden bg-transparent border-none shadow-none">
      <div className="flex flex-col gap-4">

        <PostImage
          image={post.mainImage}
          alt={post.title}
          width={800}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="aspect-[16/10] rounded-md"
        />

        {/* Content */}
        <div>
          <div className="flex flex-col items-start mb-3">
            {post?.categories?.length ? (
              <Badge className="uppercase font-semibold bg-primary-bright-orange text-xs">
                {post.categories[0]?.title ?? "Uncategorized"}
              </Badge>
            ) : (
              <Badge className="uppercase font-semibold bg-primary-bright-orange">Uncategorized</Badge>
            )}

          </div>

          <h4 className="font-semibold text-lg leading-7 line-clamp-2 sm:line-clamp-3 h-[56px] sm:h-[84px]">
            {post.title}
          </h4>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {post.description}
          </p>

          <div className="flex justify-between">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              {postDate}
            </div>

            <Link href={`/news/${post.slug.current}`}
              className="text-primary-bright-orange text-xs font-medium flex items-center gap-1 cursor-pointer">
              Read More <span><ArrowRight size={12} /></span>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
