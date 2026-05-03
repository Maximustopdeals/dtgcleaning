import Link from "next/link";
import { Check, ArrowRight, Phone, Sparkles, Building2, Sun, Droplets, Shield, Calendar, TrendingUp } from "lucide-react";
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

const benefits = ["Vaste planning & SLA", "Streeploos gegarandeerd", "Aansprakelijkheidsverzekerd", "Duurzame reiniging"];

const diensten = [
  {
    icon: Sparkles, title: "Glasbewassing", subtitle: "Zakelijk & Particulier",
    description: "Professionele glasbewassing voor bedrijven en woningen. Met onze telewash-techniek kunnen we tot 13,5 meter hoogte werken zonder steiger.",
    features: ["Telewash systeem tot 13,5 meter", "Osmosewater techniek - streeploos resultaat", "Zonder chemicaliën - milieuvriendelijk", "Vaste planning mogelijk", "Ook voor VvE's en scholen"],
    image: "/images/image(7).png",
  },
  {
    icon: Building2, title: "Gevelreiniging", subtitle: "Voor elk pandtype",
    description: "Herstel de uitstraling van uw pand met professionele gevelreiniging. We verwijderen algen, mos, vuil en graffiti.",
    features: ["Hogedruk reiniging", "Algen en mos verwijderen", "Graffiti verwijdering", "Alle geveltypes", "Duurzaam resultaat"],
    image: "/images/image(4).png",
  },
  {
    icon: Sun, title: "Zonnepanelen Reinigen", subtitle: "Maximaal rendement",
    description: "Houd uw zonnepanelen schoon voor optimaal rendement. Vuil en stof kunnen de opbrengst met 10-20% verminderen.",
    features: ["Rendementsverbetering", "Veilige reinigingsmethode", "Osmosewater techniek", "Periodiek onderhoud", "Schadepreventie"],
    image: "/images/image(7).png",
  },
  {
    icon: Droplets, title: "Dakgootreiniging", subtitle: "Voorkom waterschade",
    description: "Voorkom verstoppingen en waterschade met regelmatige dakgootreiniging. Wij verwijderen bladeren, mos en ander vuil.",
    features: ["Verstoppingen voorkomen", "Waterschade preventie", "Grondige reiniging", "Inspectie inbegrepen", "Ook voor platte daken"],
    image: "/images/dakgootreiniging.jpg",
  },
];

export default function SchoonmaakdienstenPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Schoonmaakbedrijf Nijkerk</h1>
            <p className="text-xl text-white/90 mb-4">Professioneel & Betrouwbaar</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              D.T.G. Cleaning verzorgt professionele schoonmaakdiensten, glasbewassing en gevelreiniging.
            </p>
          </div>
        </section>

        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center text-[#1a3a52]">
                <GreenCheck />
                <span className="font-medium ml-2">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {diensten.map((d, i) => (
          <section key={i} className={`py-20 ${i % 2 === 1 ? "bg-gray-50" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img src={d.image} alt={d.title} className="w-full h-80 object-cover" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-[#1a3a52] rounded-2xl flex items-center justify-center mr-4">
                      <d.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#2c4a66]">{d.subtitle}</span>
                      <h2 className="text-2xl lg:text-3xl font-bold">{d.title}</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{d.description}</p>
                  <ul className="space-y-3 mb-8">
                    {d.features.map((f, j) => (
                      <li key={j} className="flex items-center text-gray-700">
                        <GreenCheck />
                        <span className="ml-3">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center bg-[#1a3a52] text-white rounded-full px-6 py-3 font-semibold hover:bg-[#2c4a66]">
                    Offerte aanvragen <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-12 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl py-6 px-8 text-center">
              <p className="text-lg text-gray-700 flex items-center justify-center flex-wrap gap-2">
                <GreenCheck />
                <span className="ml-2">Alle diensten worden uitgevoerd met <span className="font-bold text-[#1a3a52]">osmosewater</span> — streeploos, chemievrij en milieuvriendelijk</span>
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">WAAROM D.T.G. CLEANING</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Bedrijven én particulieren<br />vertrouwen op onze aanpak</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                D.T.G. Cleaning is hét schoonmaakbedrijf in Nijkerk en omgeving voor bedrijven, VvE&apos;s en particulieren die kiezen voor kwaliteit en betrouwbaarheid.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Streeploos resultaat</h3>
                <p className="text-gray-600 mb-4">Osmose-techniek voor 100% streeploos en chemievrij glas. Perfect voor representatieve bedrijfspanden en kantoren.</p>
                <GreenCheckLabel label="Zakelijk" />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Veilig & efficiënt op hoogte</h3>
                <p className="text-gray-600 mb-4">Telewash-systemen tot 13,5 meter hoogte. Geen steiger of hoogwerker. Minimale verstoring van uw werkzaamheden.</p>
                <GreenCheckLabel label="Zakelijk" />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vaste planning & SLA</h3>
                <p className="text-gray-600 mb-4">Vaste glazenwasser, vaste dag en Service Level Agreement op maat. U weet waar u aan toe bent, wij garanderen continuïteit.</p>
                <GreenCheckLabel label="Zakelijk" />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Volledig verzekerd</h3>
                <p className="text-gray-600 mb-4">Aansprakelijkheidsverzekerd en gecertificeerd. Uw pand en uw medewerkers zijn altijd gedekt.</p>
                <GreenCheckLabel label="Zakelijk" />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <Sun className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Flexibel & betaalbaar voor thuis</h3>
                <p className="text-gray-600 mb-4">Schonere ramen voor jouw woning, met een vast aanspreekpunt.</p>
                <GreenCheckLabel label="Ook voor particulieren" />
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
