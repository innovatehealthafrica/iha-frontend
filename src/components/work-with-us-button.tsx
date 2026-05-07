"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

type ButtonProps = VariantProps<typeof buttonVariants>;

interface WorkWithUsButtonProps {
  label?: string;
  className?: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
}

export function WorkWithUsButton({
  label = "Work with Us",
  className,
  size = "lg",
  variant = "secondary",
}: WorkWithUsButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      <Button
        className={className}
        size={size}
        variant={variant}
        onClick={() => setIsOpen(true)}
      >
        {label}
      </Button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-with-us-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
            <h2 id="work-with-us-title" className="text-xl font-bold mb-4">
              Work with Us
            </h2>
            <p className="mb-6">
              Send us an email at{" "}
              <a
                href="mailto:info@innovatehealthafrica.org"
                className="text-primary-bright-orange underline font-semibold"
              >
                info@innovatehealthafrica.org
              </a>
            </p>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
