import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import Careers from "@/components/other-pages/Careers";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Careers · Join the Team",
  description:
    "Explore career opportunities at SyncHUB Studio. We're actively hiring a Business Development Associate (BDA) to accelerate client partnerships and growth. Apply via hello@synchub.studio.",
  canonical: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <Careers />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}

