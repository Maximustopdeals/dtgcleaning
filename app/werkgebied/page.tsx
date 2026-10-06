import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Check,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Shield,
  Calendar,
  Leaf,
  Clock,
} from "lucide-react";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Werkgebied | Glazenwasser Nijkerk e.o.",
  description:
    "Glazenwasser in Nijkerk, Putten, Harderwijk, Barneveld, Ermelo en Voorthuizen. Vaste routes, streeploos resultaat, volledig verzekerd. Vraag een offerte aan.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://dtgcleaning.nl/werkgebied/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://dtgcleaning.nl/werkgebied/",
    siteName: "D.T.G. Cleaning",
    title: "Werkgebied | Glazenwasser Nijkerk en omgeving",
    description:
      "Glazenwasser in Nijkerk, Putten, Harderwijk, Barneveld, Ermelo en Voorthuizen.",
    images: [
      {
        url: "https://dtgcleaning.nl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Werkgebied D.T.G. Cleaning - Glazenwasser Nijkerk en omgeving",
      },
    ],
  },
};

const GreenCheck = () => (
  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
    <Check className="w-3 h-3 text-white" />
  </div>
);

const steden = [
  {
    name: "Nijkerk",
    slug: "nijkerk",
    distance: "0 km",
    description:
      "Uw glazenwasser in Nijkerk. Al jaren actief voor woningen, appartementen, VvE's en bedrijven.",
    image: "/images/nijkerk.jpg",
    highlights: ["Vaste planning", "Snelle reactie", "Streeploos resultaat"],
  },
  {
    name: "Putten",
    slug: "putten",
    distance: "8 km",
    description:
      "Actief in heel Putten met vaste routes voor particulieren en bedrijven.",
    image: "/images/putten.jpg",
    highlights: ["Wekelijkse routes", "Ook bedrijfspanden", "Vaste glazenwasser"],
  },
  {
    name: "Harderwijk",
    slug: "harderwijk",
    distance: "15 km",
    description:
      "Professionele glasbewassing in Harderwijk voor woningen, bedrijven en VvE's.",
    image: "/images/harderwijk.jpg",
    highlights: ["Geen wachttijd", "Ook op hoogte", "Milieuvriendelijk"],
  },
  {
    name: "Barneveld",
    slug: "barneveld",
    distance: "12 km",
    description:
      "Regelmatig werkzaam in Barneveld met vaste routes en snelle service.",
    image: "/images/barneveld.jpg",
    highlights: ["Flexibele planning", "Ook bedrijven", "Vaste prijzen"],
  },
  {
    name: "Ermelo",
    slug: "ermelo",
    distance: "10 km",
    description:
      "Glazenwasser in Ermelo voor particuliere woningen, bedrijven en VvE's.",
    image: "/images/ermelo.jpg",
    highlights: ["Vaste klantenkring", "Ook VvE's", "Streeploos glas"],
  },
  {
    name: "Voorthuizen",
    slug: "voorthuizen",
    distance: "9 km",
    description:
      "Actief in Voorthuizen en omgeving met persoonlijke service en vaste afspraken.",
    image: "/images/voorthuizen.jpg",
    highlights: ["Persoonlijke service", "Betaalbaar", "Geen gedoe"],
  },
];

