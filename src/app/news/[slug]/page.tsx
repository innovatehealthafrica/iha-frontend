import React from "react";
import SinglePost from "@/components/news/singlePostPage";
import { client } from "@/sanity/lib/client";
import { SanityTypes } from "@/@types";
import type { Metadata, ResolvingMetadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import { BlogPosting, WithContext } from "schema-dts";
import { StructuredData } from "@/components/news/structuredData";
import OGImage from "@/assets/images/ahif/ahif-socail-card.webp";
import { notFound } from "next/navigation";

const site = {
  url: "https://innovatehealth.africa",
};

export const revalidate = 60;

async function fetchPost(slug: string): Promise<SanityTypes.BlogPost | null> {
  if (!slug) return null;
  const query = `*[_type == "post" && defined(slug.current) && slug.current == $slug][0]{
    _id,
    title,
    description,
    _createdAt,
    mainImage,
    categories[]->{title},
    body,
    author->{name}
  }`;
  const post = await client.fetch(query, { slug });
  return post ? JSON.parse(JSON.stringify(post)) : null;
}

// Only return posts with a defined slug
export async function generateStaticParams() {
  const slugs: { slug: string | null }[] = await client.fetch(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
  );

  return slugs
    .filter((s): s is { slug: string } => !!s.slug)
    .map(({ slug }) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>

}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const { slug } = await params

  const post = await fetchPost(slug);
  const base = new URL(site.url);
  if (!post) {
    return {
      metadataBase: base,
      title: "Innovate Health Africa - Transforming Healthcare in Africa",
      description:
        "Innovate Health Africa is revolutionizing healthcare across the continent by leveraging cutting-edge solutions designed by Africans, for Africa.",
    };
  }

  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : OGImage.src;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    metadataBase: base,
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post?.mainImage ? urlFor(post.mainImage).url() : OGImage.src],
      type: "article",
      url: `${site.url}/news/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;

  const post = await fetchPost(slug);
  if (!post) notFound();

  const schemaData: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.mainImage ? urlFor(post.mainImage).url() : OGImage.src,
    author: {
      "@type": "Person",
      name: post.author?.name ?? "Adeola Abdulramon",
      url: "https://www.linkedin.com/in/adeolaabdulramon",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/news/${slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "InnovateHealth Africa",
    },
    datePublished: new Date(post._createdAt).toISOString(),
  };

  return (
    <>
      <StructuredData data={schemaData} />
      <SinglePost post={post} />
    </>
  );
}
