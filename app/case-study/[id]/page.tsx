import { Metadata } from "next";
import { BlogContent } from "../../../sections/case-study/BlogContent";
import { BlogHero } from "../../../sections/case-study/BlogHero";

export default function page() {
  return (
    <div>
      <BlogHero />
      <BlogContent />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Case study | Dagem Tadesse",
};