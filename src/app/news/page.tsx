import React from 'react'
import { client } from '@/sanity/lib/client';
import { SanityTypes } from '@/@types';
import { BlogArchiveGrid, type BlogCategory } from '@/components/news/blogArchiveView';
import { BlogHeader } from '@/components/news/blogHero';


export const revalidate = 60;

async function getPosts() {
  const query = `
    *[_type == 'post' && defined(slug.current)] | order(_createdAt desc) {
      _id,
      title,
      description,
      _createdAt,
      slug,
      mainImage,
      categories[]->{_id, title},
      body
    }
  `;
  const posts = await client.fetch<SanityTypes.BlogPost[]>(query);
  return posts.filter((post) => post.slug?.current); // ✅ extra safety
}

async function getCategories() {
  const query = `
    *[_type == 'category' && count(*[_type == 'post' && defined(slug.current) && references(^._id)]) > 0]
      | order(title asc) {
      _id,
      title
    }
  `;
  return client.fetch<BlogCategory[]>(query);
}

const page = async () => {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()])

  return (
    <div className="max-w-screen-xl mx-auto mt-32 lg:mt-0 sm:28 lg:pt-16 pt:20 lg:pb-20 pb-0">
      <BlogHeader />
      <BlogArchiveGrid posts={posts} categories={categories} />
    </div>
  )
}

export default page
