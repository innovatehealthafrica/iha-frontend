"use client";

import { BlogCard } from "./blogCard"
import { FeaturedBlogCard } from "./featuredBlogPost"
import { SanityTypes } from "@/@types"

interface BlogGridProps {
  posts: SanityTypes.BlogPost[]
}

export function BlogArchiveGrid({ posts }: BlogGridProps) {
  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <div className="flex flex-col space-y-8">
      {featuredPost && <FeaturedBlogCard post={featuredPost} />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}
