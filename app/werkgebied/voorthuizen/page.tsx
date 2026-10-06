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
  Tent,
  Caravan,
} from "lucide-react";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Glazenwasser Voorthuizen",
  description:
    "Glazenwasser in Voorthuizen voor particulieren, bedrijven en recreatieparken. Specialist in campings en vakantieparken. Streeploos, geen reiskosten. Vraag offerte aan.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://dtgcleaning.nl/werkgebied/voorthuizen/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://dtgcleaning.nl/werkgebied/voorthuizen/",
    siteName: "D.T.G. Cleaning",
    title: "Glazenwasser Voorthuizen | D.T.G. Cleaning",
    description:
      "Streeploos schone ramen voor particulieren, bedrijven en recreatieparken in Voorthuizen.",
    images: [
      {
        url: "https://dtgcleaning.nl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glazenwasser Voorthuizen - D.T.G. Cleaning",
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
  name: "D.T.G. Cleaning - Glazenwasser Voorthuizen",
  image: "https://dtgcleaning.nl/images/logo.png",
  telephone: "+31 6 34683019",
  email: "info@dtgcleaning.nl",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Voorthuizen",
    addressRegion: "Gelderland",
    addressCountry: "NL",
  },
  priceRange: "€€",
  openingHours: "Mo-Fr 07:00-18:00",
  areaServed: "Voorthuizen en omgeving",
  url: "https://dtgcleaning.nl/werkgebied/voorthuizen",
};

