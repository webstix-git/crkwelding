import type { Metadata } from "next";
import "../index.css";
import SiteShell from "@/components/layout/SiteShell";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GoogleAnalyticsPageView from "@/components/analytics/GoogleAnalyticsPageView";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CRK Welding | Mobile Welding, Fair Play MO",
    template: "%s | CRK Welding",
  },
  description:
    "AWS certified mobile welding in Fair Play, MO. Structural steel, pipe welding, equipment repair, and custom fabrication.",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "CRK Welding",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <GoogleAnalyticsPageView />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
