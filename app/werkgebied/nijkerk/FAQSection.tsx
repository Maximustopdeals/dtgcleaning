"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Wat kost glasbewassing in Nijkerk?",
    answer:
      "De kosten zijn afhankelijk van het aantal ramen en de moeilijkheidsgraad. Wij komen vrijblijvend bij u langs voor een offerte op maat. Voor inwoners van Nijkerk hanteren wij geen reiskosten.",
  },
  {
    question: "Hoe vaak moet ik mijn ramen laten wassen?",
    answer:
      "Voor woningen adviseren wij 4 tot 6 keer per jaar. Voor bedrijfspanden is dat elke 4 tot 8 weken – afhankelijk van de ligging en vervuiling.",
  },
  {
    question: "Werkt u ook op zaterdag in Nijkerk?",
    answer:
      "Nee, in het weekend zijn wij gesloten. Voor spoed kunt u ons uiteraard wel bereiken via telefoon of e-mail. Wij reageren binnen 24 uur.",
  },
  {
    question: "Gebruikt u chemicaliën voor glasbewassing?",
    answer:
      "Nee, wij werken uitsluitend met osmosewater. Dit is 100% milieuvriendelijk, veilig voor planten en dieren, en geeft een streeploos resultaat zonder agressieve middelen.",
  },
  {
    question: "Komt u ook in mijn wijk in Nijkerk?",
    answer:
      "Ja! Wij zijn actief in alle wijken van Nijkerk: centrum, Doornsteeg, Paasbos, Arkervaart, Corlaer, Kruishaar en meer. Geen reiskosten binnen Nijkerk.",
  },
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) =>
    setOpenFAQ(openFAQ === index ? null : index);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
            VEELGESTELDE VRAGEN
          </span>
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">
            Vragen over glasbewassing in Nijkerk?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze diensten in
            Nijkerk.
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
