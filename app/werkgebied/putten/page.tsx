"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Komt u ook in de buitengebieden?",
    answer:
      "Ja, wij zijn actief in de hele gemeente Putten – in de dorpskern, de woonwijken en het buitengebied. Neem gerust contact op om te bespreken wat de mogelijkheden zijn.",
  },
  {
    question: "Wat kost glasbewassing in Putten?",
    answer:
      "De kosten zijn afhankelijk van het aantal ramen en de moeilijkheidsgraad. Wij komen vrijblijvend bij u langs voor een offerte op maat. Omdat we dichtbij zitten (Nijkerk – 8 km) rekenen we geen reiskosten.",
  },
  {
    question: "Hoe vaak moet ik mijn ramen laten wassen in Putten?",
    answer:
      "Voor woningen adviseren wij 4 tot 6 keer per jaar. Voor bedrijfspanden is dat elke 4 tot 8 weken. In bosrijke gebieden kan het vaker nodig zijn door pollen en vogelpoep – wij adviseren u graag.",
  },
  {
    question: "Werkt u ook voor vrijstaande woningen en landelijke panden?",
    answer:
      "Jazeker! Wij zijn specialisten in het reinigen van vrijstaande woningen, landelijke panden en karakteristieke huizen in Putten. Met onze telescoopbewassing bereiken we ook de hoogste ramen zonder steiger.",
  },
  {
    question: "Gebruikt u chemicaliën voor glasbewassing?",
    answer:
      "Nee, wij werken uitsluitend met osmosewater – 100% gedemineraliseerd water zonder chemicaliën. Dit is veilig voor uw planten, uw gezin en het milieu. Perfect voor de bosrijke omgeving van Putten.",
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
            Vragen over glasbewassing in Putten?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze diensten in Putten.
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
