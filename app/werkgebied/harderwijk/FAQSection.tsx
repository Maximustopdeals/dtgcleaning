"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Komt u ook in de binnenstad van Harderwijk?",
    answer:
      "Ja, absoluut! De binnenstad is een van onze kerngebieden. We zijn gespecialiseerd in het reinigen van panden in historische binnensteden, inclusief monumentale gebouwen.",
  },
  {
    question: "Wat kost glasbewassing in Harderwijk?",
    answer:
      "De kosten zijn afhankelijk van het aantal ramen en de moeilijkheidsgraad. Wij komen vrijblijvend bij u langs voor een offerte op maat. Wij rekenen geen extra reiskosten voor Harderwijk.",
  },
  {
    question: "Heeft u ervaring met monumentale panden?",
    answer:
      "Ja, wij hebben ruime ervaring met het reinigen van monumentale en historische panden. Wij werken met zachte methoden die de kwetsbare gevels en ramen niet beschadigen.",
  },
  {
    question: "Werkt u ook aan de Waterfront en bij de haven?",
    answer:
      "Jazeker! Wij zijn actief in heel Harderwijk, inclusief de Waterfront, havengebied en alle wijken. De zoute lucht vraagt om extra aandacht voor uw ramen – daar hebben wij ervaring mee.",
  },
  {
    question: "Gebruikt u chemicaliën voor glasbewassing?",
    answer:
      "Nee, wij werken uitsluitend met osmosewater – 100% gedemineraliseerd water zonder chemicaliën. Dit is veilig voor uw planten, uw gezin en het milieu. Perfect voor de kwetsbare historische gebouwen in Harderwijk.",
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
            Vragen over glasbewassing in Harderwijk?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze diensten in
            Harderwijk.
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
