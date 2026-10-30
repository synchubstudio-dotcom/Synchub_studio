import "../public/css/styles.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "SyncHUB - Digital Agency & Personal Portfolio",
  description:
    "SyncHUB - Digital Agency & Personal Portfolio",
  icons: {
    icon: [
      {
        url: "/img/favicon/favicon-dark-32x32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/img/favicon/favicon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
    ],
    apple: [
      { url: "/img/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/img/favicon/manifest.webmanifest",
};
const setColorSchemeScript = `
(function() {
  try {
    var scheme = localStorage.getItem('color-scheme') || 'light';
    document.documentElement.setAttribute('color-scheme', scheme);

    function updateFavicon() {
      try {
        var isDark = false;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          isDark = true;
        }
        var targetHref = isDark
          ? '/img/favicon/favicon-dark-32x32.png'
          : '/img/favicon/favicon-light-32x32.png';

        var existingIcons = document.querySelectorAll('link[rel*="icon"]');
        existingIcons.forEach(function(el) {
          el.parentNode.removeChild(el);
        });

        var link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.sizes = '32x32';
        link.href = targetHref;
        document.head.appendChild(link);
      } catch(e) {}
    }

    updateFavicon();

    if (window.matchMedia) {
      var darkMatcher = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkMatcher.addEventListener) {
        darkMatcher.addEventListener('change', updateFavicon);
      } else if (darkMatcher.addListener) {
        darkMatcher.addListener(updateFavicon);
      }
    }
  } catch(e) {}
})();
`;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="no-touch">
      <head>
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: setColorSchemeScript }}
        />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