export default function GlazenwasserVoorthuizen() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
            🏕️ Specialist in recreatieparken &amp; campings
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Glazenwasser Voorthuizen – ook voor campings en parken
          </h1>
          <p className="text-xl text-white/90 mb-4">
            Streeploos schone ramen voor{" "}
            <strong className="text-white">particulieren</strong>,{" "}
            <strong className="text-white">bedrijven</strong> en{" "}
            <strong className="text-white">recreatieparken</strong> in
            Voorthuizen
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Op zoek naar een{" "}
            <strong className="text-white">
              betrouwbare glazenwasser in Voorthuizen
            </strong>
            ? D.T.G. Cleaning is dé specialist voor de recreatiesector – van{" "}
            <strong className="text-white">campings</strong> en{" "}
            <strong className="text-white">vakantieparken</strong> tot{" "}
            <strong className="text-white">woningen</strong> en{" "}
            <strong className="text-white">bedrijven</strong>. Geen reiskosten,
            wel minimale overlast voor uw gasten.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link
              href="/contact"
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
                WAAROM VOORTHUIZEN VOOR ONS KIEZEN
              </span>
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                Uw vaste glazenwasser in Voorthuizen
              </h2>
              <p className="text-gray-600 mb-4">
                Woon of werkt u in het bruisende <strong>Voorthuizen</strong> en
                bent u op zoek naar een{" "}
                <strong>betrouwbare glazenwasser</strong>? D.T.G. Cleaning is
                actief in deze recreatieve kern en staat bekend om kwaliteit,
                stiptheid en een persoonlijke aanpak.
              </p>
              <p className="text-gray-600 mb-6">
                Wat ons onderscheidt? Wij zijn{" "}
                <strong>
                  specialist in recreatieparken en campings
                </strong>
                . Wij begrijpen de specifieke behoeften van deze sector:{" "}
                <strong>minimale overlast voor gasten</strong>,{" "}
                <strong>flexibele planning</strong> in het laagseizoen, en een{" "}
                <strong>representatieve uitstraling</strong> voor uw park. En
                met onze <strong>osmosewater-techniek</strong> krijgt u
                gegarandeerd een streeploos resultaat – zonder chemicaliën.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#1a3a52]">9 km</div>
                  <div className="text-sm text-gray-600">Geen reiskosten</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#1a3a52]">🏕️</div>
                  <div className="text-sm text-gray-600">
                    Recreatie specialist
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-4">
                <p className="text-gray-700 text-sm">
                  <strong>🏕️ Goed om te weten:</strong> Geen reiskosten binnen
                  Voorthuizen. Speciale tarieven voor recreatieparken en
                  campings.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#1a3a52] mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Actief in heel Voorthuizen
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">Centrum</span>
                  </div>
                  <div className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">Gerverscop</span>
                  </div>
                  <div className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">Zeumeren</span>
                  </div>
                  <div className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">De Beek</span>
                  </div>
                  <div className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">&apos;t Kranenveld</span>
                  </div>
                  <div className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">Bijsteren</span>
                  </div>
                  <div className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">Appelaar</span>
                  </div>
                  <div className="flex items-center">
                    <GreenCheck />
                    <span className="ml-2">Maatlanden</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a3a52]/5 rounded-2xl p-6 border border-[#1a3a52]/10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#1a3a52] rounded-full flex items-center justify-center flex-shrink-0">
                    <Tent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a3a52]">
                      Specialist in recreatieparken
                    </p>
                    <p className="text-sm text-gray-600">
                      Ervaring met campings, vakantieparken en
                      recreatiebedrijven. Flexibele planning met minimale
                      overlast voor gasten.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 flex items-center gap-3">
                <Caravan className="w-8 h-8 text-orange-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-orange-800">
                    Ook voor bungalows en recreatiewoningen
                  </p>
                  <p className="text-xs text-orange-700">
                    Alle typen recreatiepanden – groot of klein
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
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
              Onze diensten in Voorthuizen – voor elk pand
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Of u nu een woning, bedrijfspand, camping of recreatiepark heeft –
              wij bieden de oplossing. Hieronder een overzicht.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Glasbewassing",
                desc: "Streeploos met osmosewater, ook op hoogte",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Building2,
                title: "Gevelreiniging",
                desc: "Algen en mos verwijderd – recreatie specialist",
                color: "from-gray-700 to-gray-800",
              },
              {
                icon: Sun,
                title: "Zonnepanelen",
                desc: "Optimaal rendement door schone panelen",
                color: "from-yellow-500 to-yellow-600",
              },
              {
                icon: Droplets,
                title: "Dakgoten",
                desc: "Voorkom waterschade – bladval specialisten",
                color: "from-cyan-500 to-cyan-600",
              },
            ].map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${d.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <d.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{d.title}</h3>
                <p className="text-gray-600 text-sm">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/schoonmaakdiensten"
              className="inline-flex items-center text-[#1a3a52] font-semibold hover:underline"
            >
              Bekijk alle diensten <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
              Waarom een vaste glazenwasser in Voorthuizen?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Een vaste glazenwasser betekent vertrouwen, kwaliteit en gemak.
              Dit zijn de voordelen voor inwoners en recreatiebedrijven in
              Voorthuizen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "Vaste planning",
                desc: "U weet precies wanneer wij komen – wekelijks langs in Voorthuizen.",
              },
              {
                icon: Users,
                title: "Vast gezicht",
                desc: "Altijd dezelfde glazenwasser die uw pand kent.",
              },
              {
                icon: Shield,
                title: "Verzekerd & veilig",
                desc: "Volledig aansprakelijkheidsverzekerd voor uw gemoedsrust.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="inline-block bg-green-50 border border-green-200 rounded-full px-6 py-3">
              <span className="text-green-700 font-semibold">
                💚 Bespaar tot 20% met een vast contract
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-3 py-1 text-sm font-semibold mb-4">
                  🏕️ Perfect voor recreatieparken
                </span>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
                  Telescoopbewassing – ook uw hoge ramen zonder steiger
                </h3>
                <p className="text-gray-600 mb-4">
                  In Voorthuizen hebben veel panden hoge ramen –
                  receptiegebouwen, bungalows, en recreatiegebouwen. Normaal
                  gesproken hebt u dan een dure steiger of hoogwerker nodig. Met
                  onze <strong>telescoopbewassing</strong> kunnen wij tot{" "}
                  <strong>13,5 meter hoogte</strong> werken – zonder extra
                  kosten.
                </p>
                <p className="text-gray-600">
                  Dat bespaart u honderden euro&apos;s per reiniging. En met
                  osmosewater krijgt u gegarandeerd een{" "}
                  <strong>streeploos resultaat</strong> – veilig voor uw gasten
                  en de recreatieve omgeving.
                </p>
              </div>
              <div className="flex-1 text-center bg-[#1a3a52] rounded-2xl p-8 text-white">
                <span className="text-5xl font-bold">13,5 m</span>
                <p className="text-white/80 mt-2">Reikhoogte zonder steiger</p>
                <div className="mt-4 border-t border-white/20 pt-4">
                  <span className="text-2xl font-bold text-green-300">€0</span>
                  <p className="text-white/70 text-sm">
                    extra kosten voor hoogte
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-green-300" /> Geen steiger
                  <Check className="w-4 h-4 text-green-300 ml-2" /> Geen
                  hoogwerker
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 text-center border border-yellow-200">
            <div className="inline-block bg-yellow-100 rounded-full px-4 py-2 text-sm font-semibold text-yellow-700 mb-4">
              🏕️ Recreatie Specialisten
            </div>
            <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
              Uw partner voor recreatieparken in Voorthuizen
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              Voorthuizen staat bekend om haar vele recreatiebedrijven. Wij
              begrijpen de specifieke behoeften van deze sector:{" "}
              <strong>minimale overlast</strong> voor gasten,
              <strong> flexibele planning</strong> in het laagseizoen, en een
              <strong> representatieve uitstraling</strong> voor uw park.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Of het nu gaat om de receptie, sanitairgebouwen, bungalows, of
              gemeenschappelijke ruimtes – wij zorgen voor een schone en
              uitnodigende omgeving voor uw gasten.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm">
                <Check className="w-4 h-4 text-green-500 mr-2" /> Minimale
                overlast
              </span>
              <span className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm">
                <Check className="w-4 h-4 text-green-500 mr-2" /> Laagseizoen
                planning
              </span>
              <span className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm">
                <Check className="w-4 h-4 text-green-500 mr-2" />{" "}
                Representatieve uitstraling
              </span>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <section className="pt-8 pb-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#1a3a52] rounded-2xl p-6 md:p-8 text-center shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Glazenwasser in Voorthuizen nodig?
            </h2>
            <p className="text-white/80 text-sm mb-5">
              Vraag vrijblijvend een offerte aan – wij komen graag langs.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/contact"
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
                <Check className="w-3 h-3 text-green-400" /> Geen reiskosten
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-green-400" /> Recreatie specialist
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-green-400" /> Minimale overlast
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
