import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cardinal Quality Consulting | Product Validation & Platform Enablement",
  description: "20 years building product validation systems, platform enablement programs, and release frameworks at enterprise scale. Proven at Autodesk, Output, Fender, and Google.",
  keywords: "product operations, program management, platform enablement, user validation, beta programs, quality consulting, engineering leadership, agile transformation",
  authors: [{ name: "Cardinal Quality Consulting" }],
  openGraph: {
    title: "Cardinal Quality Consulting | Product Validation & Platform Enablement",
    description: "Building product validation, platform enablement, and release systems at enterprise scale. 20 years at Autodesk, Output, Fender, and Google.",
    url: "https://www.cardinalquality.com",
    siteName: "Cardinal Quality Consulting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardinal Quality Consulting | Product Validation & Platform Enablement",
    description: "Product validation and platform enablement at enterprise scale. 20 years at Autodesk, Output, Fender, Google.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Cardinal Quality Consulting",
              "description": "Quality systems and engineering leadership consulting",
              "url": "https://www.cardinalquality.com",
              "priceRange": "$$",
              "serviceType": "Quality Assurance Consulting",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
