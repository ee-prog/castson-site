import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "For senior advisory conversations, transformation and operating mandates, fractional or full executive roles, and introductions from owners, CEOs, boards, and recruiters.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
