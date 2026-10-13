import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

// Spec H1 — fixed set of four allowed categories. The legacy 'Uncategorized'
// option must not be selectable; constrain to this list at the schema layer.
// Titles use "and" rather than "&" to match the live category documents and
// to keep titles safe in URLs, metadata and screen readers. The news page
// filter matches categories by _id, so the wording here only affects display.
export const NEWS_CATEGORIES = [
  "Latest Announcements",
  "Programs and Fellowships",
  "Research and Innovation",
  "Partnerships and Events",
] as const;

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: NEWS_CATEGORIES.map((title) => ({ title, value: title })),
      },
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});
