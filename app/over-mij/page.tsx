import Link from "next/link";
import { HandHeart, Leaf, FileCheck, Phone, Mail, ArrowRight, Check, Sparkles, Shield, Award } from "lucide-react";
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

// Groen vinkje met label component
const GreenCheckLabel = ({ label }: { label: string }) => (
  <div className="inline-flex items-center bg-green-100 text-green-700 rounded-full px-3 py-1 text-sm font-medium">
    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-2">
      <Check className="w-2.5 h-2.5 text-white" />
    </div>
    {label}
  </div>
);

const values = [
  { 
    icon: HandHeart, 
    title: "Persoonlijke aandacht", 
    description: "U bent geen nummer. Ik luister naar uw wensen en kom met een oplossing die écht bij u past. Geen standaardwerk, maar maatwerk." 
  },
  { 
    icon: Leaf, 
    title: "Duurzaam & veilig", 
    description: "Ik werk uitsluitend met osmosewater – geen chemicaliën, geen strepen, alleen een stralend resultaat. Milieuvriendelijk en veilig voor u en uw omgeving." 
  },
  { 
    icon: FileCheck, 
    title: "Eerlijk & transparant", 
    description: "Geen verrassingen achteraf. Heldere afspraken, vaste prijzen en open communicatie. U weet waar u aan toe bent." 
  },
];

export default function OverMijPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero - SEO: zoekwoorden in H1 */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Uw glazenwasser uit Nijkerk – Dominique
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Jarenlange ervaring, passie voor perfectie en een persoonlijke aanpak. 
              <strong> Uw ramen verdienen het beste.</strong>
            </p>
          </div>
        </section>

        {/* Over mij - hoofdcontent */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/image(5).png" 
                    alt="Dominique – uw glazenwasser in Nijkerk" 
                    className="w-full h-auto" 
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden lg:block">
                  <p className="text-gray-700 italic text-sm mb-3">
                    &quot;Perfectie zit niet in één detail, maar in de zorg en aandacht die ik aan elk project geef.&quot;
                  </p>
                  <p className="text-[#1a3a52] font-semibold text-sm">— Dominique</p>
                </div>
              </div>

              <div>
                <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                  OVER MIJ
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Dominique – uw vaste <span className="text-[#1a3a52]">glazenwasser</span>
                </h2>
                <div className="space-y-4 text-gray-600 mb-8">
                  <p>
                    Ik ben <strong>Dominique</strong>, eigenaar van D.T.G. Cleaning. Al jarenlang zet ik mij met passie en precisie in voor 
                    <strong> glasbewassing in Nijkerk en omgeving</strong>.
                  </p>
                  <p>
                    Mijn aanpak combineert traditioneel vakmanschap met moderne technieken zoals 
                    <strong> osmosewater</strong>. Het resultaat? <strong>Streeploos schone ramen</strong> die langer mooi blijven – 
                    zonder chemicaliën en zonder gedoe.
                  </p>
                  <p>
                    Of u nu een <strong>particulier</strong> bent die zijn woning wil laten stralen of een <strong>bedrijf</strong> 
                    dat kiest voor een vast onderhoudscontract – ik sta voor u klaar.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#1a3a52] rounded-r-xl p-6 mb-8">
                  <p className="text-gray-800 font-semibold mb-2">
                    💡 Persoonlijke service – altijd hetzelfde gezicht
                  </p>
                  <p className="text-gray-600">
                    Voor de meeste opdrachten kom ik zelf bij u langs. Bij grotere projecten werk ik samen met 
                    een vaste, ervaren collega. Zo blijft de kwaliteit hoog en de communicatie helder.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-[#1a3a52] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#2c4a66] transition-colors flex items-center justify-center"
                  >
                    Vrijblijvend kennismaken <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a 
                    href="tel:0634683019" 
                    className="border-2 border-[#1a3a52] text-[#1a3a52] rounded-full px-8 py-4 font-semibold hover:bg-[#1a3a52] hover:text-white transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" /> 06-34683019
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Waarden sectie */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                MIJN WAARDEN
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Waar ik voor sta als uw glazenwasser
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Drie kernwaarden die bepalen hoe ik werk – en hoe u het resultaat merkt.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-[#1a3a52]/10 rounded-2xl flex items-center justify-center mb-6">
                    <v.icon className="w-7 h-7 text-[#1a3a52]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-gray-600">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waarom D.T.G. Cleaning - extra overtuigingskracht */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                WAAROM D.T.G. CLEANING
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Waarom u voor mij kiest
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Vier redenen waarom klanten in Nijkerk en omgeving al jaren voor mij kiezen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Streeploos resultaat</h3>
                <p className="text-gray-600 text-sm">
                  Osmosewater-techniek voor glas dat er dagenlang perfect uitziet.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Veilig & verzekerd</h3>
                <p className="text-gray-600 text-sm">
                  Volledig aansprakelijkheidsverzekerd. Uw pand is in veilige handen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Vaste kwaliteit</h3>
                <p className="text-gray-600 text-sm">
                  Vaste glazenwasser, vaste dag. Geen verrassingen, wel resultaat.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">Persoonlijke service</h3>
                <p className="text-gray-600 text-sm">
                  Ik neem de tijd voor u. Geen haastwerk, maar aandacht voor detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - WITTE ACHTERGROND met blauwe banner (geen verwarring met footer!) */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-[#1a3a52] rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Klaar voor streeploos schone ramen?
              </h2>
              <p className="text-white/80 mb-6">
                Neem vrijblijvend contact op – ik kom graag langs voor een kennismaking.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="inline-flex items-center bg-white/10 text-white rounded-full px-4 py-2 text-sm">
                  <GreenCheck />
                  <span className="ml-2">Persoonlijke service</span>
                </div>
                <div className="inline-flex items-center bg-white/10 text-white rounded-full px-4 py-2 text-sm">
                  <GreenCheck />
                  <span className="ml-2">Vrijblijvend kennismaken</span>
                </div>
                <div className="inline-flex items-center bg-white/10 text-white rounded-full px-4 py-2 text-sm">
                  <GreenCheck />
                  <span className="ml-2">Snelle reactie</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-[#1a3a52] rounded-full px-8 py-4 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" /> Vrijblijvend offerte aanvragen
                </Link>
                <a 
                  href="tel:0634683019" 
                  className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" /> 06-34683019
                </a>
              </div>
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
