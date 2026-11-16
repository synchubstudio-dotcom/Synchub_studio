import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2";
import TermsConditions from "@/components/other-pages/TermsConditions";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Terms & Conditions",
  description:
    "Review SyncHUB Studio's Terms & Conditions governing website access, digital service engagements, intellectual property, and user responsibilities.",
  canonical: "/terms-conditions",
});

export default function TermsConditionsPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <TermsConditions />
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}

