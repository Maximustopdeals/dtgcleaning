import type { Metadata } from "next";

export const metadata: Metadata = {
  /* ✅ AANGEPAST: alleen unieke titel — template voegt "| D.T.G. Cleaning" toe
     Totaal in browser: "Contact | Glazenwasser Nijkerk | D.T.G. Cleaning" (46 tekens) */
  title: "Contact | Glazenwasser Nijkerk",

  /* ✅ description blijft, is goed */
  description:
    "Neem contact op met D.T.G. Cleaning voor een vrijblijvende offerte. Wij zijn uw glazenwasser in Nijkerk en omgeving. Reactie binnen 24 uur.",

  /* ✅ NIEUW: robots configuratie */
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },

  /* ✅ AANGEPAST: canonical met trailing slash */
  alternates: {
    canonical: "https://dtgcleaning.nl/contact/",
  },

  openGraph: {
    title: "Contact | Glazenwasser Nijkerk | D.T.G. Cleaning",
    description:
      "Neem contact op met D.T.G. Cleaning voor een vrijblijvende offerte. Reactie binnen 24 uur.",
    url: "https://dtgcleaning.nl/contact/",
    siteName: "D.T.G. Cleaning",
    locale: "nl_NL",
    type: "website",
    /* ✅ NIEUW: OG image */
    images: [
      {
        url: "https://dtgcleaning.nl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact D.T.G. Cleaning - Glazenwasser Nijkerk",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
