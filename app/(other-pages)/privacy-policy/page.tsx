import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import PrivacyPolicy from "@/components/other-pages/PrivacyPolicy";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description:
    "Learn about how SyncHUB.Studio collects, protects, and manages your personal data. Transparent privacy practices for our digital agency and clients.",
  canonical: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <PrivacyPolicy />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}

