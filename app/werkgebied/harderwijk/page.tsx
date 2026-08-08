"use client";

import Link from "next/link";
import { 
  Phone, Check, MapPin, Clock, Mail, Sparkles, Building2, Sun, Droplets, 
  Shield, Calendar, Users, Home, ArrowRight, Trees, Anchor, ChevronDown
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

export default function GlazenwasserHarderwijk() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenFAQ(openFAQ === index ? null : index);

  // JSON-LD voor lokale SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "D.T.G. Cleaning - Glazenwasser Harderwijk",
    "image": "https://dtgcleaning.nl/images/logo.png",
    "telephone": "+31 6 34683019",
    "email": "info@dtgcleaning.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Harderwijk",
      "addressRegion": "Gelderland",
      "addressCountry": "NL"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 07:00-18:00",
    "areaServed": "Harderwijk en omgeving",
    "url": "https://dtgcleaning.nl/werkgebied/harderwijk"
  };

  // ✅ NIEUWE FAQ - Specifiek voor Harderwijk
  const faqs = [
    {
      question: "Komt u ook in de binnenstad van Harderwijk?",
      answer: "Ja, absoluut! De binnenstad is een van onze kerngebieden. We zijn gespecialiseerd in het reinigen van panden in historische binnensteden, inclusief monumentale gebouwen."
    },
    {
      question: "Wat kost glasbewassing in Harderwijk?",
      answer: "De kosten zijn afhankelijk van het aantal ramen en de moeilijkheidsgraad. Wij komen vrijblijvend bij u langs voor een offerte op maat. Wij rekenen geen extra reiskosten voor Harderwijk."
    },
    {
      question: "Heeft u ervaring met monumentale panden?",
      answer: "Ja, wij hebben ruime ervaring met het reinigen van monumentale en historische panden. Wij werken met zachte methoden die de kwetsbare gevels en ramen niet beschadigen."
    },
    {
      question: "Werkt u ook aan de Waterfront en bij de haven?",
      answer: "Jazeker! Wij zijn actief in heel Harderwijk, inclusief de Waterfront, havengebied en alle wijken. De zoute lucht vraagt om extra aandacht voor uw ramen – daar hebben wij ervaring mee."
    },
    {
      question: "Gebruikt u chemicaliën voor glasbewassing?",
      answer: "Nee, wij werken uitsluitend met osmosewater – 100% gedemineraliseerd water zonder chemicaliën. Dit is veilig voor uw planten, uw gezin en het milieu. Perfect voor de kwetsbare historische gebouwen in Harderwijk."
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main>
        
        {/* Hero - Lokale focus voor Harderwijk */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <div className="inline-block bg-white/10 rounded-full px-4 py-1 text-sm font-medium mb-4">
              ⚓ Specialist in historische panden
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Glazenwasser Harderwijk – ook voor monumentale panden
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Streeploos schone ramen voor <strong className="text-white">particulieren</strong> en <strong className="text-white">bedrijven</strong> in Harderwijk
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Op zoek naar een <strong className="text-white">betrouwbare glazenwasser in Harderwijk</strong>? 
              D.T.G. Cleaning is al jaren actief in deze bruisende Hanzestad – van de 
              <strong className="text-white"> historische binnenstad</strong> tot aan het 
              <strong className="text-white"> Waterfront</strong>. 
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

        {/* Waarom Harderwijk - Social proof met lokale focus */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                  WAAROM HARDERWIJK VOOR ONS KIEZEN
                </span>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Uw vaste glazenwasser in Harderwijk
                </h2>
                <p className="text-gray-600 mb-4">
                  Woon of werkt u in <strong>Harderwijk</strong> en bent u op zoek naar een 
                  <strong> betrouwbare glazenwasser</strong>? D.T.G. Cleaning is al jaren actief 
                  in deze bruisende Hanzestad en staat bekend om kwaliteit, stiptheid en een 
                  persoonlijke aanpak.
                </p>
                <p className="text-gray-600 mb-6">
                  Wat ons onderscheidt? Een <strong>vaste glazenwasser</strong> die u kent. 
                  Geen wisselende gezichten, geen gedoe. En met onze <strong>osmosewater-techniek</strong> 
                  krijgt u gegarandeerd een streeploos resultaat zonder chemicaliën. 
                  <strong> Perfect voor de kwetsbare historische panden in Harderwijk.</strong>
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#1a3a52]">15 km</div>
                    <div className="text-sm text-gray-600">Geen reiskosten</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-[#1a3a52]">✓</div>
                    <div className="text-sm text-gray-600">Vaste glazenwasser</div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#1a3a52] rounded-r-xl p-4">
                  <p className="text-gray-700 text-sm">
                    <strong>⚓ Goed om te weten:</strong> Geen reiskosten binnen Harderwijk. 
                    Ook voor de historische binnenstad en het Waterfront.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#1a3a52] mb-3 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" /> Actief in heel Harderwijk
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Binnenstad</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Stadsdennen</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Frankrijk</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Stadsweiden</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Waterfront</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Harderwijkerbos</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Zeebuurt</span></div>
                    <div className="flex items-center"><GreenCheck /><span className="ml-2">Drielanden</span></div>
                  </div>
                </div>

                <div className="bg-[#1a3a52]/5 rounded-2xl p-6 border border-[#1a3a52]/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#1a3a52] rounded-full flex items-center justify-center flex-shrink-0">
                      <Anchor className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a3a52]">Specialist in historische panden</p>
                      <p className="text-sm text-gray-600">
                        Ervaring met monumentale gebouwen in de binnenstad. 
                        Zachte reinigingsmethoden die uw pand niet beschadigen.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 flex items-center gap-3">
                  <Trees className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-blue-800">Ook voor panden aan het water</p>
                    <p className="text-xs text-blue-700">Specialistische aanpak voor zoute lucht en kustklimaat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diensten in Harderwijk - Kort en overzichtelijk */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
                Onze diensten in Harderwijk – voor elk pand
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Of u nu een woning in de historische binnenstad, een pand aan het Waterfront of een bedrijf heeft – 
                wij bieden de oplossing. Hieronder een overzicht.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sparkles, title: "Glasbewassing", desc: "Streeploos met osmosewater, ook op hoogte", color: "from-blue-500 to-blue-600" },
                { icon: Building2, title: "Gevelreiniging", desc: "Algen en mos verwijderd – historische panden specialist", color: "from-gray-700 to-gray-800" },
                { icon: Sun, title: "Zonnepanelen", desc: "Optimaal rendement door schone panelen", color: "from-yellow-500 to-yellow-600" },
                { icon: Droplets, title: "Dakgoten", desc: "Voorkom waterschade – extra controle voor kustgebied", color: "from-cyan-500 to-cyan-600" },
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

        {/* Waarom vaste glazenwasser in Harderwijk */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
                Waarom een vaste glazenwasser in Harderwijk?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Een vaste glazenwasser betekent vertrouwen, kwaliteit en gemak. 
                Dit zijn de voordelen voor inwoners en bedrijven in Harderwijk.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Calendar, title: "Vaste planning", desc: "U weet precies wanneer wij komen – vaste routes in Harderwijk." },
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

        {/* Telescoopbewassing - specifiek voor Harderwijk */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    ⚓ Perfect voor historische panden
                  </span>
                  <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
                    Telescoopbewassing – ook uw hoge ramen zonder steiger
                  </h3>
                  <p className="text-gray-600 mb-4">
                    In Harderwijk hebben veel panden hoge ramen – zeker de karakteristieke monumentale 
                    gebouwen in de binnenstad. Normaal gesproken hebt u dan een dure steiger of 
                    hoogwerker nodig. Met onze <strong>telescoopbewassing</strong> kunnen wij tot 
                    <strong> 13,5 meter hoogte</strong> werken – zonder extra kosten.
                  </p>
                  <p className="text-gray-600">
                    Dat bespaart u honderden euro's per reiniging. En met osmosewater krijgt u 
                    gegarandeerd een <strong>streeploos resultaat</strong> – veilig voor uw pand 
                    en de historische omgeving.
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

        {/* ✅ NIEUWE FAQ - Specifiek voor Harderwijk */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                VEELGESTELDE VRAGEN
              </span>
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
                Vragen over glasbewassing in Harderwijk?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Antwoorden op de meest gestelde vragen over onze diensten in Harderwijk.
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
                Glazenwasser in Harderwijk nodig?
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
                  <Check className="w-3 h-3 text-green-400" /> Vrijblijvend
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
