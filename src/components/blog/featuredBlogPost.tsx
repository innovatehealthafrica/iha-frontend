"use clients";

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SanityTypes } from "@/@types"
import { Calendar } from "lucide-react"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface FeaturedBlogCardProps {
  post: SanityTypes.BlogPost
}

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  const postDate = new Date(post._createdAt).toLocaleDateString();
  const postImage = post.mainImage
    ? urlFor(post.mainImage).url()
    : "/hero-bg.png";


  return (
    <section className="mt-20 mb-12">
      <div className="overflow-hidden ">
        <div className="flex flex-col md:flex-row">
          <div className="lg:w-1/2 p-8">
            <div className="flex items-center gap-2 mb-4">
              {post?.categories?.length ? (
                <Badge className="uppercase font-semibold bg-primary-bright-orange">
                  {post.categories[0]?.title ?? "Uncategorized"}
                </Badge>
              ) : (
                <span className="uppercase font-semibold">Uncategorized</span>
              )}
              <div className="flex items-center gap-1 text-sm text-black">
                <Calendar className="w-4 h-4" />
                {postDate}
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-4 leading-tight">{post.title}</h2>
            <p className="text-black mb-6 text-lg">{post.description}</p>

            <Link href={`/blog/${post.slug.current}`} className="bg-primary-bright-orange text-black px-6 py-2 rounded-lg font-semibold
             hover:bg-gray-100 transition-colors">
              Read More
            </Link>
          </div>

          <div className="lg:w-1/2 relative">
            <Image
              src={postImage}
              alt={post.title}
              fill
              className="object-cover hover:scale-95 transition-transform duration-300 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
