import HomeMainPage from "./(homes)/home-main/page";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Digital Agency & Creative Engineering",
  description:
    "From ambitious ideas to enterprise-scale platforms, we create digital experiences that are fast, scalable, and built for long-term growth. Connecting ideas across the spectrum.",
  canonical: "/",
});

export default function Home() {
  return <HomeMainPage />;
}
