"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Komt u ook naar de bosrandgebieden van Ermelo?",
    answer:
      "Absoluut! De bosrandgebieden zijn een belangrijk deel van ons werkgebied. Wij hebben ruime ervaring met het reinigen van woningen nabij het bos, waar speciale aandacht nodig is voor algengroei en mos.",
  },
  {
    question: "Wat kost glasbewassing voor een vrijstaande woning in Ermelo?",
    answer:
      "De kosten zijn afhankelijk van het aantal ramen, de moeilijkheidsgraad en de frequentie. Vraag vrijblijvend een offerte aan voor een exacte prijs. Wij rekenen geen extra reiskosten voor Ermelo.",
  },
  {
    question: "Werkt u ook voor recreatiewoningen in de omgeving van Ermelo?",
    answer:
      "Jazeker! Ook voor recreatiewoningen, vakantiehuizen en tweede woningen staan wij klaar. U kunt ons eenmalig inschakelen of een vast contract afsluiten voor periodiek onderhoud.",
  },
  {
    question: "Heeft u ervaring met woningen aan de rand van het bos?",
    answer:
      "Ja, dat is onze specialiteit! Woningen aan de bosrand hebben vaker last van mos, algen en vogelpoep. Wij weten precies hoe we deze uitdagingen aanpakken zonder uw pand te beschadigen.",
  },
  {
    question: "Gebruikt u chemicaliën die schadelijk zijn voor de natuur?",
    answer:
      "Nee, wij werken uitsluitend met osmosewater – 100% gedemineraliseerd water zonder chemicaliën. Dit is veilig voor uw planten, uw gezin en de prachtige natuur rondom Ermelo.",
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
            Vragen over glasbewassing in Ermelo?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze diensten in Ermelo.
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
