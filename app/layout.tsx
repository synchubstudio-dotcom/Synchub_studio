import "../public/css/styles.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "SyncHUB - Digital Agency & Personal Portfolio",
  description:
    "SyncHUB - Digital Agency & Personal Portfolio",
};
const setColorSchemeScript = `
(function() {
  try {
    var scheme = localStorage.getItem('color-scheme') || 'light';
    document.documentElement.setAttribute('color-scheme', scheme);
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
        <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
