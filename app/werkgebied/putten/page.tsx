import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Check,
  MapPin,
  Mail,
  Sparkles,
  Building2,
  Sun,
  Droplets,
  Shield,
  Calendar,
  Users,
  ArrowRight,
  Trees,
} from "lucide-react";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Glazenwasser Putten",
  description:
    "Glazenwasser in Putten voor particulieren en bedrijven. Specialist in bosrijke gebieden en vrijstaande woningen. Streeploos resultaat, geen reiskosten. Vraag offerte aan.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://dtgcleaning.nl/werkgebied/putten/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://dtgcleaning.nl/werkgebied/putten/",
    siteName: "D.T.G. Cleaning",
    title: "Glazenwasser Putten | D.T.G. Cleaning",
    description:
      "Streeploos schone ramen voor particulieren en bedrijven in Putten.",
    images: [
      {
        url: "https://dtgcleaning.nl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glazenwasser Putten - D.T.G. Cleaning",
      },
    ],
  },
};

const GreenCheck = () => (
  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
    <Check className="w-3 h-3 text-white" />
  </div>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "D.T.G. Cleaning - Glazenwasser Putten",
  image: "https://dtgcleaning.nl/images/logo.png",
  telephone: "+31 6 34683019",
  email: "info@dtgcleaning.nl",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Putten",
    addressRegion: "Gelderland",
    addressCountry: "NL",
  },
  priceRange: "€€",
  openingHours: "Mo-Fr 07:00-18:00",
  areaServed: "Putten en omgeving",
  url: "https://dtgcleaning.nl/werkgebied/putten/",
};

export default function GlazenwasserPutten() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
            🌲 Specialist in bosrijke gebieden
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Glazenwasser Putten – voor heel de gemeente
          </h1>
          <p className="text-xl text-white/90 mb-4">
            Streeploos schone ramen voor{" "}
            <strong className="text-white">particulieren</strong> en{" "}
            <strong className="text-white">bedrijven</strong> in heel Putten
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Op zoek naar een{" "}
            <strong className="text-white">
              betrouwbare glazenwasser in Putten
            </strong>
            ? D.T.G. Cleaning is al jaren actief in de gemeente – van de
            dorpskern tot de bosrijke buitengebieden. Geen reiskosten, wel een
            stralend resultaat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              href="/contact/"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-4 font-semibold transition-all flex items-center justify-center shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" /> Vrijblijvende offerte
            </Link>
            <a
              href="tel:0634683019"
              className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" /> 06-34683019
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                WAAROM PUTTEN VOOR ONS KIEZEN
              </span>
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                Uw vaste glazenwasser in Putten
              </h2>
              <p className="text-gray-600 mb-4">
                Woon of werkt u in het mooie <strong>Putten</strong> en bent u
                op zoek naar een <strong>betrouwbare glazenwasser</strong>?
                D.T.G. Cleaning is al jaren actief in deze bosrijke gemeente en
                staat bekend om kwaliteit, stiptheid en een persoonlijke
                aanpak.
              </p>
              <p className="text-gray-600 mb-6">
                Wat ons onderscheidt? Een{" "}
                <strong>vaste glazenwasser</strong> die u kent. Geen wisselende
                gezichten, geen gedoe. En met onze{" "}
                <strong>osmosewater-techniek</strong> krijgt u gegarandeerd een
                streeploos resultaat zonder chemicaliën.{" "}
                <strong>Perfect voor de groene omgeving van Putten.</strong>
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#1a3a52]">8 km</div>
                  <div className="text-sm text-gray-600">Geen reiskosten</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#1a3a52]">✓</div>
                  <div className="text-sm text-gray-600">
                    Vaste glazenwasser
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4">
                <p className="text-gray-700 text-sm">
                  <strong>🌲 Goed om te weten:</strong> Geen reiskosten binnen
                  de gemeente Putten. Wij komen ook graag bij u langs in de
                  buitengebieden.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1a3a52] mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Actief in heel Putten
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Wij zijn actief in de hele gemeente Putten – van de dorpskern
                  tot de bosrijke buitengebieden en alle tussenliggende buurten.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">Particuliere woningen</span>
                  </li>
                  <li className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">Vrijstaande en landelijke panden</span>
                  </li>
                  <li className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">Bedrijven en VvE&apos;s</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border border-green-200 flex items-center gap-3">
                <Trees className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-green-800">
                    Specialist in bosrijke gebieden
                  </p>
                  <p className="text-xs text-green-700">
                    Ervaring met landelijke panden en vrijstaande woningen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h
