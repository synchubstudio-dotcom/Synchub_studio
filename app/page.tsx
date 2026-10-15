import HomeMainPage from "./(homes)/home-main/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Main || SyncHUB - Digital Agency & Personal Portfolio React Nextjs Template",
  description:
    "SyncHUB - Digital Agency & Personal Portfolio React Nextjs Template",
};

export default function Home() {
  return <HomeMainPage />;
}
