import Link from "next/link";
import { Phone, Check, Droplets, Building2, Sun, Home as HomeIcon, TrendingDown, Award, UserCheck, Leaf, Settings, Mail, MapPin, HelpCircle, ArrowRight } from "lucide-react";
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

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center hero-gradient pt-20">
          <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Glazenwasser Nijkerk</h1>
                <p className="text-xl text-white/90 mb-4">Streeploos, Betrouwbaar & Snel</p>
                <p className="text-lg text-white/80 mb-8">
                  Glazenwasser in Nijkerk nodig? Professionele glasbewassing voor bedrijven en woningen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center">
                    <Check className="w-5 h-5 mr-2" /> Gratis offerte
                  </Link>
                  <a href="tel:0634683019" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 rounded-full px-8 py-4 font-semibold flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" /> 06-34683019
                  </a>
                </div>
              </div>
              <div className="hidden lg:block glass-effect rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Waarom D.T.G. Cleaning?</h3>
                <div className="space-y-4">
                  {["Vaste planning", "Streeploos gegarandeerd", "Aansprakelijkheidsverzekerd"].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-white font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waarom */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Waarom <span className="text-[#1a3a52]">bedrijven én particulieren</span> voor D.T.G. Cleaning kiezen
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Droplets, title: "Kristalhelder resultaat", desc: "Osmose-techniek voor streeploos, chemievrij glas.", tag: "Zakelijk" },
                { icon: Building2, title: "Veilig & efficiënt op hoogte", desc: "Telewash-systemen tot 13,5 meter hoogte.", tag: "Zakelijk" },
                { icon: Sun, title: "Vaste planning & SLA", desc: "Vaste glazenwasser, vaste dag en SLA op maat.", tag: "Zakelijk" },
                { icon: HomeIcon, title: "Flexibel & betaalbaar voor thuis", desc: "Schonere ramen voor jouw woning.", tag: "Particulier" },
              ].map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#1a3a52]/10 rounded-xl flex items-center justify-center mr-4">
                      <f.icon className="w-6 h-6 text-[#1a3a52]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#2c4a66] uppercase">{f.tag}</span>
                      <h3 className="text-xl font-bold">{f.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ons Werk */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm font-semibold mb-6">ONS WERK</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Van glasbewassing tot gevelreiniging</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Of het nu gaat om het periodiek reinigen van uw ramen, het herstellen van uw gevel of het onderhoud van uw zonnepanelen.
                </p>
                <ul className="space-y-4 mb-10">
                  {["Glasbewassing met osmosewater — streeploos", "Gevelreiniging op hoogte met hoogwerker", "Zonnepanelen reinigen voor optimaal rendement", "Dakgootreiniging tegen waterschade"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <GreenCheck />
                      <span className="text-gray-700 ml-3">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/schoonmaakdiensten" className="inline-flex items-center bg-[#1a3a52] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#2c4a66]">
                  Bekijk al mijn diensten <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/bedrijfspand.png" alt="Bedrijfspand" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Vaste Contracten */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">VASTE CONTRACTEN</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Waarom een abonnement voor uw bedrijf loont</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: TrendingDown, title: "Tot 20% kostenbesparing", desc: "Lagere tarieven door vaste afspraken." },
                { icon: Award, title: "Altijd representatief", desc: "Structureel schoon glas is uw visitekaartje." },
                { icon: UserCheck, title: "Volledige ontzorging", desc: "Ik plan, reinig en rapporteer altijd volgens afspraak." },
                { icon: Leaf, title: "Milieuvriendelijk", desc: "Uitsluitend osmosewater, geen chemicaliën." },
              ].map((v, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-50 rounded-2xl p-6 max-w-sm">
                <div className="w-12 h-12 bg-[#1a3a52] rounded-xl flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Flexibel & op maat</h3>
                <p className="text-gray-600 text-sm">Uw bedrijf is uniek. Ik stem frequentie en diensten af op uw wensen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Structureel */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Klaar voor structurele reiniging?</h2>
            <p className="text-lg text-gray-600 mb-10">Vraag vrijblijvend een voorstel op maat aan.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-[#1a3a52] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#2c4a66] flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" /> Vrijblijvend voorstel aanvragen
              </Link>
              <a href="tel:0634683019" className="border-2 border-[#1a3a52] text-[#1a3a52] rounded-full px-8 py-4 font-semibold hover:bg-[#1a3a52] hover:text-white flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> Bel direct voor advies
              </a>
            </div>
          </div>
        </section>

        {/* Werkgebied */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm font-semibold mb-4">ONZE REGIO</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Actief in <span className="text-[#1a3a52]">Gelderland</span></h2>
            </div>
            <div className="border border-gray-200 rounded-3xl p-8 lg:p-10 mb-8">
              <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Gelderland</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Nijkerk", "Putten", "Ermelo", "Harderwijk", "Barneveld", "Voorthuizen", "Leusden", "Amersfoort"].map((loc, i) => (
                  <div key={i} className="flex items-center">
                    <GreenCheck />
                    <span className="text-gray-700 ml-2">{loc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center text-gray-600">
                <HelpCircle className="w-5 h-5 mr-2 text-[#1a3a52]" />
                <span>Staat uw gebied er niet bij? Neem dan contact met ons op.</span>
              </div>
            </div>
            <div className="text-center">
              <Link href="/contact" className="inline-flex items-center bg-[#1a3a52] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#2c4a66]">
                <Mail className="w-5 h-5 mr-2" /> Contact opnemen <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
