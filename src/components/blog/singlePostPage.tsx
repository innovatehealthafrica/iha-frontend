"use client";

import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityTypes } from "@/@types";
import { Calendar } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Badge } from "../ui/badge";

interface SinglePostProps {
  post: SanityTypes.BlogPost;
}

export default function SinglePost({ post }: SinglePostProps) {
  const publishedDate = new Date(post._createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).url()
    : "/fallback-image.jpg";

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      {/* Header Image */}
      <div className="relative h-64 w-full mb-6">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Meta Info */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
        {post?.categories?.length ? (
          <Badge className="uppercase font-semibold bg-primary-bright-orange">
            {post.categories[0]?.title ?? "Uncategorized"}
          </Badge>
        ) : (
          <span className="uppercase font-semibold">Uncategorized</span>
        )}

        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{publishedDate}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

      {/* Body */}
      <section className="prose prose-lg">
        {post.body ? (
          <PortableText value={post.body} />
        ) : (
          <p>{post.description}</p>
        )}
      </section>
    </article>
  );
}
