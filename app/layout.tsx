import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rustamsheoran.com"),
  title: {
    default: "Rustam Sheoran | Backend & Systems Engineer",
    template: "%s | Rustam Sheoran",
  },
  description: "Backend Developer specializing in distributed systems, infrastructure, and low-level architecture. Open-source contributor to cloud-native projects.",
  openGraph: {
    title: "Rustam Sheoran | Backend & Systems Engineer",
    description:
      "Specializing in distributed systems, infrastructure, and low-level architecture. Explorer of Linux internals and protocol engineering.",
    url: "https://yourdomain.com",
    siteName: "Rustam Sheoran",
    images: [
      {
        url: "https://yourdomain.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Rustam Sheoran",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className="bg-black"
      >
        {children}
      </body>
    </html>
  );
}
