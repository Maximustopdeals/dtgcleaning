"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Komt u ook naar de recreatieparken in Voorthuizen?",
    answer:
      "Absoluut! Dit is een van onze specialismen. Wij werken regelmatig voor campings, vakantieparken en recreatiebedrijven in Voorthuizen, waaronder Zeumeren, Gerverscop en andere parken.",
  },
  {
    question: "Wat kost glasbewassing voor een camping of vakantiepark?",
    answer:
      "De kosten zijn afhankelijk van het aantal gebouwen en de moeilijkheidsgraad. Wij bieden speciale tarieven voor recreatiebedrijven en werken graag een plan op maat uit.",
  },
  {
    question:
      "Kunt u ook in het laagseizoen werken zodat gasten geen overlast hebben?",
    answer:
      "Zeker! Voor recreatieparken plannen wij altijd in overleg, bij voorkeur in het laagseizoen of op dagen met minimale gastenbezetting. Uw gasten merken er niets van.",
  },
  {
    question:
      "Heeft u ervaring met recreatiegebouwen zoals recepties en sanitair?",
    answer:
      "Ja, wij hebben ruime ervaring met het reinigen van alle typen recreatiegebouwen. Van recepties en sanitairgebouwen tot bungalows en gemeenschappelijke ruimtes.",
  },
  {
    question: "Gebruikt u chemicaliën die schadelijk zijn voor de natuur?",
    answer:
      "Nee, wij werken uitsluitend met osmosewater – 100% gedemineraliseerd water zonder chemicaliën. Dit is veilig voor de natuur, uw planten en de recreatieomgeving van Voorthuizen.",
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
            Vragen over glasbewassing in Voorthuizen?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze diensten in
            Voorthuizen.
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
