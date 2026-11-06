import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import About from "@/components/other-pages/team/About";
import Hero from "@/components/other-pages/team/Hero";
import MarqueeSlider from "@/components/other-pages/team/MarqueeSlider";
import Teammembers from "@/components/other-pages/team/Teammembers";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Our Team",
  description:
    "Meet the multidisciplinary creators, engineers, strategists, and designers behind SyncHUB.Studio.",
  canonical: "/team",
});
export default function TeamPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />
        <MarqueeSlider />
        <Teammembers />
        <About />
        <Blogs />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
