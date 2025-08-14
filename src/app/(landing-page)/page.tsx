import BlogSection from "./components/blog-section";
import NewsletterSubscriptionSection from "@/components/newsletter-subscription-section";
import { client } from '@/sanity/lib/client';
import { SanityTypes } from '@/@types';
import { ClientSection } from "./components/clientSection";


export const revalidate = 60;

async function getPost() {
  const query = `
    *[_type == 'post'] | order(_createdAt desc) {
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
  return await client.fetch<SanityTypes.BlogPost[]>(query);
}




export default async function Home() {

  const posts: SanityTypes.BlogPost[] = await getPost()


  return (
    <>
      <ClientSection />


      <BlogSection posts={posts} />

      <NewsletterSubscriptionSection />
    </>
  );
}
