import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cardinal Quality Consulting | Quality Systems for Product Teams",
  description: "20 years building quality frameworks at world-class companies. Agile transformations, user validation programs, and release systems that achieved 94% reduction in bugs.",
  keywords: "quality consulting, QA consulting, engineering leadership, agile transformation, user validation, beta testing, release systems",
  authors: [{ name: "Cardinal Quality Consulting" }],
  openGraph: {
    title: "Cardinal Quality Consulting | Quality Systems for Product Teams",
    description: "Transform release chaos into predictable systems. 20 years of proven frameworks from Google, Fender, and Output.",
    url: "https://www.cardinalquality.com",
    siteName: "Cardinal Quality Consulting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardinal Quality Consulting | Quality Systems for Product Teams",
    description: "Transform release chaos into predictable systems. 20 years of proven frameworks.",
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
