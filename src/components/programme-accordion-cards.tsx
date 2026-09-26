"use client";

import React, { useId, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUp, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A single programme shown as a large horizontal card.
 *
 * Only `id`, `title`, `image`, `location` and `summary` are required.
 * Every expandable field (`about`, `delivered`, `outcomes`) is optional and
 * the matching section is simply omitted when it is not provided, so new
 * programmes can be added with whatever information is available.
 */
export interface ProgrammeCard {
  id: string;
  title: string;
  image: StaticImageData | string;
  imageAlt?: string;
  /** Location / partner shown under the title, e.g. "University College Hospital, Ibadan" */
  location: string;
  /** Short description shown on the collapsed card */
  summary: string;
  /** "Delivered with" partner / institution */
  deliveredWith?: string;
  /** Delivery format, e.g. "In-facility workshop" */
  format?: string;
  /** Expanded: About the programme (one string per paragraph) */
  about?: string[];
  /** Expanded: What was delivered / programme components */
  delivered?: string[];
  /** Expanded: Programme outcomes / impact */
  outcomes?: string[];
}

interface ProgrammeAccordionCardsProps {
  title?: string;
  intro?: string;
  programmes: ProgrammeCard[];
  className?: string;
}

function ExpandedSection({ heading, paragraphs, bullets }: { heading: string; paragraphs?: string[]; bullets?: string[] }) {
  const hasParagraphs = !!paragraphs && paragraphs.length > 0;
  const hasBullets = !!bullets && bullets.length > 0;
  if (!hasParagraphs && !hasBullets) return null;

  return (
    <div>
      <h4 className="text-base font-bold text-primary mb-2">{heading}</h4>
      {hasParagraphs && (
        <div className="space-y-3">
          {paragraphs!.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-gray-700">
              {p}
            </p>
          ))}
        </div>
      )}
      {hasBullets && (
        <ul className="list-disc pl-5 space-y-1.5 marker:text-[#006666]">
          {bullets!.map((b, i) => (
            <li key={i} className="text-[15px] leading-relaxed text-gray-700">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ProgrammeAccordionCards({ title, intro, programmes, className }: ProgrammeAccordionCardsProps) {
  // Only one programme may be expanded at a time.
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <section className={cn("max-w-screen-xl mx-auto px-6 lg:px-0 py-16 lg:py-20", className)}>
      {title && (
        <h2 className="text-3xl lg:text-5xl text-center text-primary font-bold mb-4">{title}</h2>
      )}
      {intro && (
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-base lg:text-lg leading-relaxed mb-12">{intro}</p>
      )}
      {title && !intro && <div className="mb-12" />}

      <div className="flex flex-col gap-10 lg:gap-14">
        {programmes.map((programme) => {
          const isOpen = openId === programme.id;
          const panelId = `${baseId}-${programme.id}-panel`;
          const buttonId = `${baseId}-${programme.id}-button`;
          const hasExpandedContent =
            (programme.about?.length ?? 0) > 0 ||
            (programme.delivered?.length ?? 0) > 0 ||
            (programme.outcomes?.length ?? 0) > 0;

          return (
            <article
              key={programme.id}
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-md transition-shadow duration-300",
                isOpen ? "shadow-2xl ring-1 ring-[#006666]/20" : "hover:shadow-xl",
              )}
            >
              {/* Two-column layout: image | information. Stacks on mobile. */}
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                <div className="relative w-full aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden">
                  <Image
                    src={programme.image}
                    alt={programme.imageAlt ?? programme.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 42vw, 100vw"
                  />
                </div>

                <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                  <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-primary leading-snug mb-2">
                    {programme.title}
                  </h3>
                  <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#006666] mb-4">
                    <MapPin size={15} className="shrink-0" aria-hidden="true" />
                    {programme.location}
                  </p>
                  <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed mb-6">{programme.summary}</p>

                  {(programme.deliveredWith || programme.format) && (
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6 border-t border-gray-100 pt-5">
                      {programme.deliveredWith && (
                        <div>
                          <dt className="font-semibold text-gray-500 uppercase tracking-wide text-xs mb-1">Delivered with</dt>
                          <dd className="text-gray-800 font-medium">{programme.deliveredWith}</dd>
                        </div>
                      )}
                      {programme.format && (
                        <div>
                          <dt className="font-semibold text-gray-500 uppercase tracking-wide text-xs mb-1">Format</dt>
                          <dd className="text-gray-800 font-medium">{programme.format}</dd>
                        </div>
                      )}
                    </dl>
                  )}

                  {hasExpandedContent && (
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : programme.id)}
                      className={cn(
                        "mt-auto inline-flex items-center justify-center gap-2 self-start border px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 ease-out",
                        isOpen
                          ? "bg-[#006666] text-white border-[#006666] hover:bg-[#005252]"
                          : "border-[#006666] text-[#006666] bg-transparent hover:bg-[#006666] hover:text-white",
                      )}
                    >
                      {isOpen ? "Hide programme" : "View programme"}
                      {isOpen ? <ArrowUp size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}
                    </button>
                  )}
                </div>
              </div>

              {/* Expandable content rendered in place below the card */}
              <AnimatePresence initial={false}>
                {isOpen && hasExpandedContent && (
                  <motion.div
                    key="panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }, opacity: { duration: 0.25 } }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-100 bg-gray-50/70 p-6 sm:p-8 lg:p-10 space-y-8">
                      <ExpandedSection heading="About the programme" paragraphs={programme.about} />
                      <ExpandedSection heading="What was delivered" bullets={programme.delivered} />
                      <ExpandedSection heading="Programme outcomes" bullets={programme.outcomes} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
