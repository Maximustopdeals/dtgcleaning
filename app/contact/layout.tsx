import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Glazenwasser Nijkerk | D.T.G. Cleaning",
  description:
    "Neem contact op met D.T.G. Cleaning voor een vrijblijvende offerte. Wij zijn uw glazenwasser in Nijkerk en omgeving. Reactie binnen 24 uur.",
  openGraph: {
    title: "Contact | Glazenwasser Nijkerk | D.T.G. Cleaning",
    description:
      "Neem contact op met D.T.G. Cleaning voor een vrijblijvende offerte. Reactie binnen 24 uur.",
    url: "https://dtgcleaning.nl/contact",
    siteName: "D.T.G. Cleaning",
    locale: "nl_NL",
    type: "website",
  },
  alternates: {
    canonical: "https://dtgcleaning.nl/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
