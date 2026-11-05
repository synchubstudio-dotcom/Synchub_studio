"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";

export default function Devider() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
    el.style.setProperty("--spotlight-opacity", "1");
  }, []);

  const handlePointerEnter = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
    el.style.setProperty("--spotlight-opacity", "1");
  }, []);

  const handlePointerLeave = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--spotlight-opacity", "0");
  }, []);

  return (
    <div className="mxd-section padding-hero-01 padding-pre-manifest mobile-point-subtitle">
      <div className="mxd-container">
        <div
          ref={containerRef}
          className="mxd-divider spotlight-divider"
          onPointerMove={handlePointerMove}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          {/* Layer 1: Base Full-Color Preview (Visible when cursor is not hovering) */}
          <div className="spotlight-divider__layer spotlight-divider__layer--base-color" />

          {/* Layer 2: Black & White Overlay (Fades in on hover across entire image) */}
          <div className="spotlight-divider__layer spotlight-divider__layer--bw" />

          {/* Layer 3: Color Reveal Layer (Masked by Radial Spotlight around cursor) */}
          <div className="spotlight-divider__layer spotlight-divider__layer--color">
            {/* Center Lockup: Placed on the color layer so it only reveals when hovered over that part */}
            <div className="spotlight-divider__center-text">
              <Image
                src="/web/brand-logo-white.webp"
                alt="SyncHUB Icon"
                width={44}
                height={44}
                className="spotlight-divider__text-logo"
              />
              <div className="spotlight-divider__text-group">
                <span className="text-line">
                  Connecting <strong className="text-bold">IDEAS</strong>
                </span>
                <span className="text-line">
                  across the <strong className="text-bold">SPECTRUM.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
