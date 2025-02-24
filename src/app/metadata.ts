import type { Metadata } from "next";

const defaultMetadata: Metadata = {
  metadataBase: new URL("https://moyiscan.com"),
  title: {
    default: "MoyiScan - Fast & Secure Mobile Payments",
    template: "%s | MoyiScan",
  },
  description:
    "MoyiScan - Your all-in-one solution for mobile payments, airtime top-up, data bundles, and bank transfers in Nigeria.",
  keywords: [
    "MoyiScan",
    "mobile payments",
    "Nigeria VTU",
    "airtime top-up",
    "data bundles",
    "bank transfers",
    "scan to pay",
    "mobile wallet",
  ],
  authors: [{ name: "FinTech" }],
  creator: "FinTech",
  publisher: "FinTech",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "FinTech",
    title: "FinTech - Revolutionary Financial Technology",
    description:
      "Experience the future of financial technology with FinTech. Secure, fast, and innovative financial solutions for everyone.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinTech - Revolutionary Financial Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech - Revolutionary Financial Technology",
    description:
      "Experience the future of financial technology with FinTech. Secure, fast, and innovative financial solutions for everyone.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
};

export default defaultMetadata;
