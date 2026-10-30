"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedButton from "../animation/AnimatedButton";
import { usePathname } from "next/navigation";
import ThemeSwitcherButton from "./ColorSwitcher";

export default function Header1() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={`mxd-header ${isHidden ? "is-hidden" : ""}`}>
      {/* header logo */}
      <div className="mxd-header__logo loading__fade">
        <Link href="/" className="mxd-logo">
          {/* logo image */}
          <Image
            src="/web/navbar-logo-black.webp"
            alt="SyncHUB Studio"
            width={240}
            height={50}
            className="mxd-logo__image mxd-logo__image--light"
            priority
          />
          <Image
            src="/web/navbar-logo-white.webp"
            alt="SyncHUB Studio"
            width={240}
            height={50}
            className="mxd-logo__image mxd-logo__image--dark"
            priority
          />
        </Link>
      </div>
      {/* header controls */}
      <div className="mxd-header__controls loading__fade">
        <ThemeSwitcherButton />

        {pathname == "/preview" ? (
          <AnimatedButton
            text="Connect"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
            href="https://themeforest.net/user/ib-themes/portfolio"
            target="_blank"
          >
            <i className="ph-bold ph-arrow-right" />
          </AnimatedButton>
        ) : (
          <AnimatedButton
            text="Say Hello"
            className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right"
            href="/contact"
          >
            <i className="ph-bold ph-arrow-up-right" />
          </AnimatedButton>
        )}
      </div>
    </header>
  );
}
