import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Faqs from "@/components/other-pages/Faqs";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about SyncHUB.Studio services, engineering workflow, pricing, timelines, and deliverables.",
  canonical: "/faq",
});
export default function FaqsPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Faqs />
        <Blogs />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
