import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  if (value >= 1e12) {
    return (value / 1e12).toFixed(1) + "T";
  } else if (value >= 1e9) {
    return (value / 1e9).toFixed(1) + "B";
  } else if (value >= 1e6) {
    return (value / 1e6).toFixed(1) + "M";
  } else {
    return value.toString();
  }
}

export function getInitials(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const lastInitial = lastName.charAt(0).toUpperCase();
  return `${firstInitial}${lastInitial}`;
}
