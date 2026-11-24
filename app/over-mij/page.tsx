import type { Metadata } from "next";
import Link from "next/link";
import {
  HandHeart,
  Leaf,
  FileCheck,
  Phone,
  Mail,
  ArrowRight,
  Check,
  Sparkles,
  Shield,
  Award,
} from "lucide-react";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

/* ✅ NIEUW: metadata voor /over-mij/ */
export const metadata: Metadata = {
  title: "Over Dominique",
  description:
    "Maak kennis met Dominique, uw vaste glazenwasser in Nijkerk en omgeving. Persoonlijke service, osmosewater-techniek en oog voor detail.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://dtgcleaning.nl/over-mij/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://dtgcleaning.nl/over-mij/",
    siteName: "D.T.G. Cleaning",
    title: "Over Dominique | D.T.G. Cleaning",
    description:
      "Maak kennis met Dominique, uw vaste glazenwasser in Nijkerk en omgeving.",
    images: [
      {
        url: "https://dtgcleaning.nl/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dominique – uw glazenwasser uit Nijkerk",
      },
    ],
  },
};

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
    description:
      "U bent geen nummer. Ik luister naar uw wensen en kom met een oplossing die écht bij u past. Geen standaardwerk, maar maatwerk.",
  },
  {
    icon: Leaf,
    title: "Duurzaam & veilig",
    description:
      "Ik werk uitsluitend met osmosewater – geen chemicaliën, geen strepen, alleen een stralend resultaat. Milieuvriendelijk en veilig voor u en uw omgeving.",
  },
  {
    icon: FileCheck,
    title: "Eerlijk & transparant",
    description:
      "Geen verrassingen achteraf. Heldere afspraken, vaste prijzen en open communicatie. U weet waar u aan toe bent.",
  },
];

export default function OverMijPage() {
  return (
    <>
      {/* Hero - SEO: zoekwoorden in H1 */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Uw glazenwasser uit Nijkerk – Dominique
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Jarenlange ervaring, passie voor perfectie en een persoonlijke
            aanpak.{" "}
            <strong>Uw ramen verdienen het beste.</strong>
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
                  &quot;Perfectie zit niet in één detail, maar in de zorg en
                  aandacht die ik aan elk project geef.&quot;
                </p>
                <p className="text-[#1a3a52] font-semibold text-sm">
                  — Dominique
                </p>
              </div>
            </div>

            <div>
              <span className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                OVER MIJ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Dominique – uw vaste{" "}
                <span className="text-[#1a3a52]">glazenwasser</span>
              </h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  Ik ben <strong>Dominique</strong>, eigenaar van D.T.G.
                  Cleaning. Al jarenlang zet ik mij met passie en precisie in
                  voor
                  <strong>
                    {" "}
                    glasbewassing in Nijkerk en omgeving
                  </strong>
                  .
                </p>
                <p>
                  Mijn aanpak combineert traditioneel vakmanschap met moderne
                  technieken zoals
                  <strong> osmosewater</strong>. Het resultaat?{" "}
                  <strong>Streeploos schone ramen</strong> die langer mooi
                  blijven – zonder chemicaliën en zonder gedoe.
                </p>
                <p>
                  Of u nu een <strong>particulier</strong> bent die zijn woning
                  wil laten stralen of een <strong>bedrijf</strong> dat kiest
                  voor een vast onderhoudscontract – ik sta voor u klaar.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#1a3a52] rounded-r-xl p-6 mb-8">
                <p className="text-gray-800 font-semibold mb-2">
                  💡 Persoonlijke service – altijd hetzelfde gezicht
                </p>
                <p className="text-gray-600">
                  Voor de meeste opdrachten kom ik zelf bij u langs. Bij grotere
                  projecten werk ik samen met een vaste, ervaren vakman. Zo
                  blijft de kwaliteit hoog en de communicatie helder.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[#1a3a52] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#2c4a66] transition-colors flex items-center justify-center"
                >
                  Vrijblijvend kennismaken{" "}
                  <ArrowRight className="w-5 h-5 ml-2" />
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
              Drie kernwaarden die bepalen hoe ik werk – en hoe u het resultaat
              merkt.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2
