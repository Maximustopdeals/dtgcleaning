import Link from "next/link";
import { 
  Phone, Check, MapPin, Clock, Mail, Sparkles, Building2, Sun, Droplets, 
  Shield, Calendar, TrendingUp, Award, Home, Users, Building, School, 
  Baby, Briefcase, Trees, Bike, ArrowRight 
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function GlazenwasserErmelo() {
  // JSON-LD voor lokale SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "D.T.G. Cleaning - Glazenwasser Ermelo",
    "image": "https://dtgcleaning.nl/images/logo.png",
    "telephone": "+31 6 34683019",
    "email": "info@dtgcleaning.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ermelo",
      "addressRegion": "Gelderland",
      "addressCountry": "NL"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 07:00-18:00",
    "areaServed": "Ermelo en omgeving",
    "url": "https://dtgcleaning.nl/werkgebied/ermelo"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main>
        
        {/* Hero Sectie */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Glazenwasser Ermelo
            </h1>
            <p className="text-xl text-white/90 mb-4">Professionele glasbewassing in Ermelo en omgeving</p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Op zoek naar een betrouwbare <strong className="text-white">glazenwasser in Ermelo</strong>? 
              D.T.G. Cleaning zorgt voor streeploos schone ramen, gevelreiniging en zonnepanelen reiniging 
              voor zowel particulieren als bedrijven in heel Ermelo en de omliggende bossen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-4 font-semibold transition-all flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" /> Gratis offerte
              </Link>
              <a href="tel:0634683019" className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> Bel direct: 06-34683019
              </a>
            </div>
          </div>
        </section>

        {/* Introductie - Waarom D.T.G. Cleaning in Ermelo */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Uw vaste glazenwasser in Ermelo
                </h2>
                <p className="text-gray-600 mb-4">
                  Woon of werk je in het groene <strong>Ermelo</strong> en ben je op zoek naar een 
                  <strong> betrouwbare glazenwasser</strong>? D.T.G. Cleaning is actief in deze 
                  bosrijke gemeente en staat bekend om kwaliteit, stiptheid en een persoonlijke aanpak.
                </p>
                <p className="text-gray-600 mb-6">
                  Of je nu een <strong>particulier</strong> bent met een woning nabij het bos, 
                  een <strong>bedrijf</strong> in het centrum, een <strong>VvE</strong> 
                  in de nieuwbouwwijken, of een <strong>school, winkel of zorginstelling</strong> - 
                  wij zorgen voor streeploos schone ramen met onze geavanceerde osmosewater-techniek.
                </p>
                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                  <p className="text-gray-700 italic">
                    "Ermelo is een prachtige bosgemeente waar ik met veel plezier werk. De rust en 
                      natuur maken het werken hier extra aangenaam."
                  </p>
                  <p className="text-[#1a3a52] font-semibold mt-2">— Dominique, eigenaar D.T.G. Cleaning</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#1a3a52] mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Werkgebied Ermelo
                </h3>
                <p className="text-gray-600 mb-4">
                  Wij zijn actief in heel Ermelo en omgeving, inclusief:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div>🏠 Centrum Ermelo</div>
                  <div>🏠 Horst</div>
                  <div>🏠 Tonsel</div>
                  <div>🏠 Veldwijk</div>
                  <div>🏠 Stakenberg</div>
                  <div>🏠 Ermelosche Heide</div>
                  <div>🏠 Telgt</div>
                  <div>🏠 Leuvenum</div>
                  <div>🏠 Drieënhuizen</div>
                  <div>🏠 Houtdorp</div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <strong>📍 Afstand vanaf Nijkerk:</strong> 10 km — wekelijks routes
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>🌲 Bijzonderheid:</strong> Specialist in bosrandwoningen en landelijke panden
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alle Diensten in Ermelo */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Onze schoonmaakdiensten in Ermelo
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Van glasbewassing tot gevelreiniging - wij bieden een compleet pakket aan 
                <strong> professionele schoonmaakdiensten</strong> voor zowel particulieren als bedrijven 
                in Ermelo.
              </p>
            </div>

            {/* Glasbewassing */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#2c4a66]">Streeploos resultaat</span>
                  <h3 className="text-2xl font-bold">Glasbewassing & Telescoopbewassing</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Als <strong>glazenwasser in Ermelo</strong> maken wij gebruik van de modernste technieken. 
                Onze <strong>telescoopbewassing</strong> maakt het mogelijk om ook hoge ramen en gevels 
                tot 13,5 meter hoogte veilig en efficiënt te reinigen. Dit is ideaal voor de 
                karakteristieke panden in Ermelo en de moderne woningen in Horst en Tonsel.
              </p>
              <p className="text-gray-600 mb-4">
                Wij werken uitsluitend met <strong>osmosewater</strong> - 100% gedemineraliseerd water 
                zonder chemicaliën. Dit zorgt voor een <strong>streeploos resultaat</strong> en is 
                volledig <strong>milieuvriendelijk</strong>. Perfect voor de bosrijke omgeving van Ermelo.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Telewash tot 13,5 meter</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Osmosewater techniek</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Streeploos gegarandeerd</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Chemievrij & veilig</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Vaste planning mogelijk</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Specialist in bosrandwoningen</div>
              </div>
            </div>

            {/* Gevelreiniging */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mr-4">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#2c4a66]">Frisse uitstraling</span>
                  <h3 className="text-2xl font-bold">Gevelreiniging</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Een <strong>schone gevel</strong> is het visitekaartje van uw woning of bedrijf. 
                In Ermelo, met zijn prachtige bosrijke omgeving, hechten veel mensen waarde aan een 
                verzorgde uitstraling. Wij verwijderen <strong>algen, mos, vuil</strong> en andere 
                vervuilingen van alle geveltypes.
              </p>
              <p className="text-gray-600 mb-4">
                Door de ligging nabij bossen hebben gevels in Ermelo sneller last van algengroei en mos. 
                Onze <strong>gevelreiniging</strong> pakt dit effectief aan en verlengt de levensduur 
                van uw gevel. Speciaal voor houten gevels, die veel voorkomen in de bosrijke gebieden, 
                hebben wij de juiste zachte reinigingsmethode.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Algen en mos verwijderen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Specialist in bosgebieden</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Alle geveltypes</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Zachte reiniging voor hout</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor landelijke panden</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Duurzaam resultaat</div>
              </div>
            </div>

            {/* Zonnepanelen Reinigen */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mr-4">
                  <Sun className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#2c4a66]">Maximaal rendement</span>
                  <h3 className="text-2xl font-bold">Zonnepanelen Reinigen</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Veel huizen en bedrijven in Ermelo hebben zonnepanelen, mede dankzij de gunstige ligging 
                en het milieubewuste karakter van de gemeente. Wist u dat vervuilde 
                <strong> zonnepanelen</strong> tot <strong>20% minder energie</strong> opwekken?
              </p>
              <p className="text-gray-600 mb-4">
                Onze <strong>zonnepanelen reiniging</strong> maakt gebruik van osmosewater en zachte 
                borstels die de panelen niet beschadigen. U merkt het verschil direct in uw energieopbrengst. 
                Regelmatig onderhoud verlengt bovendien de levensduur van uw investering.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Tot 20% meer rendement</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Veilige reinigingsmethode</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Osmosewater techniek</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Periodiek onderhoud</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Schadepreventie</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor recreatiewoningen</div>
              </div>
            </div>

            {/* Dakgootreiniging */}
            <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm hover:shadow-md transition">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mr-4">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#2c4a66]">Voorkom waterschade</span>
                  <h3 className="text-2xl font-bold">Dakgootreiniging</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                In een bosrijke gemeente als Ermelo, met veel bomen en groen, kunnen dakgoten snel 
                verstopt raken door bladeren, mos en ander vuil. Verstopte <strong>dakgoten</strong> 
                zijn een van de meest voorkomende oorzaken van <strong>waterschade</strong> aan woningen 
                en bedrijfspanden.
              </p>
              <p className="text-gray-600 mb-4">
                Onze grondige <strong>dakgootreiniging</strong> verwijdert al het vuil en controleert 
                tegelijkertijd de staat van uw goten en afvoeren. Voor de vele vrijstaande woningen 
                en landelijke panden in Ermelo is dit een essentiële service, vooral na de herfst.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Verstoppingen voorkomen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Waterschade preventie</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Grondige reiniging</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Inspectie inbegrepen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor vrijstaande woningen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Bladval seizoen specialisten</div>
              </div>
            </div>
          </div>
        </section>

        {/* Doelgroepen - Ermelo specifiek */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Onze diensten in Ermelo zijn geschikt voor
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Van de dorpskern tot de bosranden - D.T.G. Cleaning biedt maatwerkoplossingen 
                voor iedereen in Ermelo.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Bedrijven & Zorg */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52]">Bedrijven & Zorg</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Winkels & Boetieks</strong> - Uitnodigende etalages</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Horeca & Lunchrooms</strong> - Uitstraling in het centrum</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Kantoren</strong> - Representatief voor klanten</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Zorginstellingen</strong> - Hygiëne en uitstraling</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>VvE's</strong> - Gezamenlijke aanpak voor complexen</span></li>
                </ul>
              </div>

              {/* Particulieren & Recreatie */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Trees className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52]">Particulieren & Recreatie</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Centrum Ermelo</strong> - Historische panden specialist</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Horst & Tonsel</strong> - Moderne gezinswoningen</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Bosrandwoningen</strong> - Specialisten in landelijke panden</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Recreatiewoningen</strong> - Ook voor vakantiehuizen</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Scholen & Kindcentra</strong> - Veilige en schone omgeving</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Telescoopbewassing - Speciaal voor Ermelo */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    Ideaal voor Ermelo
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
                    Telescoopbewassing voor uw woning
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Of u nu een vrijstaande woning aan de bosrand heeft, een appartement in Horst 
                    of een recreatiewoning - onze <strong>telescoopbewassing</strong> maakt het mogelijk 
                    om tot 13,5 meter hoogte te werken zonder dure steigers of hoogwerker.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Dit bespaart u niet alleen kosten, maar zorgt ook voor minimale overlast. 
                    Voor de vele bosrandwoningen en landelijke panden in Ermelo is dit een ideale 
                    oplossing.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Geen steiger nodig</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Geen hoogwerker nodig</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Minder overlast</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Lagere kosten</div>
                  </div>
                </div>
                <div className="flex-1 text-center bg-green-50 rounded-xl p-6">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-[#1a3a52]">10 km</span>
                    <p className="text-gray-600 mt-1">Afstand vanaf Nijkerk</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <span className="text-2xl font-bold text-green-600">✓ Bosrand specialist</span>
                    <p className="text-gray-600 text-sm mt-1">Ervaring met landelijke panden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Oproep - Duurzaamheid in Ermelo */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
              🌲 Samen voor een duurzaam Ermelo
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-4">
                Ermelo staat bekend om haar inzet voor een groene en duurzame leefomgeving. 
                Met onze milieuvriendelijke <strong>osmosewater-techniek</strong> en 
                <strong> chemievrije reiniging</strong> dragen wij hier graag aan bij.
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Uw ramen worden streeploos schoon zonder schadelijke stoffen die in het milieu 
                terechtkomen. Perfect voor de prachtige natuur rondom Ermelo!
              </p>
            </div>
          </div>
        </section>

        {/* Voordelen Vaste Planning */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Waarom een vast contract voordelig is in Ermelo
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                    <div><strong className="text-gray-800">Tot 20% kostenbesparing</strong><p className="text-gray-600">Lagere tarieven door vaste afspraken</p></div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                    <div><strong className="text-gray-800">Vaste glazenwasser</strong><p className="text-gray-600">Dezelfde vertrouwde persoon elke keer</p></div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                    <div><strong className="text-gray-800">Vaste dag</strong><p className="text-gray-600">Weet precies wanneer wij komen</p></div>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                    <div><strong className="text-gray-800">Specialist in bosrandwoningen</strong><p className="text-gray-600">Ervaring met landelijke panden</p></div>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a3a52] rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Vrijblijvende offerte voor Ermelo</h3>
                <p className="mb-6">Ontdek wat wij voor u kunnen betekenen</p>
                <Link href="/contact" className="inline-block bg-white text-[#1a3a52] rounded-full px-8 py-3 font-semibold hover:bg-gray-100 transition">
                  Offerte aanvragen
                </Link>
                <p className="text-white/60 text-sm mt-4">Geen verplichtingen, heldere prijsafspraken</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Specifiek voor Ermelo */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#1a3a52] text-center mb-12">
              Veelgestelde vragen over Ermelo
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Komt u ook naar de bosrandgebieden van Ermelo?
                </h3>
                <p className="text-gray-600">
                  Absoluut! De bosrandgebieden zijn een belangrijk deel van ons werkgebied. 
                  Wij hebben ruime ervaring met het reinigen van woningen nabij het bos, 
                  waar speciale aandacht nodig is voor algengroei en mos.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Wat kost glasbewassing voor een vrijstaande woning in Ermelo?
                </h3>
                <p className="text-gray-600">
                  De kosten zijn afhankelijk van het aantal ramen, de moeilijkheidsgraad en de frequentie. 
                  Vraag vrijblijvend een offerte aan voor een exacte prijs. Wij rekenen geen extra 
                  reiskosten voor Ermelo.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Werkt u ook voor recreatiewoningen in de omgeving van Ermelo?
                </h3>
                <p className="text-gray-600">
                  Jazeker! Ook voor recreatiewoningen, vakantiehuizen en tweede woningen staan 
                  wij klaar. U kunt ons eenmalig inschakelen of een vast contract afsluiten 
                  voor periodiek onderhoud.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Waarom zou ik voor D.T.G. Cleaning kiezen in Ermelo?
                </h3>
                <p className="text-gray-600">
                  Wij zijn betrouwbaar, gebruiken milieuvriendelijk osmosewater, hebben vaste planning 
                  en geven geen overlast. Daarnaast hebben wij uitgebreide ervaring met zowel 
                  woningen in de dorpskern als landelijke panden en bosrandwoningen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Sectie */}
        <section className="py-20 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Klaar voor streeploos schone ramen in Ermelo?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Vraag vandaag nog een vrijblijvende offerte aan. Bellen kan ook direct!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-[#1a3a52] rounded-full px-8 py-4 font-semibold hover:bg-gray-100 transition-all flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" /> Offerte aanvragen
              </Link>
              <a href="tel:0634683019" className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 transition-all flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> Bel direct: 06-34683019
              </a>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Geen reiskosten binnen Ermelo | Milieuvriendelijk osmosewater
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
