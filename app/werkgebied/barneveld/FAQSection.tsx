"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Komt u ook naar de industrieterreinen Harselaar en Veller?",
    answer:
      "Absoluut! Dit zijn belangrijke gebieden voor ons. Wij hebben veel ervaring met het reinigen van grote bedrijfspanden, showrooms en kantoren op beide terreinen.",
  },
  {
    question: "Wat kost glasbewassing voor een bedrijfspand in Barneveld?",
    answer:
      "De kosten zijn afhankelijk van het aantal ramen, de hoogte en de frequentie. Wij bieden speciale tarieven voor bedrijven en geven vrijblijvend offerte op maat.",
  },
  {
    question: "Werkt u ook voor agrarische bedrijven in Barneveld?",
    answer:
      "Jazeker! De agrarische sector is belangrijk in Barneveld. Wij reinigen schuren, loodsen, stallen en ook de woningen van agrarische ondernemers.",
  },
  {
    question: "Komt u ook in de buitengebieden en dorpen?",
    answer:
      "Ja, wij zijn actief in heel de gemeente Barneveld, inclusief Kootwijkerbroek, Stroe, Zwartebroek, Terschuur, Voorthuizen (deels) en Achterveld.",
  },
  {
    question: "Gebruikt u chemicaliën voor glasbewassing?",
    answer:
      "Nee, wij werken uitsluitend met osmosewater – 100% gedemineraliseerd water zonder chemicaliën. Dit is veilig voor uw planten, uw gezin en het milieu. Perfect voor de groene gemeente Barneveld.",
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
            Vragen over glasbewassing in Barneveld?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze diensten in
            Barneveld.
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
