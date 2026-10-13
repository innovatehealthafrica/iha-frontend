"use client";

import { useId, useMemo, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { BlogCard } from "./blogCard";
import { FeaturedBlogCard } from "./featuredBlogPost";
import { SanityTypes } from "@/@types";

export interface BlogCategory {
  _id: string;
  title: string;
}

interface BlogGridProps {
  posts: SanityTypes.BlogPost[];
  /** Categories fetched from Sanity. "All categories" is always the first option. */
  categories: BlogCategory[];
}

const ALL = "all";

// Collapse stray whitespace from Studio-entered titles (e.g. "Partnerships and  Events").
const tidy = (title: string) => title.replace(/\s+/g, " ").trim();
const normalise = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

export function BlogArchiveGrid({ posts, categories }: BlogGridProps) {
  const [activeId, setActiveId] = useState<string>(ALL);
  const [query, setQuery] = useState("");
  const selectId = useId();
  const searchId = useId();

  // Post count per category, so the dropdown shows how many posts each option has.
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const post of posts) {
      for (const c of post.categories ?? []) {
        if (c?._id) map.set(c._id, (map.get(c._id) ?? 0) + 1);
      }
    }
    return map;
  }, [posts]);

  const options = useMemo(
    () => [
      { _id: ALL, title: "All categories", count: posts.length },
      ...categories.map((c) => ({ _id: c._id, title: tidy(c.title), count: counts.get(c._id) ?? 0 })),
    ],
    [categories, counts, posts.length],
  );

  const filtered = useMemo(() => {
    const q = normalise(query);
    return posts.filter((p) => {
      if (activeId !== ALL && !p.categories?.some((c) => c?._id === activeId)) return false;
      if (!q) return true;
      const haystack = normalise(
        [p.title, p.description, ...(p.categories ?? []).map((c) => c?.title ?? "")].join(" "),
      );
      return haystack.includes(q);
    });
  }, [posts, activeId, query]);

  const featuredPost = filtered[0];
  const regularPosts = filtered.slice(1);
  const isFiltering = query.trim() !== "" || activeId !== ALL;

  return (
    <div className="flex flex-col space-y-12 px-8 lg:px-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <label htmlFor={searchId} className="sr-only">
            Search news
          </label>
          <Search
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news…"
            autoComplete="off"
            className="w-full rounded-md border border-gray-300 bg-white py-2.5 pl-10 pr-10 text-sm text-primary placeholder:text-gray-400 transition-colors hover:border-[#006666] focus:border-[#006666] focus:outline-none focus:ring-2 focus:ring-[#006666]/30 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-[#006666]"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-3">
          <label htmlFor={selectId} className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Filter by category
          </label>
          <div className="relative w-full sm:w-72">
            <select
              id={selectId}
              value={activeId}
              onChange={(e) => setActiveId(e.target.value)}
              className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-primary transition-colors hover:border-[#006666] focus:border-[#006666] focus:outline-none focus:ring-2 focus:ring-[#006666]/30"
            >
              {options.map((o) => (
                <option key={o._id} value={o._id}>
                  {o.title} ({o.count})
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#006666]"
            />
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "post" : "posts"} found
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-12 space-y-3">
          <p className="text-gray-600">
            {query.trim() ? (
              <>No posts match <span className="font-semibold text-primary">&ldquo;{query.trim()}&rdquo;</span>.</>
            ) : (
              "No posts in this category yet."
            )}
          </p>
          {isFiltering && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveId(ALL);
              }}
              className="text-sm font-semibold text-[#006666] hover:underline"
            >
              Clear search and filters
            </button>
          )}
        </div>
      ) : (
        <>
          {featuredPost && <FeaturedBlogCard post={featuredPost} />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-20">
            {regularPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
