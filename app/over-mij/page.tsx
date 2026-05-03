import Link from "next/link";
import { HandHeart, Leaf, FileCheck, Phone, Mail, ArrowRight, Check } from "lucide-react";
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
  { icon: HandHeart, title: "Persoonlijke aandacht", description: "Elke klant is uniek. Ik neem de tijd om te luisteren naar uw wensen en bied een oplossing op maat." },
  { icon: Leaf, title: "Duurzame oplossingen", description: "Ik werk met osmosewater, geen chemicaliën, alleen streeploos glas. Milieuvriendelijk en veilig." },
  { icon: FileCheck, title: "Transparantie", description: "Geen verrassingen. Heldere afspraken, vaste prijzen en eerlijke communicatie." },
];

export default function OverMijPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Maak kennis met uw glazenwasser uit Nijkerk</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Jarenlange ervaring, passie voor perfectie en een persoonlijke aanpak.</p>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/images/image(5).png" alt="Dominique" className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden lg:block">
                  <p className="text-gray-700 italic text-sm mb-3">&quot;Perfectie zit niet in één detail, maar in de zorg en aandacht die ik aan elk project geef.&quot;</p>
                  <p className="text-[#1a3a52] font-semibold text-sm">— Dominique</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Passie voor <span className="text-[#1a3a52]">streeploos glas</span></h2>
                <div className="space-y-4 text-gray-600 mb-8">
                  <p>Ik ben <strong>Dominique</strong>, eigenaar van D.T.G. Cleaning. Al jarenlang zet ik mij met passie en precisie in voor glasbewassing in Nijkerk en omgeving.</p>
                  <p>Mijn aanpak combineert traditioneel vakmanschap met moderne technieken zoals <strong>osmosewaterzuivering</strong>.</p>
                </div>

                <div className="bg-blue-50 border-l-4 border-[#1a3a52] rounded-r-xl p-6 mb-8">
                  <p className="text-gray-800 font-semibold mb-2">Voor de meeste opdrachten kom ik zelf bij u langs.</p>
                  <p className="text-gray-600">Bij grotere projecten werk ik samen met een vaste, ervaren collega uit mijn netwerk.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-[#1a3a52] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#2c4a66] flex items-center justify-center">
                    Neem contact op <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a href="tel:0634683019" className="border-2 border-[#1a3a52] text-[#1a3a52] rounded-full px-8 py-4 font-semibold hover:bg-[#1a3a52] hover:text-white flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" /> Bel direct: 06-34683019
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">MIJN WAARDEN</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Waar ik voor sta</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg">
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

        {/* Maak kennis met mij - sectie met groene vinkjes */}
        <section className="py-20 bg-[#1a3a52]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Maak kennis met mij</h2>
            <p className="text-lg text-white/80 mb-8">Heb je vragen of wil je vrijblijvend kennismaken?</p>
            
            {/* Voordelen met groene vinkjes */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="inline-flex items-center bg-white/10 text-white rounded-full px-4 py-2">
                <GreenCheck />
                <span className="ml-2">Persoonlijke service</span>
              </div>
              <div className="inline-flex items-center bg-white/10 text-white rounded-full px-4 py-2">
                <GreenCheck />
                <span className="ml-2">Vrijblijvend kennismaken</span>
              </div>
              <div className="inline-flex items-center bg-white/10 text-white rounded-full px-4 py-2">
                <GreenCheck />
                <span className="ml-2">Snelle reactie</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-[#1a3a52] rounded-full px-8 py-4 font-semibold hover:bg-gray-100 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" /> Neem contact op
              </Link>
              <a href="tel:0634683019" className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> Bel direct: 06-34683019
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white" />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
