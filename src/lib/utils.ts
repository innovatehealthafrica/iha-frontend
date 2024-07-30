import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name: string) {
  if (!name) return '';

  const nameParts = name.trim().split(/\s+/); // Split the name by whitespace
  let initials = '';

  if (nameParts.length === 1) {
    // Only one part of the name (either first or last)
    initials = nameParts[0].charAt(0).toUpperCase();
  } else {
    // More than one part of the name (first and last)
    initials = nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase();
  }

  return initials;
}