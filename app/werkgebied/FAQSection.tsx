"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Bij welk weer kan glasbewassing niet doorgaan?",
    answer:
      "Bij extreme weersomstandigheden zoals zware regenval, stormachtige wind (windkracht 6 of hoger) of onweer werken wij niet. Uw veiligheid en een perfect resultaat gaan altijd voorop.",
  },
  {
    question: "Wat doet vorst met glasbewassing?",
    answer:
      "Bij temperaturen onder de -2°C werken wij niet. De schoonmaakmiddelen bevriezen op het glas en ladders worden glad. Uw veiligheid en een perfect resultaat gaan voor.",
  },
  {
    question: "Hoe vaak moet ik mijn ramen laten wassen?",
    answer:
      "Voor woningen adviseren wij 4 tot 6 keer per jaar. Voor bedrijfspanden is dat elke 4 tot 8 weken – afhankelijk van de ligging en vervuiling. Met een vast contract bent u verzekerd van een vaste planning en bespaart u tot 20%.",
  },
  {
    question: "Werkt u ook in het weekend?",
    answer:
      "Nee, in het weekend zijn wij gesloten. Voor spoed kunt u ons uiteraard wel bereiken via telefoon of e-mail – wij reageren binnen 24 uur.",
  },
  {
    question: "Hoe kan ik een offerte aanvragen?",
    answer:
      "Via het contactformulier op deze pagina, per e-mail of telefonisch. Wij komen graag vrijblijvend bij u langs voor een offerte op maat – geheel zonder verplichtingen.",
  },
  {
    question: "Wat zijn uw betaalvoorwaarden?",
    answer:
      "Wij factureren altijd achteraf. Voor eenmalige projecten en losse bestellingen ontvangt u een factuur met 14 dagen betaaltermijn. Voor vaste onderhoudscontracten volgt maandelijks een factuur, eveneens met 14 dagen betaaltermijn. U betaalt pas als u tevreden bent.",
  },
  {
    question: "Heeft u een aansprakelijkheidsverzekering?",
    answer:
      "Jazeker, wij zijn volledig verzekerd voor bedrijfsaansprakelijkheid en beroepsaansprakelijkheid. Mocht er onverhoopt iets beschadigd raken, dan staat u niet voor de kosten. Uw pand is bij ons in veilige handen.",
  },
  {
    question: "Gebruikt u milieuverantwoorde schoonmaakmiddelen?",
    answer:
      "Ja, wij werken uitsluitend met biologisch afbreekbare en milieuvriendelijke schoonmaakmiddelen. Geen agressieve chemicaliën – veilig voor mens, dier, plant én het milieu. Bovendien is het resultaat streeploos en blijft het langer mooi.",
  },
  {
    question: "Hoe lang van tevoren moet ik een afspraak plannen?",
    answer:
      "Voor losse projecten adviseren wij minimaal 1 tot 2 weken van tevoren. Wilt u zeker zijn van een vaste dag? Sluit dan een onderhoudscontract af – dan ligt uw planning voor het hele jaar vast. Voor spoed of advies kunt u altijd bellen, appen of het contactformulier invullen.",
  },
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) =>
    setOpenFAQ(openFAQ === index ? null : index);

  return (
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
            Antwoorden op de meest gestelde vragen over onze diensten in Nijkerk
            en omgeving.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900 text-sm md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform flex-shrink-0 ml-4 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
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
  );
}
