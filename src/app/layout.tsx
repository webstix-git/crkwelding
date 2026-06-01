import type { Metadata } from "next";
import "../index.css";
import SiteShell from "@/components/layout/SiteShell";

const siteUrl = "https://crkwelding.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CRK Welding | Mobile Welding, Fair Play MO",
    template: "%s | CRK Welding",
  },
  description:
    "AWS certified mobile welding in Fair Play, MO. Structural steel, pipe welding, equipment repair, and custom fabrication.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
