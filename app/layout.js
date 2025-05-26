import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient.js";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { METADATA } from "@/constants/constants";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://niyava.com"),
  alternates: {
    canonical: "/",
  },
  title: { default: METADATA.title },
  description: METADATA.description,
  other: { city: "Noida", state: "Uttar Pradesh", country: "India" },
  referrer: METADATA.referrer,
  creator: METADATA.creator,
  openGraph: {
    title: METADATA.title,
    description: METADATA.description,
    url: METADATA.url,
    siteName: METADATA.siteName,
    images: [
      {
        url: "https://niyava.com/niyava-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
    creator: METADATA.creator,
    images: ["https://niyava.com/niyava-logo.png"], // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main>
          {children}
          <BootstrapClient />
        </main>
        <Footer />
      </body>
    </html>
  );
}
