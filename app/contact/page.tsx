"use client";

import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown, CheckCircle, AlertCircle, Loader2, MessageCircle, ShieldCheck } from "lucide-react";

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

export default function ContactPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const toggleFAQ = (index: number) => setOpenFAQ(openFAQ === index ? null : index);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Er is iets misgegaan. Probeer het nog eens of bel ons direct.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Er is een netwerkfout opgetreden. Bel ons gerust direct op 06-34683019.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero - SEO: zoekwoorden in H1 */}
      <section className="text-white py-16 md:py-24" style={{ backgroundColor: "#0e304d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Contact met D.T.G. Cleaning – glazenwasser in Nijkerk
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Heeft u vragen of wilt u een vrijblijvende offerte? 
            <strong> Wij reageren binnen 24 uur – vaak nog sneller.</strong>
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info + FAQ */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#0e304d" }}>
                Neem direct contact op
              </h2>
              <p className="text-gray-600 mb-6">
                Belt u liever? Wij zijn bereikbaar tijdens kantooruren. Of stuur een bericht – wij reageren snel.
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:+31634683019" 
                  className="flex items-center gap-3 text-gray-700 hover:text-[#0e304d] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#0e304d]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#0e304d]/20 transition-colors">
                    <Phone className="w-5 h-5" style={{ color: "#0e304d" }} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Bel ons direct</span>
                    <p className="font-semibold">06-34683019</p>
                  </div>
                </a>
                <a 
                  href="mailto:info@dtgcleaning.nl" 
                  className="flex items-center gap-3 text-gray-700 hover:text-[#0e304d] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#0e304d]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#0e304d]/20 transition-colors">
                    <Mail className="w-5 h-5" style={{ color: "#0e304d" }} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Stuur een e-mail</span>
                    <p className="font-semibold">info@dtgcleaning.nl</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-gray-700 group">
                  <div className="w-10 h-10 bg-[#0e304d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" style={{ color: "#0e304d" }} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Werkgebied</span>
                    <p className="font-semibold">Nijkerk & Putten, Gelderland</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700 group">
                  <div className="w-10 h-10 bg-[#0e304d]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" style={{ color: "#0e304d" }} />
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Openingstijden</span>
                    <p className="font-semibold">Ma - Vr: 07:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Werkgebied uitgebreid */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold mb-3 flex items-center gap-2" style={{ color: "#0e304d" }}>
                <MapPin className="w-5 h-5" style={{ color: "#0e304d" }} />
                Ook actief in deze plaatsen
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Nijkerk", "Putten", "Ermelo", "Harderwijk", "Barneveld", "Voorthuizen", "Leusden", "Amersfoort"].map((loc) => (
                  <span key={loc} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {loc}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-3">
                Woont u in een andere plaats? Neem contact op – wij komen graag in overleg.
              </p>
            </div>

            {/* Vertrouwenstoevoeging */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-green-800 font-semibold">100% vrijblijvend</p>
                <p className="text-sm text-green-700">
                  Geen verplichtingen, duidelijke prijzen en u betaalt pas na uitvoering.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#0e304d" }}>
                Veelgestelde vragen
              </h2>
              <p className="text-gray-600 mb-4 text-sm">
                Antwoorden op de meest gestelde vragen over glasbewassing en onze diensten.
              </p>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
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
          </div>

          {/* Formulier */}
          <div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-2xl font-bold mb-2" style={{ color: "#0e304d" }}>
                Vrijblijvende offerte aanvragen
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                Vul het formulier in en wij nemen binnen 24 uur contact met u op. Geen verplichtingen.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800">Bedankt voor uw bericht!</p>
                    <p className="text-green-700 text-sm">{statusMessage}</p>
                    <p className="text-green-700 text-sm mt-1">
                      Wij nemen zo snel mogelijk contact met u op.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800">Er is iets misgegaan</p>
                    <p className="text-red-700 text-sm">{statusMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Naam <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all" 
                    style={{ "--tw-ring-color": "#0e304d" } as React.CSSProperties} 
                    placeholder="Uw naam" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all" 
                      style={{ "--tw-ring-color": "#0e304d" } as React.CSSProperties} 
                      placeholder="uw@email.nl" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefoon <span className="text-gray-400 text-xs">(optioneel)</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all" 
                      style={{ "--tw-ring-color": "#0e304d" } as React.CSSProperties} 
                      placeholder="06-12345678" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Welke dienst zoekt u?
                  </label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all bg-white" 
                    style={{ "--tw-ring-color": "#0e304d" } as React.CSSProperties}
                  >
                    <option value="">Selecteer een dienst</option>
                    <option value="glasbewassing">Glasbewassing</option>
                    <option value="gevelreiniging">Gevelreiniging</option>
                    <option value="zonnepanelen">Zonnepanelen reiniging</option>
                    <option value="dakgoot">Dakgootreiniging</option>
                    <option value="vloeren">Bedrijfsvloeren reinigen</option>
                    <option value="overig">Overig</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Bericht <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5} 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all resize-none" 
                    style={{ "--tw-ring-color": "#0e304d" } as React.CSSProperties} 
                    placeholder="Vertel kort wat u nodig heeft, zoals: 'Ik ben op zoek naar een glazenwasser voor mijn woning in Nijkerk.'" 
                  />
                </div>

                <div className="text-xs text-gray-500 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Uw gegevens worden vertrouwelijk behandeld en niet aan derden verstrekt.
                  </span>
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"} 
                  className="w-full text-white font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" 
                  style={{ backgroundColor: "#0e304d" }}
                >
                  {status === "loading" ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Versturen...</>
                  ) : (
                    "Vrijblijvend offerte aanvragen"
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-sm">
                <span className="text-gray-500">Of bel direct:</span>
                <a href="tel:0634683019" className="font-semibold text-[#0e304d] hover:underline">
                  06-34683019
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Afsluitende CTA - warme afsluiting */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <MessageCircle className="w-12 h-12 text-[#0e304d] opacity-20" />
          </div>
          <h2 className="text-2xl font-bold text-[#0e304d] mb-2">
            Wij helpen u graag verder
          </h2>
          <p className="text-gray-600">
            Heeft u een vraag of wilt u een vrijblijvende offerte? 
            Bel, mail of stuur een bericht – wij reageren snel.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
