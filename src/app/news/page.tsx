import React from 'react'
import { client } from '@/sanity/lib/client';
import { SanityTypes } from '@/@types';
import { BlogArchiveGrid } from '@/components/news/blogArchiveView';
import { BlogHeader } from '@/components/news/blogHero';


export const revalidate = 60;

async function getPost() {
  const query = `
    *[_type == 'post' && defined(slug.current)] | order(_createdAt desc) {
      _id,
      title,
      description,
      _createdAt,
      slug,
      mainImage,
      categories[]->{title},
      body
    }
  `;
  const posts = await client.fetch<SanityTypes.BlogPost[]>(query);
  return posts.filter((post) => post.slug?.current); // ✅ extra safety
}

const page = async () => {
  const posts: SanityTypes.BlogPost[] = await getPost()

  return (
    <div className="max-w-screen-xl mx-auto mt-32 lg:mt-0 sm:28 lg:pt-16 pt:20 lg:pb-20 pb-0">
      <BlogHeader />
      <BlogArchiveGrid posts={posts} />
    </div>
  )
}

export default page