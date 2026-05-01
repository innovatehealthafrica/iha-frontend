import { SanityImageAssetDocument } from "next-sanity";
import { TypedObject } from "sanity";

export namespace SanityTypes {
  export interface BlogPost {
    _id: string;
    _createdAt: Date;
    _updatedAt: Date;
    title: string;
    description: string;
    slug: { current: string };
    body?: TypedObject[];
    author: Author<SanityImageAssetDocument | undefined>;
    categories: { title: string; _id: string }[];
    mainImage: SanityImageAssetDocument;
    featured?: boolean;
  }

  export interface Author<T> {
    _id: string;
    name: string;
    image: T;
  }
}
