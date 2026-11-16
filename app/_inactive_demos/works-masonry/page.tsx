import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";

import MarqueeSlider from "@/components/portfolios/MarqueeSlider";
import ParallaxDivider from "@/components/portfolios/ParallaxDivider";
import PortfolioMasonry from "@/components/portfolios/PortfolioMasonry";
import Testimonials from "@/components/common/Testimonials";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Works Masonry",
  description:
    "Explore our creative projects and portfolio showcased in a dynamic masonry layout by SyncHUB.Studio.",
  canonical: "/works-masonry",
});
export default function WorksMasonryPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <PortfolioMasonry />
        <ParallaxDivider /> <MarqueeSlider />
        <Testimonials />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