export default function WerkgebiedPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Glazenwasser in Nijkerk en omgeving, ook bij u in de buurt
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            D.T.G. Cleaning is dé glazenwasser in{" "}
            <strong>
              Nijkerk, Putten, Harderwijk, Barneveld, Ermelo en Voorthuizen
            </strong>
            . Professionele glasbewassing, gevelreiniging en zonnepanelen
            reiniging. Altijd in uw regio.
          </p>
        </div>
      </section>

      {/* Introductie */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="prose prose-lg text-gray-600 mx-auto">
            <p className="lead">
              <strong>D.T.G. Cleaning</strong> is al jarenlang uw betrouwbare
              glazenwasser in <strong>Nijkerk</strong> en de omliggende
              plaatsen. Of u nu in{" "}
              <strong>
                Putten, Harderwijk, Barneveld, Ermelo of Voorthuizen
              </strong>{" "}
              woont – wij zorgen voor <strong>streeploos schone ramen</strong>{" "}
              zonder gedoe.
            </p>
            <p>
              Wat ons onderscheidt? Een <strong>vaste glazenwasser</strong> die
              u kent en die weet wat hij doet. Geen wisselende gezichten, geen
              gedoe. Wij gebruiken <strong>osmosewater</strong> een
              milieuvriendelijke techniek die zorgt voor{" "}
              <strong>geen strepen, geen vlekken en geen chemicaliën</strong>.
              En dankzij onze telewash-systemen bereiken we ook moeiteloos de
              hoogste ramen.
            </p>
            <p className="font-semibold text-[#1a3a52]">
              👉 Klik op uw woonplaats hieronder voor meer informatie over de
              diensten in uw regio.
            </p>
          </div>
        </div>
      </section>

      {/* Grid van steden */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
              Glazenwasser bij u in de buurt
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Actief in 6 plaatsen in Gelderland. Klik op uw woonplaats voor
              meer informatie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steden.map((stad) => (
              <Link
                key={stad.slug}
                href={`/werkgebied/${stad.slug}/`}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all group border border-gray-100 hover:border-[#1a3a52]/20"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center mb-1">
                      <MapPin className="w-5 h-5 text-[#1a3a52] mr-2 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-[#1a3a52]">
                        {stad.name}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">
                      {stad.distance} vanaf Nijkerk
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      {stad.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stad.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center bg-[#1a3a52]/5 text-[#1a3a52] text-xs px-2 py-1 rounded-full"
                        >
                          <Check className="w-3 h-3 mr-1" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[#1a3a52] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom D.T.G. Cleaning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
              WAAROM D.T.G. CLEANING
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
              Waarom klanten in de regio voor ons kiezen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vier redenen waarom inwoners en bedrijven in Nijkerk en omgeving
              al jaren voor ons kiezen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Vaste glazenwasser</h3>
              <p className="text-gray-600 text-sm">
                Altijd hetzelfde gezicht, altijd dezelfde kwaliteit. Geen
                wisselende planners, wel vertrouwen.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Streeploos resultaat</h3>
              <p className="text-gray-600 text-sm">
                Osmosewater-techniek voor glas dat er dagenlang perfect uitziet
                – zonder strepen of vlekken.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Veilig & verzekerd</h3>
              <p className="text-gray-600 text-sm">
                Volledig aansprakelijkheidsverzekerd. Uw pand is in veilige
                handen zonder zorgen.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Milieuvriendelijk</h3>
              <p className="text-gray-600 text-sm">
                Geen agressieve chemicaliën alleen osmosewater. Veilig voor u,
                uw gezin en het milieu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bekijk ook - extra service indicatie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Clock className="w-12 h-12 text-[#1a3a52] opacity-30" />
          </div>
          <h3 className="text-2xl font-bold text-[#1a3a52] mb-3">
            Geen wachttijd, ook voor spoed
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Of u nu een eenmalige afspraak wilt of een vast contract. Wij
            plannen snel en flexibel. Ook voor spoed kunt u ons altijd bellen.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="pt-8 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#1a3a52] rounded-2xl p-6 md:p-8 text-center shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ook glazenwasser bij u in de buurt?
            </h2>
            <p className="text-white/80 text-sm mb-5">
              Vraag vrijblijvend een offerte aan. Wij komen graag langs voor
              een kennismaking.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/contact/"
                className="bg-white text-[#1a3a52] rounded-full px-6 py-3 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center text-sm"
              >
                <Mail className="w-4 h-4 mr-2" /> Vrijblijvend offerte aanvragen
              </Link>
              <a
                href="tel:0634683019"
                className="border-2 border-white text-white rounded-full px-6 py-3 font-semibold hover:bg-white/10 transition-colors flex items-center justify-center text-sm"
              >
                <Phone className="w-4 h-4 mr-2" /> 06-34683019
              </a>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-white/70">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-green-400" /> Vrijblijvend
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-green-400" /> Geen
                verplichtingen
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-green-400" /> Snelle reactie
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer, WhatsApp, BackToTop */}
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
