import BlogDetails from "@/components/blogs/BlogDetails";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Article Details",
  description:
    "Explore our deep dive into modern digital craftsmanship, scalable architecture, and impactful UI design principles.",
  canonical: "/blog-article",
});
export default function BlogSinglePage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <BlogDetails />
        <Blogs desc="" title="More on topic" />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
