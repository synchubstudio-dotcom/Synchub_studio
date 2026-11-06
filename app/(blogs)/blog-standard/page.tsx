import Blogs1 from "@/components/blogs/Blogs1";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Insights & Articles",
  description:
    "Thoughts, design methodologies, engineering practices, and digital culture from the SyncHUB.Studio team.",
  canonical: "/blog-standard",
});
export default function BlogStandardPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Blogs1 />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
