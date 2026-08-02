import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { contactInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://katrina-inajenes.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Katrina Paula Inajenes | Accounts Receivable & Reconciliation Specialist",
    template: "%s | Katrina Paula Inajenes",
  },
  description:
    "Accounts Receivable, Billing & Collections, and Reconciliation specialist with 6+ years managing enterprise-scale financial operations, including Accenture's Microsoft account. Based in the Philippines.",
  keywords: [
    "Accounts Receivable Specialist",
    "Billing and Collections",
    "Bank Reconciliation",
    "Cash Application",
    "Financial Operations",
    "Invoice Processing",
    "Dispute Resolution",
    "Oracle",
    "SAP ERP",
    "Microsoft Dynamics 365",
    "Advanced Excel",
    "Katrina Paula Inajenes",
  ],
  authors: [{ name: "Katrina Paula Inajenes" }],
  creator: "Katrina Paula Inajenes",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Katrina Paula Inajenes | Accounts Receivable & Reconciliation Specialist",
    description:
      "6+ years of accuracy-driven Accounts Receivable, Billing, Collections, and Reconciliation experience across enterprise finance operations.",
    siteName: "Katrina Paula Inajenes — Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Katrina Paula Inajenes" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katrina Paula Inajenes | Accounts Receivable & Reconciliation Specialist",
    description:
      "6+ years of accuracy-driven Accounts Receivable, Billing, Collections, and Reconciliation experience.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: contactInfo.name,
  jobTitle: "Accounts Receivable & Reconciliation Specialist",
  url: siteUrl,
  email: `mailto:${contactInfo.email}`,
  telephone: contactInfo.phone,
  address: { "@type": "PostalAddress", addressCountry: "PH" },
  sameAs: [contactInfo.linkedin],
  knowsAbout: [
    "Accounts Receivable",
    "Billing & Collections",
    "Bank Reconciliation",
    "Cash Application",
    "Financial Reporting",
    "Oracle",
    "SAP ERP",
    "Microsoft Dynamics 365",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
