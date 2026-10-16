import HomeMainPage from "./(homes)/home-main/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SyncHUB.Studio - Digital Agency ",
  description:
    "SyncHUB.Studio - Digital Agency is a leading digital agency that specializes in creating innovative and effective digital solutions for businesses of all sizes. Our team of experts is dedicated to helping our clients achieve their goals through cutting-edge technology and creative strategies.",
};

export default function Home() {
  return <HomeMainPage />;
}
