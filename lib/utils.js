import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// The `cn` helper function
export function cn(...inputs) {
  return twMerge(clsx(inputs)); // Combine and merge the Tailwind classes
}
