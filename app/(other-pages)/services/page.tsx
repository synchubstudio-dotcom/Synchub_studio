import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Hero from "@/components/other-pages/services/Hero";
import ParallaxDivider from "@/components/other-pages/services/ParallaxDivider";
import Services from "@/components/other-pages/services/Services";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Services",
  description:
    "Explore SyncHUB.Studio services: web and mobile development, UI/UX design, branding, enterprise platforms, and digital growth strategies.",
  canonical: "/services",
});
export default function ServicesPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Hero />
        <Services />
        <ParallaxDivider />
        <Blogs />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
