"use client";

import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const faqs = [
  { question: "Bij welk weer kan glasbewassing niet doorgaan?", answer: "Glasbewassing kan niet doorgaan bij extreme weersomstandigheden zoals zware regenval, stormachtige wind (windkracht 6 of hoger), of onweer. Veiligheid staat altijd voorop." },
  { question: "Wat doet vorst met glasbewassing?", answer: "Bij temperaturen onder de -2°C werk ik niet meer. De schoonmaakmiddelen bevriezen op het glas en ladders worden glad." },
  { question: "Hoe vaak moet ik mijn ramen laten wassen?", answer: "Voor woningen 4 tot 6 keer per jaar. Voor bedrijfspanden elke 4 tot 8 weken, afhankelijk van de locatie." },
  { question: "Werkt u ook in het weekend?", answer: "Nee, in het weekend zijn wij gesloten." },
  { question: "Hoe kan ik een offerte aanvragen?", answer: "Via het contactformulier, e-mail of telefoon. Ik kom graag vrijblijvend bij u langs." },
  { question: "Wat zijn uw betaalvoorwaarden?", answer: "Wij factureren altijd achteraf. Voor eenmalige projecten en losse bestellingen ontvangt u een factuur met 14 dagen betaaltermijn. Voor vaste onderhoudscontracten volgt maandelijks een factuur, eveneens met 14 dagen betaaltermijn." },
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
        setStatusMessage(data.error || "Er is iets misgegaan.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Er is een netwerkfout opgetreden. Controleer uw verbinding.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="text-white py-16 md:py-24" style={{ backgroundColor: "#0e304d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Neem vrijblijvend contact op voor een offerte of vragen. Reactie binnen 24 uur gegarandeerd.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info + FAQ */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#0e304d" }}>Contactgegevens</h2>
              <div className="space-y-4">
                <a href="tel:+31634683019" className="flex items-center gap-3 text-gray-700 hover:text-[#0e304d] transition-colors">
                  <Phone className="w-5 h-5" style={{ color: "#0e304d" }} />
                  <span>+31 6 34683019</span>
                </a>
                <a href="mailto:info@dtgcleaning.nl" className="flex items-center gap-3 text-gray-700 hover:text-[#0e304d] transition-colors">
                  <Mail className="w-5 h-5" style={{ color: "#0e304d" }} />
                  <span>info@dtgcleaning.nl</span>
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5" style={{ color: "#0e304d" }} />
                  <span>Nijkerk & Putten, Gelderland</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5" style={{ color: "#0e304d" }} />
                  <span>Ma - Vr: 07:00 - 18:00</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold mb-3" style={{ color: "#0e304d" }}>Werkgebied</h3>
              <p className="text-gray-600 text-sm">Nijkerk, Putten, Ermelo, Harderwijk, Barneveld, Voorthuizen, Leusden, Amersfoort</p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#0e304d" }}>Veelgestelde vragen</h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${openFAQ === index ? "rotate-180" : ""}`} style={{ color: "#0e304d" }} />
                    </button>
                    {openFAQ === index && <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulier */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#0e304d" }}>Stuur een bericht</h2>

            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div><p className="font-semibold text-green-800">Verzonden!</p><p className="text-green-700 text-sm">{statusMessage}</p></div>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <div><p className="font-semibold text-red-800">Fout</p><p className="text-red-700 text-sm">{statusMessage}</p></div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam <span className="text-red-500">*</span></label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all" style={{ "--tw-ring-color": "#0e304d" } as React.CSSProperties} placeholder="Uw naam" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail <span className="text-red-500">*</span></label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all" style={{ "--tw-ring-color": "#0e304d" } as React.CSSProperties} placeholder="uw@email.nl" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefoon</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all" style={{ "--tw-ring-color": "#0e304d" } as React.CSSProperties} placeholder="06-12345678" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Dienst</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all bg-white" style={{ "--tw-ring-color": "#0e304d" } as React.CSSProperties}>
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Bericht <span className="text-red-500">*</span></label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent outline-none transition-all resize-none" style={{ "--tw-ring-color": "#0e304d" } as React.CSSProperties} placeholder="Vertel kort wat u nodig heeft..." />
              </div>

              <button type="submit" disabled={status === "loading"} className="w-full text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" style={{ backgroundColor: "#0e304d" }}>
                {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" />Versturen...</> : "Verstuur bericht"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
