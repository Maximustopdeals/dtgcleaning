import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D.T.G. Cleaning - Glazenwasser Nijkerk & Putten | Streeploos Schoon",
  description: "Glazenwasser in Nijkerk nodig? Professionele glasbewassing voor bedrijven en woningen. Streeploos schoon, vaste planning en minimale overlast. Bel 06-34683019.",
  keywords: "glazenwasser nijkerk, glazenwasser putten, ramen wassen nijkerk, glasbewassing, schoonmaakbedrijf nijkerk",
  verification: {
    google: "_5VljJ5qUTa9pPBmb4_0XYJROkyX7ijddcGqp535XJE",
  },
  icons: {
    icon: [
      { url: "/images/image.png", type: "image/png" },
    ],
    shortcut: "/images/image.png",
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
      <head>
        <link rel="icon" type="image/png" href="/images/image.png" />
        <link rel="shortcut icon" type="image/png" href="/images/image.png" />
        <link rel="apple-touch-icon" href="/images/image.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WVKPZTJ3');`,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-07JRRQ6PBH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-07JRRQ6PBH');`,
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVKPZTJ3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
