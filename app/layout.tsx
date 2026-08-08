import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "D.T.G. Cleaning - Glazenwasser Nijkerk & Putten | Streeploos Schoon",
  description: "Glazenwasser in Nijkerk nodig? Professionele glasbewassing voor bedrijven en woningen. Streeploos schoon, vaste planning en minimale overlast. Bel 06-34683019.",
  keywords: "glazenwasser nijkerk, glazenwasser putten, ramen wassen nijkerk, glasbewassing, schoonmaakbedrijf nijkerk",
  metadataBase: new URL("https://dtgcleaning.nl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "D.T.G. Cleaning - Glazenwasser Nijkerk & Putten",
    description: "Professionele glasbewassing voor bedrijven en woningen. Streeploos schoon, vaste planning en minimale overlast.",
    url: "https://dtgcleaning.nl",
    siteName: "D.T.G. Cleaning",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "D.T.G. Cleaning - Glazenwasser Nijkerk",
      },
    ],
    locale: "nl_NL",
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
  verification: {
    google: "_5VljJ5qUTa9pPBmb4_0XYJROkyX7ijddcGqp535XJE",
  },
  icons: {
    icon: "/images/image.png",
    apple: "/images/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL">
      <body className="antialiased pt-20">
        {/* Navigatie */}
        <Navigation />

        {/* Hoofdcontent */}
        <main>{children}</main>

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WVKPZTJ3');`,
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-07JRRQ6PBH"
          strategy="afterInteractive"
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-07JRRQ6PBH');`,
          }}
        />

        {/* noscript fallback voor GTM */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVKPZTJ3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
