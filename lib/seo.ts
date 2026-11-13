import type { Metadata } from "next";

export const siteConfig = {
  name: "SyncHUB.Studio",
  shortName: "SyncHUB",
  title: "SyncHUB.Studio - Digital Agency & Creative Engineering",
  description:
    "From ambitious ideas to enterprise-scale platforms, we create digital experiences that are fast, scalable, and built for long-term growth. Connecting ideas across the spectrum.",
  url: "https://synchub.studio",
  ogImage: "https://synchub.studio/web/hero-section03.webp",
  email: "hello@synchub.studio",
  keywords: [
    // Brand & Studio
    "SyncHUB",
    "SyncHUB.Studio",
    "Digital Agency",
    "Creative Digital Studio",
    "Full-Service Digital Agency",
    "Software Development Company",

    // Web & Engineering
    "Custom Web Development",
    "Next.js Development Agency",
    "React Web Development",
    "Full-Stack Web Development",
    "Enterprise Web Platforms",
    "SaaS Product Development",
    "Mobile App Development",
    "E-Commerce Web Solutions",
    "API Architecture & Integration",
    "Creative Engineering",

    // UI/UX & Digital Product Design
    "UI/UX Design Studio",
    "Digital Product Design",
    "Website Redesign",
    "Design System Engineering",
    "Interactive Web Experiences",
    "Motion & Interaction Design",
    "3D Web Design",

    // Branding & Identity
    "Brand Identity Design",
    "Brand Strategy",
    "Logo Design & Visual Systems",
    "Corporate Rebranding",

    // Growth & Optimization
    "Search Engine Optimization (SEO)",
    "Technical SEO",
    "High-Performance Web Design",
    "Digital Transformation",
    "Scalable Digital Architecture",
  ],
  authors: [{ name: "SyncHUB.Studio", url: "https://synchub.studio" }],
  creator: "SyncHUB.Studio",
  publisher: "SyncHUB.Studio",
  socials: {
    instagram: "https://www.instagram.com/synchub.studio/",
    linkedin: "https://www.linkedin.com/company/synchub-studio/",
  },
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  canonical,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const url = canonical
    ? `${siteConfig.url}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
    : siteConfig.url;

  return {
    title: fullTitle,
    description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@synchub_studio",
    },
    verification: {
      google: "xACF1xysfg5vMOPe5z3pMdphTuimv3feQo9_Z0_YDpE",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/web/brand-logo-white.webp`,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [siteConfig.socials.instagram, siteConfig.socials.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

