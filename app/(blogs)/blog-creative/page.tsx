import Blogs2 from "@/components/blogs/Blogs2";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Creative Perspectives",
  description:
    "Creative direction, digital art, interactive technology, and forward-looking concepts curated by SyncHUB.Studio.",
  canonical: "/blog-creative",
});
export default function BlogCreativePage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Blogs2 />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
