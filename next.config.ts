import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/home-main",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home-creative-design-studio",
        destination: "/",
        permanent: false,
      },
      {
        source: "/home-creative-developer",
        destination: "/",
        permanent: false,
      },
      {
        source: "/home-designer",
        destination: "/",
        permanent: false,
      },
      {
        source: "/home-digital-agency",
        destination: "/",
        permanent: false,
      },
      {
        source: "/home-freelancer-portfolio",
        destination: "/",
        permanent: false,
      },
      {
        source: "/home-personal-portfolio",
        destination: "/",
        permanent: false,
      },
      {
        source: "/home-software-development-company",
        destination: "/",
        permanent: false,
      },
      {
        source: "/home-web-agency",
        destination: "/",
        permanent: false,
      },
      {
        source: "/home-2",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
