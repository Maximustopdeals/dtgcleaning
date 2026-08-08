"use client";

import Link from "next/link";
import { MapPin, Check, Phone, Mail, ArrowRight, Sparkles, Shield, Calendar, Leaf, Clock, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { useState } from "react";

// Groen vinkje component
const GreenCheck = () => (
  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
    <Check className="w-3 h-3 text-white" />
  </div>
);

// FAQ data - vernieuwd en klantgericht (zelfde als contactpagina)
const faqs = [
  { 
    question: "Bij welk weer kan glasbewassing niet doorgaan?", 
    answer: "Bij extreme weersomstandigheden zoals zware regenval, stormachtige wind (windkracht 6 of hoger) of onweer werken wij niet. Uw veiligheid en een perfect resultaat gaan altijd voorop." 
  },
  { 
    question: "Wat doet vorst met glasbewassing?", 
    answer: "Bij temperaturen onder de -2°C werken wij niet. De schoonmaakmiddelen bevriezen op het glas en ladders worden glad. Uw veiligheid en een perfect resultaat gaan voor." 
  },
  { 
    question: "Hoe vaak moet ik mijn ramen laten wassen?", 
    answer: "Voor woningen adviseren wij 4 tot 6 keer per jaar. Voor bedrijfspanden is dat elke 4 tot 8 weken – afhankelijk van de ligging en vervuiling. Met een vast contract bent u verzekerd van een vaste planning en bespaart u tot 20%." 
  },
  { 
    question: "Werkt u ook in het weekend?", 
    answer: "Nee, in het weekend zijn wij gesloten. Voor spoed kunt u ons uiteraard wel bereiken via telefoon of e-mail – wij reageren binnen 24 uur." 
  },
  { 
    question: "Hoe kan ik een offerte aanvragen?", 
    answer: "Via het contactformulier op deze pagina, per e-mail of telefonisch. Wij komen graag vrijblijvend bij u langs voor een offerte op maat – geheel zonder verplichtingen." 
  },
  { 
    question: "Wat zijn uw betaalvoorwaarden?", 
    answer: "Wij factureren altijd achteraf. Voor eenmalige projecten en losse bestellingen ontvangt u een factuur met 14 dagen betaaltermijn. Voor vaste onderhoudscontracten volgt maandelijks een factuur, eveneens met 14 dagen betaaltermijn. U betaalt pas als u tevreden bent." 
  },
  { 
    question: "Heeft u een aansprakelijkheidsverzekering?", 
    answer: "Jazeker, wij zijn volledig verzekerd voor bedrijfsaansprakelijkheid en beroepsaansprakelijkheid. Mocht er onverhoopt iets beschadigd raken, dan staat u niet voor de kosten. Uw pand is bij ons in veilige handen." 
  },
  { 
    question: "Gebruikt u milieuverantwoorde schoonmaakmiddelen?", 
    answer: "Ja, wij werken uitsluitend met biologisch afbreekbare en milieuvriendelijke schoonmaakmiddelen. Geen agressieve chemicaliën – veilig voor mens, dier, plant én het milieu. Bovendien is het resultaat streeploos en blijft het langer mooi." 
  },
  { 
    question: "Hoe lang van tevoren moet ik een afspraak plannen?", 
    answer: "Voor losse projecten adviseren wij minimaal 1 tot 2 weken van tevoren. Wilt u zeker zijn van een vaste dag? Sluit dan een onderhoudscontract af – dan ligt uw planning voor het hele jaar vast. Voor spoed of advies kunt u altijd bellen, appen of het contactformulier invullen." 
  },
];

export default function WerkgebiedPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => setOpenFAQ(openFAQ === index ? null : index);

  const steden = [
    { 
      name: "Nijkerk", 
      slug: "nijkerk", 
      distance: "0 km", 
      description: "Uw glazenwasser in Nijkerk – al jaren actief met vaste routes en tevreden klanten.",
      image: "/images/nijkerk.jpg",
      highlights: ["Vaste planning", "Snelle reactie", "Streeploos resultaat"]
    },
    { 
      name: "Putten", 
      slug: "putten", 
      distance: "8 km", 
      description: "Actief in heel Putten – van Krachtighuizen tot Diermen. Wekelijks routes voor woningen en bedrijven.",
      image: "/images/putten.jpg",
      highlights: ["Wekelijkse routes", "Ook bedrijfspanden", "Vaste glazenwasser"]
    },
    { 
      name: "Harderwijk", 
      slug: "harderwijk", 
      distance: "15 km", 
      description: "Grote stad, persoonlijke service. Actief in centrum, Stadsdennen, Frankrijk en omliggende wijken.",
      image: "/images/harderwijk.jpg",
      highlights: ["Geen wachttijd", "Ook op hoogte", "Milieuvriendelijk"]
    },
    { 
      name: "Barneveld", 
      slug: "barneveld", 
      distance: "12 km", 
      description: "Groeiend werkgebied. Wekelijks routes richting centrum, Veller en industrieterreinen.",
      image: "/images/barneveld.jpg",
      highlights: ["Flexibele planning", "Ook bedrijven", "Vaste prijzen"]
    },
    { 
      name: "Ermelo", 
      slug: "ermelo", 
      distance: "10 km", 
      description: "Actief in heel Ermelo – van Horst tot Tonsel. Regelmatige routes voor particulieren en VvE's.",
      image: "/images/ermelo.jpg",
      highlights: ["Vaste klantenkring", "Ook VvE's", "Streeploos glas"]
    },
    { 
      name: "Voorthuizen", 
      slug: "voorthuizen", 
      distance: "9 km", 
      description: "Dorp tussen Nijkerk en Barneveld. Wekelijks routes langs Gerverscop en omliggende wijken.",
      image: "/images/voorthuizen.jpg",
      highlights: ["Persoonlijke service", "Betaalbaar", "Geen gedoe"]
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero - SEO: zoekwoorden in H1 */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Glazenwasser in Nijkerk en omgeving – ook bij u in de buurt
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              D.T.G. Cleaning is dé glazenwasser in <strong>Nijkerk, Putten, Harderwijk, Barneveld, Ermelo en Voorthuizen</strong>. 
              Professionele glasbewassing, gevelreiniging en zonnepanelen reiniging – altijd in uw regio.
            </p>
          </div>
        </section>

        {/* Introductie - klantgericht */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p className="lead">
                <strong>D.T.G. Cleaning</strong> is al jarenlang uw betrouwbare glazenwasser in <strong>Nijkerk</strong> 
                en de omliggende plaatsen. Of u nu in <strong>Putten, Harderwijk, Barneveld, Ermelo of Voorthuizen</strong> woont – 
                wij zorgen voor <strong>streeploos schone ramen</strong> zonder gedoe.
              </p>
              <p>
                Wat ons onderscheidt? Een <strong>vaste glazenwasser</strong> die u kent en die weet wat hij doet. 
                Geen wisselende gezichten, geen gedoe. Wij gebruiken <strong>osmosewater</strong> – een milieuvriendelijke 
                techniek die zorgt voor <strong>geen strepen, geen vlekken en geen chemicaliën</strong>. 
                En dankzij onze telewash-systemen bereiken we ook moeiteloos de hoogste ramen.
              </p>
              <p className="font-semibold text-[#1a3a52]">
                👉 Klik op uw woonplaats hieronder voor meer informatie over de diensten in uw regio.
              </p>
            </div>
          </div>
        </section>

        {/* Grid van steden - verbeterd met highlights */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Glazenwasser bij u in de buurt
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Actief in 6 plaatsen in Gelderland. Klik op uw woonplaats voor meer informatie.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steden.map((stad) => (
                <Link 
                  key={stad.slug} 
                  href={`/werkgebied/${stad.slug}`}
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all group border border-gray-100 hover:border-[#1a3a52]/20"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center mb-1">
                        <MapPin className="w-5 h-5 text-[#1a3a52] mr-2 flex-shrink-0" />
                        <h3 className="text-xl font-bold text-[#1a3a52]">{stad.name}</h3>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{stad.distance} vanaf Nijkerk</p>
                      <p className="text-gray-600 text-sm mb-3">{stad.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {stad.highlights.map((highlight, idx) => (
                          <span key={idx} className="inline-flex items-center bg-[#1a3a52]/5 text-[#1a3a52] text-xs px-2 py-1 rounded-full">
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

        {/* Waarom D.T.G. Cleaning in de regio - meer klantgericht */}
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
                Vier redenen waarom inwoners en bedrijven in Nijkerk en omgeving al jaren voor ons kiezen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Vaste glazenwasser</h3>
                <p className="text-gray-600 text-sm">
                  Altijd hetzelfde gezicht, altijd dezelfde kwaliteit. Geen wisselende planners, wel vertrouwen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Streeploos resultaat</h3>
                <p className="text-gray-600 text-sm">
                  Osmosewater-techniek voor glas dat er dagenlang perfect uitziet – zonder strepen of vlekken.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Veilig & verzekerd</h3>
                <p className="text-gray-600 text-sm">
                  Volledig aansprakelijkheidsverzekerd. Uw pand is in veilige handen – zonder zorgen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Milieuvriendelijk</h3>
                <p className="text-gray-600 text-sm">
                  Geen agressieve chemicaliën – alleen osmosewater. Veilig voor u, uw gezin en het milieu.
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
              Geen wachttijd – ook voor spoed
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Of u nu een eenmalige afspraak wilt of een vast contract – wij plannen snel en flexibel. 
              Ook voor spoed kunt u ons altijd bellen.
            </p>
          </div>
        </section>

        {/* FAQ - vernieuwd en identiek aan contactpagina */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                VEELGESTELDE VRAGEN
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Vragen over glasbewassing in uw regio?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Antwoorden op de meest gestelde vragen over onze diensten in Nijkerk en omgeving.
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

        {/* CTA - witte achtergrond met blauwe banner */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#1a3a52] rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ook glazenwasser bij u in de buurt?
              </h2>
              <p className="text-white/80 mb-6">
                Vraag vrijblijvend een offerte aan – wij komen graag langs voor een kennismaking.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-[#1a3a52] rounded-full px-8 py-4 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" /> Vrijblijvend offerte aanvragen
                </Link>
                <a 
                  href="tel:0634683019" 
                  className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" /> 06-34683019
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/70">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-400" /> Vrijblijvend
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-400" /> Geen verplichtingen
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-400" /> Snelle reactie
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
