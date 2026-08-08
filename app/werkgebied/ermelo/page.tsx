"use client";

import Link from "next/link";
import { 
  Phone, Check, MapPin, Clock, Mail, Sparkles, Building2, Sun, Droplets, 
  Shield, Calendar, Users, Home, ArrowRight, Trees, Bike, ChevronDown
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

export default function GlazenwasserErmelo() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenFAQ(openFAQ === index ? null : index);

  // JSON-LD voor lokale SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "D.T.G. Cleaning - Glazenwasser Ermelo",
    "image": "https://dtgcleaning.nl/images/logo.png",
    "telephone": "+31 6 34683019",
    "email": "info@dtgcleaning.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ermelo",
      "addressRegion": "Gelderland",
      "addressCountry": "NL"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 07:00-18:00",
    "areaServed": "Ermelo en omgeving",
    "url": "https://dtgcleaning.nl/werkgebied/ermelo"
  };

  // ✅ NIEUWE FAQ - Specifiek voor Ermelo (anders dan andere plaatsen)
  const faqs = [
    {
      question: "Komt u ook naar de bosrandgebieden van Ermelo?",
      answer: "Absoluut! De bosrandgebieden zijn een belangrijk deel van ons werkgebied. Wij hebben ruime ervaring met het reinigen van woningen nabij het bos, waar speciale aandacht nodig is voor algengroei en mos."
    },
    {
      question: "Wat kost glasbewassing voor een vrijstaande woning in Ermelo?",
      answer: "De kosten zijn afhankelijk van het aantal ramen, de moeilijkheidsgraad en de frequentie. Vraag vrijblijvend een offerte aan voor een exacte prijs. Wij rekenen geen extra reiskosten voor Ermelo."
    },
    {
      question: "Werkt u ook voor recreatiewoningen in de omgeving van Ermelo?",
      answer: "Jazeker! Ook voor recreatiewoningen, vakantiehuizen en tweede woningen staan wij klaar. U kunt ons eenmalig inschakelen of een vast contract afsluiten voor periodiek onderhoud."
    },
    {
      question: "Heeft u ervaring met woningen aan de rand van het bos?",
      answer: "Ja, dat is onze specialiteit! Woningen aan de bosrand hebben vaker last van mos, algen en vogelpoep. Wij weten precies hoe we deze uitdagingen aanpakken zonder uw pand te beschadigen."
    },
    {
      question: "Gebruikt u chemicaliën die schadelijk zijn voor de natuur?",
      answer: "Nee, wij werken uitsluitend met osmosewater – 100% gedemineraliseerd water zonder chemicaliën. Dit is veilig voor uw planten, uw gezin en de prachtige natuur rondom Ermelo."
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main>
        
        {/* Hero - Unieke focus voor Ermelo: bos en recreatie */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
              🌲 Specialist in bosrandwoningen & recreatie
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Glazenwasser Ermelo – ook voor uw bosrandwoning
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Streeploos schone ramen voor <strong className="text-white">particulieren</strong>, <strong className="text-white">bedrijven</strong> en <strong className="text-white">recreatiewoningen</strong> in Ermelo
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Op zoek naar een <strong className="text-white">betrouwbare glazenwasser in Ermelo</strong>? 
              D.T.G. Cleaning is actief in deze prachtige bosgemeente – van de <strong className="text-white">dorpskern</strong> 
              tot de <strong className="text-white">bosranden</strong> en <strong className="text-white">recreatiegebieden</strong>. 
              Milieuvriendelijk, betrouwbaar en zonder reiskosten.
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

        {/* Waarom Ermelo - Unieke invalshoek: bos en natuur */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                  WAAROM ERMELO VOOR ONS KIEZEN
                </span>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Uw vaste glazenwasser in Ermelo
                </h2>
                <p className="text-gray-600 mb-4">
                  Woon of werkt u in het groene <strong>Ermelo</strong> en bent u op zoek naar een 
                  <strong> betrouwbare glazenwasser</strong>? D.T.G. Cleaning is actief in deze 
                  bosrijke gemeente en staat bekend om kwaliteit, stiptheid en een persoonlijke aanpak.
                </p>
                <p className="text-gray-600 mb-6">
                  Wat ons onderscheidt? Een <strong>vaste glazenwasser</strong> die u kent. 
                  Geen wisselende gezichten, geen gedoe. En met onze <strong>osmosewater-techniek</strong> 
                  krijgt u gegarandeerd een streeploos resultaat – <strong>zonder schade aan de natuur</strong> 
                  rondom Ermelo.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#1a3a52]">10 km</div>
                    <div className="text-sm text-gray-600">Geen reiskosten</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#1a3a52]">🌲</div>
                    <div className="text-sm text-gray-600">Bosrand specialist</div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-4">
                  <p className="text-gray-700 text-sm">
                    <strong>🌲 Goed om te weten:</strong> Geen reiskosten binnen Ermelo. 
                    Ook voor recreatiewoningen en bosrandpanden.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#1a3a52] mb-3 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" /> Actief in heel Ermelo
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Centrum</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Horst</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Tonsel</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Veldwijk</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Stakenberg</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Ermelosche Heide</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Telgt</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Leuvenum</span></div>
                  </div>
                </div>

                <div className="bg-[#1a3a52]/5 rounded-2xl p-6 border border-[#1a3a52]/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#1a3a52] rounded-full flex items-center justify-center flex-shrink-0">
                      <Trees className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a3a52]">Specialist in bosrandwoningen</p>
                      <p className="text-sm text-gray-600">
                        Ervaring met woningen aan de rand van bossen. 
                        Specifieke aanpak voor algengroei en mos door schaduw en vocht.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 flex items-center gap-3">
                  <Bike className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-blue-800">Ook voor recreatiewoningen</p>
                    <p className="text-xs text-blue-700">Vakantiehuizen, tweede woningen en meer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diensten in Ermelo - Kort en overzichtelijk */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
                Onze diensten in Ermelo – voor elk pand
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Of u nu een woning in het centrum, een bosrandwoning of een recreatiepand heeft – 
                wij bieden de oplossing. Hieronder een overzicht.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sparkles, title: "Glasbewassing", desc: "Streeploos met osmosewater, ook op hoogte", color: "from-blue-500 to-blue-600" },
                { icon: Building2, title: "Gevelreiniging", desc: "Algen en mos verwijderd – bosrand specialist", color: "from-gray-700 to-gray-800" },
                { icon: Sun, title: "Zonnepanelen", desc: "Optimaal rendement door schone panelen", color: "from-yellow-500 to-yellow-600" },
                { icon: Droplets, title: "Dakgoten", desc: "Voorkom waterschade – bladval specialisten", color: "from-cyan-500 to-cyan-600" },
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

        {/* Waarom vaste glazenwasser in Ermelo */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
                Waarom een vaste glazenwasser in Ermelo?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Een vaste glazenwasser betekent vertrouwen, kwaliteit en gemak. 
                Dit zijn de voordelen voor inwoners en recreanten in Ermelo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Calendar, title: "Vaste planning", desc: "U weet precies wanneer wij komen – wekelijks langs in Ermelo." },
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

        {/* Telescoopbewassing - specifiek voor Ermelo */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    🌲 Perfect voor bosrandwoningen
                  </span>
                  <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
                    Telescoopbewassing – ook uw hoge ramen zonder steiger
                  </h3>
                  <p className="text-gray-600 mb-4">
                    In Ermelo hebben veel panden hoge ramen – zeker de karakteristieke bosrandwoningen 
                    en vrijstaande panden. Normaal gesproken hebt u dan een dure steiger of hoogwerker 
                    nodig. Met onze <strong>telescoopbewassing</strong> kunnen wij tot 
                    <strong> 13,5 meter hoogte</strong> werken – zonder extra kosten.
                  </p>
                  <p className="text-gray-600">
                    Dat bespaart u honderden euro's per reiniging. En met osmosewater krijgt u 
                    gegarandeerd een <strong>streeploos resultaat</strong> – veilig voor uw pand 
                    en de prachtige natuur rondom Ermelo.
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

        {/* Duurzaamheid - Uniek voor Ermelo */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center border border-green-100">
              <div className="inline-block bg-green-100 rounded-full px-4 py-2 text-sm font-semibold text-green-700 mb-4">
                🌿 Duurzaam & Milieuvriendelijk
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
                Samen voor een groen Ermelo
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-4">
                Ermelo staat bekend om haar inzet voor een groene en duurzame leefomgeving. 
                Met onze milieuvriendelijke <strong>osmosewater-techniek</strong> en 
                <strong> chemievrije reiniging</strong> dragen wij hier graag aan bij.
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Uw ramen worden streeploos schoon zonder schadelijke stoffen die in de bossen 
                en natuur rondom Ermelo terechtkomen. Perfect voor de prachtige omgeving waarin u woont!
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2" /> Geen chemicaliën
                </span>
                <span className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2" /> Veilig voor planten
                </span>
                <span className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2" /> Veilig voor dieren
                </span>
                <span className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm">
                  <Check className="w-4 h-4 text-green-500 mr-2" /> 100% biologisch afbreekbaar
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ NIEUWE FAQ - Specifiek voor Ermelo */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                VEELGESTELDE VRAGEN
              </span>
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
                Vragen over glasbewassing in Ermelo?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Antwoorden op de meest gestelde vragen over onze diensten in Ermelo.
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
        <section className="pt-8 pb-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#1a3a52] rounded-2xl p-6 md:p-8 text-center shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Glazenwasser in Ermelo nodig?
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
                  <Check className="w-3 h-3 text-green-400" /> Milieuvriendelijk
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
