"use client";

import React, { useState } from "react";
import { ChevronDown, Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

// Groen vinkje component voor consistentie
const GreenCheck = () => (
  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
    <Check className="w-3 h-3 text-white" />
  </div>
);

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 px-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
      >
        <span className="text-lg font-semibold text-[#1a3a52] pr-4">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-[#1a3a52] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 text-gray-600 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
};

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Bij welk weer kan glasbewassing niet doorgaan?",
      answer:
        "Glasbewassing kan niet doorgaan bij extreme weersomstandigheden zoals zware regenval, stormachtige wind (windkracht 6 of hoger), of onweer. Bij lichte regen is het vaak nog mogelijk om te werken, afhankelijk van de situatie. Veiligheid staat altijd voorop.",
    },
    {
      question: "Wat doet vorst met glasbewassing? Werkt u dan nog?",
      answer:
        "Bij temperaturen onder de -2°C werk ik niet meer. De schoonmaakmiddelen bevriezen op het glas, waardoor het resultaat niet optimaal is. Bovendien is het gevaarlijk om op ladders te werken bij vorst vanwege het risico op gladheid. Bij vorstwaarschuwing schuif ik afspraken daarom altijd naar een later moment.",
    },
    {
      question: "Hoe vaak moet ik mijn ramen laten wassen?",
      answer:
        "Dit hangt af van uw situatie. Voor de meeste woningen raad ik aan om de ramen 4 tot 6 keer per jaar te laten wassen. Bij bedrijfspanden of winkels kan dit vaker nodig zijn, bijvoorbeeld elke 4 tot 8 weken, afhankelijk van de locatie en het imago dat u wilt uitstralen.",
    },
    {
      question: "Werkt u ook in het weekend?",
      answer:
        "Ja, ik ben flexibel en werk ook op zaterdag. Voor bedrijven is dit vaak ideaal omdat het de bedrijfsvoering niet stoort. Op aanvraag is zondagwerk ook mogelijk. Neem gerust contact op om de mogelijkheden te bespreken.",
    },
    {
      question: "Hoe kan ik een offerte aanvragen?",
      answer:
        "U kunt eenvoudig een offerte aanvragen door het contactformulier in te vullen, een e-mail te sturen, of te bellen. Ik kom dan graag vrijblijvend bij u langs om de situatie te bekijken en een passende offerte op te stellen.",
    },
    {
      question: "Wat zijn uw betaalvoorwaarden?",
      answer:
        "Na uitvoering van de werkzaamheden ontvangt u een factuur met een betalingstermijn van 14 dagen. Bij vaste contracten kan er worden afgerekend per maand of per kwartaal, afhankelijk van uw voorkeur.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CONTACT
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Neem gerust contact op voor een vrijblijvende offerte of vragen
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-8">
                Contactgegevens
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a3a52] mb-1">
                      Telefoon
                    </h3>
                    <a
                      href="tel:+31634683019"
                      className="text-gray-600 hover:text-[#1a3a52] transition-colors"
                    >
                      +31 6 34683019
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a3a52] mb-1">
                      E-mail
                    </h3>
                    <a
                      href="mailto:info@dtgcleaning.nl"
                      className="text-gray-600 hover:text-[#1a3a52] transition-colors"
                    >
                      info@dtgcleaning.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a3a52] mb-1">
                      Werkgebied
                    </h3>
                    <p className="text-gray-600">
                      Nijkerk, Putten, Ermelo, Harderwijk<br />
                      Barneveld, Voorthuizen, Leusden, Amersfoort
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a3a52] mb-1">
                      Openingstijden
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Maandag - Vrijdag: 07:00 - 18:00</p>
                      <p>Zaterdag: 09:00 - 14:00</p>
                      <p>Zondag: Gesloten</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.1234567890123!2d5.4868!3d52.2233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c64f1234567890%3A0x1234567890abcdef!2sNijkerk!5e0!3m2!1snl!2snl!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie D.T.G. Cleaning"
                />
              </div>
            </div>


            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-8">
                Stuur een bericht
              </h2>

              <form
                action="https://formspree.io/f/xkoppjdk"
                method="POST"
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent transition-all"
                      placeholder="Uw naam"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent transition-all"
                      placeholder="uw@email.nl"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent transition-all"
                      placeholder="06 34683019"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Onderwerp *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent transition-all"
                    >
                      <option value="">Kies een onderwerp</option>
                      <option value="offerte">Offerte aanvragen</option>
                      <option value="glasbewassing">Glasbewassing</option>
                      <option value="gevelreiniging">Gevelreiniging</option>
                      <option value="zonnepanelen">Zonnepanelen reiniging</option>
                      <option value="dakgoot">Dakgootreiniging</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Bericht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a3a52] focus:border-transparent transition-all resize-none"
                      placeholder="Typ hier uw bericht..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a3a52] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#2c4a66] transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Verstuur bericht
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-gray-600 text-lg">
              Hieronder vindt u antwoorden op de meest gestelde vragen
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}
