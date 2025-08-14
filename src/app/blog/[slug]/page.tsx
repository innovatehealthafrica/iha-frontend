import React from "react";
import SinglePost from "@/components/blog/singlePostPage";
import { client } from "@/sanity/lib/client";
import { SanityTypes } from "@/@types";
import { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { BlogPosting, WithContext } from "schema-dts"
import { StructuredData } from "@/components/blog/structuredData";


const site = {
  url: "https://innovatehealth.africa",
};

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

async function fetchPost(slug: string): Promise<SanityTypes.BlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    description,
    _createdAt,
    mainImage,
    categories[]->{title},
    body
  }`;
  return await client.fetch(query, { slug });
}

// ✅ Generate metadata for each single post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - InnovateHealth Africa",
      description: "The post you are looking for could not be found.",
    };
  }

  return {
    applicationName: "InnovateHealth Africa – Blog",
    creator: "Adeola Abdulramon",
    metadataBase: new URL(site.url),
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
      type: "article",
      url: `${site.url}/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function Page({ params: { slug } }: Props) {
  const post = await fetchPost(slug);

  if (!post) {
    return <div className="text-center py-20">Post not found.</div>;
  }

  const schemaData: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.mainImage ? urlFor(post.mainImage).url() : "",
    author: {
      "@type": "Person",
      name: post.author?.name ?? "Adeola Abdulramon",
      url: "https://www.linkedin.com/in/adeolaabdulramon",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/blog/${slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "InnovateHealth Africa",
    },
    datePublished: new Date(post._createdAt).toISOString(),
  };



  const normalizedPost: SanityTypes.BlogPost = {
    ...post,
    body: post.body,
  };

  return (
    <>
      <StructuredData data={schemaData} />
      <SinglePost post={normalizedPost} />
    </>
  );
}
