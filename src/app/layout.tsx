import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrimeCore — The Operating System for Modern Business",
  description:
    "PrimeCore is an enterprise-grade All-In-One Operating System for modern African businesses. Unify HR, Payroll, Procurement, Performance, Analytics and more in one powerful platform.",
  keywords: [
    "enterprise software",
    "business operating system",
    "HR management",
    "payroll software",
    "procurement",
    "ERP",
    "African enterprise",
    "business suite",
  ],
  openGraph: {
    title: "PrimeCore — The Operating System for Modern Business",
    description:
      "Unify your entire business operations — HR, Payroll, Procurement, Performance, Analytics — in one powerful enterprise platform built for modern African businesses.",
    url: "https://primecore.io",
    siteName: "PrimeCore",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrimeCore Enterprise Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeCore — The Operating System for Modern Business",
    description:
      "Unify your entire business operations in one powerful enterprise platform.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PrimeCore",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Enterprise-grade All-In-One Operating System for modern African businesses. Unify HR, Payroll, Procurement, Performance Management, and Analytics.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free 14-day trial",
  },
  publisher: {
    "@type": "Organization",
    name: "PrimeCore Technologies",
    url: "https://primecore.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
