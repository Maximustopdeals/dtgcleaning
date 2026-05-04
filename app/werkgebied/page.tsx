import Link from "next/link";
import { MapPin, Check, Phone, Mail, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function WerkgebiedPage() {
  const steden = [
    { 
      name: "Nijkerk", 
      slug: "nijkerk", 
      distance: "0 km", 
      description: "Hoofdlocatie, al jaren actief. Reguliere routes en vaste klanten.",
      image: "/images/nijkerk.jpg"
    },
    { 
      name: "Putten", 
      slug: "putten", 
      distance: "8 km", 
      description: "Regelmatig actief, vaste klantenkring. Wekelijks routes langs Krachtighuizen en Diermen.",
      image: "/images/putten.jpg"
    },
    { 
      name: "Harderwijk", 
      slug: "harderwijk", 
      distance: "15 km", 
      description: "Grote stad, veel potentie. Actief in centrum, Stadsdennen en Frankrijk.",
      image: "/images/harderwijk.jpg"
    },
    { 
      name: "Barneveld", 
      slug: "barneveld", 
      distance: "12 km", 
      description: "Groeiend werkgebied. Wekelijks routes richting centrum en Veller.",
      image: "/images/barneveld.jpg"
    },
    { 
      name: "Ermelo", 
      slug: "ermelo", 
      distance: "10 km", 
      description: "Actief in heel Ermelo. Regelmatige routes naar Horst en Tonsel.",
      image: "/images/ermelo.jpg"
    },
    { 
      name: "Voorthuizen", 
      slug: "voorthuizen", 
      distance: "9 km", 
      description: "Dorp tussen Nijkerk en Barneveld. Wekelijks routes langs Gerverscop.",
      image: "/images/voorthuizen.jpg"
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Ons werkgebied in Gelderland
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              D.T.G. Cleaning is actief in Nijkerk en omliggende plaatsen. 
              Professionele glasbewassing, gevelreiniging en zonnepanelen reiniging in de hele regio.
            </p>
          </div>
        </section>

        {/* Introductie */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="prose prose-lg text-gray-600 mx-auto">
              <p className="lead">
                <strong>D.T.G. Cleaning</strong> is niet alleen uw glazenwasser in <strong>Nijkerk</strong>, 
                maar ook actief in <strong>Putten, Harderwijk, Barneveld, Ermelo en Voorthuizen</strong>. 
                Met jarenlange ervaring en een bewezen aanpak zorgen wij voor streeploos schone ramen, 
                gevels en zonnepanelen in de hele regio Gelderland.
              </p>
              <p>
                Onze <strong>telewash-techniek</strong> met osmosewater maakt het mogelijk om ook op hoogte 
                tot 13,5 meter veilig en efficiënt te reinigen. Of u nu een particulier bent met een 
                rijtjeshuis of een bedrijf met een groot kantoorpand, wij zorgen voor een professioneel resultaat.
              </p>
              <p>
                Hieronder vindt u een overzicht van de plaatsen waar wij actief zijn. Klik op uw woonplaats 
                voor meer informatie over de diensten die wij in uw omgeving aanbieden.
              </p>
            </div>
          </div>
        </section>

        {/* Grid van steden */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#1a3a52] text-center mb-12">
              Actief in deze plaatsen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steden.map((stad) => (
                <Link 
                  key={stad.slug} 
                  href={`/werkgebied/${stad.slug}`}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all group border border-gray-100"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <MapPin className="w-5 h-5 text-[#1a3a52] mr-2" />
                        <h3 className="text-xl font-bold text-[#1a3a52]">{stad.name}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{stad.distance} vanaf Nijkerk</p>
                      <p className="text-gray-600 text-sm">{stad.description}</p>
                    </div>
                    <div className="text-[#1a3a52] group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Waarom D.T.G. Cleaning in de regio */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Waarom D.T.G. Cleaning in de regio?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-800">Vaste planning</strong>
                      <p className="text-gray-600 text-sm">Vaste dag, vaste glazenwasser in de hele regio</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-800">Streeploos gegarandeerd</strong>
                      <p className="text-gray-600 text-sm">Osmosewater voor een perfect resultaat</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-800">Aansprakelijkheidsverzekerd</strong>
                      <p className="text-gray-600 text-sm">Volledig verzekerd voor uw gemoedsrust</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-800">Duurzame reiniging</strong>
                      <p className="text-gray-600 text-sm">Milieuvriendelijk zonder chemicaliën</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-[#1a3a52] mb-4">Regio in cijfers</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Actieve plaatsen</span>
                    <span className="font-bold text-[#1a3a52] text-xl">6</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Reikwijdte</span>
                    <span className="font-bold text-[#1a3a52]">Tot 15 km</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Gemiddelde reactietijd</span>
                    <span className="font-bold text-[#1a3a52]">&lt; 24 uur</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-gray-600">Tevreden klanten</span>
                    <span className="font-bold text-[#1a3a52]">100+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1a3a52]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Direct een offerte voor uw regio?
            </h2>
            <p className="text-lg text-white/80 mb-8">Vrijblijvend, snel en helder.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-[#1a3a52] rounded-full px-8 py-4 font-semibold hover:bg-gray-100 transition-all flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" /> Offerte aanvragen
              </Link>
              <a href="tel:0634683019" className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> 06-34683019
              </a>
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
