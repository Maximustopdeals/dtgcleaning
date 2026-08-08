"use client";

import Link from "next/link";
import { 
  Phone, Check, MapPin, Clock, Mail, Sparkles, Building2, Sun, Droplets, 
  Shield, Calendar, Users, Home, ArrowRight, Factory, Tractor, ChevronDown
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { useState } from "react";

// Groen vinkje
const GreenCheck = () => (
  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
    <Check className="w-3 h-3 text-white" />
  </div>
);

export default function GlazenwasserBarneveld() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenFAQ(openFAQ === index ? null : index);

  // JSON-LD voor lokale SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "D.T.G. Cleaning - Glazenwasser Barneveld",
    "image": "https://dtgcleaning.nl/images/logo.png",
    "telephone": "+31 6 34683019",
    "email": "info@dtgcleaning.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barneveld",
      "addressRegion": "Gelderland",
      "addressCountry": "NL"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 07:00-18:00",
    "areaServed": "Barneveld en omgeving",
    "url": "https://dtgcleaning.nl/werkgebied/barneveld"
  };

  // ✅ NIEUWE FAQ - Specifiek voor Barneveld
  const faqs = [
    {
      question: "Komt u ook naar de industrieterreinen Harselaar en Veller?",
      answer: "Absoluut! Dit zijn belangrijke gebieden voor ons. Wij hebben veel ervaring met het reinigen van grote bedrijfspanden, showrooms en kantoren op beide terreinen."
    },
    {
      question: "Wat kost glasbewassing voor een bedrijfspand in Barneveld?",
      answer: "De kosten zijn afhankelijk van het aantal ramen, de hoogte en de frequentie. Wij bieden speciale tarieven voor bedrijven en geven vrijblijvend offerte op maat."
    },
    {
      question: "Werkt u ook voor agrarische bedrijven in Barneveld?",
      answer: "Jazeker! De agrarische sector is belangrijk in Barneveld. Wij reinigen schuren, loodsen, stallen en ook de woningen van agrarische ondernemers."
    },
    {
      question: "Komt u ook in de buitengebieden en dorpen?",
      answer: "Ja, wij zijn actief in heel de gemeente Barneveld, inclusief Kootwijkerbroek, Stroe, Zwartebroek, Terschuur, Voorthuizen (deels) en Achterveld."
    },
    {
      question: "Gebruikt u chemicaliën voor glasbewassing?",
      answer: "Nee, wij werken uitsluitend met osmosewater – 100% gedemineraliseerd water zonder chemicaliën. Dit is veilig voor uw planten, uw gezin en het milieu. Perfect voor de groene gemeente Barneveld."
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main>
        
        {/* Hero - Lokale focus voor Barneveld */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
              🏭 Specialist in bedrijfspanden & agrarisch
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Glazenwasser Barneveld – voor bedrijven en particulieren
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Streeploos schone ramen voor <strong className="text-white">particulieren</strong>, <strong className="text-white">bedrijven</strong> en <strong className="text-white">agrarische ondernemers</strong> in Barneveld
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Op zoek naar een <strong className="text-white">betrouwbare glazenwasser in Barneveld</strong>? 
              D.T.G. Cleaning is actief in heel de gemeente – van de <strong className="text-white">historische binnenstad</strong> 
              tot de <strong className="text-white">industrieterreinen Harselaar en Veller</strong> en de 
              <strong className="text-white"> agrarische buitengebieden</strong>. 
              Geen reiskosten, wel een stralend resultaat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-4 font-semibold transition-all flex items-center justify-center shadow-lg">
                <Mail className="w-5 h-5 mr-2" /> Vrijblijvende offerte
              </Link>
              <a href="tel:0634683019" className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> 06-34683019
              </a>
            </div>
          </div>
        </section>

        {/* Waarom Barneveld - Social proof met lokale focus */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                  WAAROM BARNEVELD VOOR ONS KIEZEN
                </span>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Uw vaste glazenwasser in Barneveld
                </h2>
                <p className="text-gray-600 mb-4">
                  Woon of werkt u in <strong>Barneveld</strong> en bent u op zoek naar een 
                  <strong> betrouwbare glazenwasser</strong>? D.T.G. Cleaning is actief in deze 
                  dynamische gemeente en staat bekend om kwaliteit, stiptheid en een persoonlijke aanpak.
                </p>
                <p className="text-gray-600 mb-6">
                  Wat ons onderscheidt? Een <strong>vaste glazenwasser</strong> die u kent. 
                  Geen wisselende gezichten, geen gedoe. En met onze <strong>osmosewater-techniek</strong> 
                  krijgt u gegarandeerd een streeploos resultaat zonder chemicaliën. 
                  <strong> Perfect voor de groene gemeente Barneveld.</strong>
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#1a3a52]">12 km</div>
                    <div className="text-sm text-gray-600">Geen reiskosten</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#1a3a52]">✓</div>
                    <div className="text-sm text-gray-600">Vaste glazenwasser</div>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-xl p-4">
                  <p className="text-gray-700 text-sm">
                    <strong>🏭 Goed om te weten:</strong> Geen reiskosten binnen Barneveld. 
                    Speciale tarieven voor bedrijven op Harselaar en Veller.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#1a3a52] mb-3 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" /> Actief in heel Barneveld
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Centrum</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Harselaar</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Veller</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">De Glind</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Kootwijkerbroek</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Stroe</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Zwartebroek</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Terschuur</span></div>
                  </div>
                </div>

                <div className="bg-[#1a3a52]/5 rounded-2xl p-6 border border-[#1a3a52]/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#1a3a52] rounded-full flex items-center justify-center flex-shrink-0">
                      <Factory className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a3a52]">Specialist in bedrijfspanden</p>
                      <p className="text-sm text-gray-600">
                        Ervaring met grote panden op Harselaar en Veller. 
                        Ook showrooms, kantoren en industriële gebouwen.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4 border border-green-200 flex items-center gap-3">
                  <Tractor className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-green-800">Ook voor agrarische bedrijven</p>
                    <p className="text-xs text-green-700">Schuren, loodsen, stallen en boerderijen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diensten in Barneveld - Kort en overzichtelijk */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
                Onze diensten in Barneveld – voor elk pand
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Of u nu een woning, bedrijfspand, agrarisch gebouw of instelling heeft – 
                wij bieden de oplossing. Hieronder een overzicht.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sparkles, title: "Glasbewassing", desc: "Streeploos met osmosewater, ook op hoogte", color: "from-blue-500 to-blue-600" },
                { icon: Building2, title: "Gevelreiniging", desc: "Algen en mos verwijderd – ook voor bedrijfspanden", color: "from-gray-700 to-gray-800" },
                { icon: Sun, title: "Zonnepanelen", desc: "Optimaal rendement door schone panelen", color: "from-yellow-500 to-yellow-600" },
                { icon: Droplets, title: "Dakgoten", desc: "Voorkom waterschade – ook voor grote panden", color: "from-cyan-500 to-cyan-600" },
              ].map((d, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                  <div className={`w-14 h-14 bg-gradient-to-br ${d.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <d.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{d.title}</h3>
                  <p className="text-gray-600 text-sm">{d.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/schoonmaakdiensten" className="inline-flex items-center text-[#1a3a52] font-semibold hover:underline">
                Bekijk alle diensten <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Waarom vaste glazenwasser in Barneveld */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
                Waarom een vaste glazenwasser in Barneveld?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Een vaste glazenwasser betekent vertrouwen, kwaliteit en gemak. 
                Dit zijn de voordelen voor inwoners en bedrijven in Barneveld.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Calendar, title: "Vaste planning", desc: "U weet precies wanneer wij komen – wekelijks langs in Barneveld." },
                { icon: Users, title: "Vast gezicht", desc: "Altijd dezelfde glazenwasser die uw pand kent." },
                { icon: Shield, title: "Verzekerd & veilig", desc: "Volledig aansprakelijkheidsverzekerd voor uw gemoedsrust." },
              ].map((v, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
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

        {/* Telescoopbewassing - specifiek voor Barneveld */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    🏭 Perfect voor bedrijfspanden
                  </span>
                  <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
                    Telescoopbewassing – ook uw hoge ramen zonder steiger
                  </h3>
                  <p className="text-gray-600 mb-4">
                    In Barneveld hebben veel panden hoge ramen – vooral bedrijfspanden op Harselaar 
                    en Veller, maar ook historische panden in de binnenstad. Normaal gesproken hebt u 
                    dan een dure steiger of hoogwerker nodig. Met onze <strong>telescoopbewassing</strong> 
                    kunnen wij tot <strong>13,5 meter hoogte</strong> werken – zonder extra kosten.
                  </p>
                  <p className="text-gray-600">
                    Dat bespaart u honderden euro's per reiniging. En met osmosewater krijgt u 
                    gegarandeerd een <strong>streeploos resultaat</strong> – veilig voor uw pand 
                    en de omgeving.
                  </p>
                </div>
                <div className="flex-1 text-center bg-[#1a3a52] rounded-2xl p-8 text-white">
                  <span className="text-5xl font-bold">13,5 m</span>
                  <p className="text-white/80 mt-2">Reikhoogte zonder steiger</p>
                  <div className="mt-4 border-t border-white/20 pt-4">
                    <span className="text-2xl font-bold text-green-300">€0</span>
                    <p className="text-white/70 text-sm">extra kosten voor hoogte</p>
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/80">
                    <Check className="w-4 h-4 text-green-300" /> Geen steiger
                    <Check className="w-4 h-4 text-green-300 ml-2" /> Geen hoogwerker
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ NIEUWE FAQ - Specifiek voor Barneveld */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                VEELGESTELDE VRAGEN
              </span>
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
                Vragen over glasbewassing in Barneveld?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Antwoorden op de meest gestelde vragen over onze diensten in Barneveld.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button 
                    onClick={() => toggleFAQ(index)} 
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 text-sm md:text-base">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform flex-shrink-0 ml-4 ${openFAQ === index ? "rotate-180" : ""}`} 
                      style={{ color: "#0e304d" }} 
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ AANGEPASTE CTA - Compact met witruimte */}
        <section className="pt-8 pb-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#1a3a52] rounded-2xl p-6 md:p-8 text-center shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Glazenwasser in Barneveld nodig?
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
                  <Check className="w-3 h-3 text-green-400" /> Speciale tarieven bedrijven
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-green-400" /> Snelle reactie
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
