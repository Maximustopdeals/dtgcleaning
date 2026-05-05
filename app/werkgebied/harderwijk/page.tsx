import Link from "next/link";
import { 
  Phone, Check, MapPin, Clock, Mail, Sparkles, Building2, Sun, Droplets, 
  Shield, Calendar, TrendingUp, Award, Home, Users, Building, School, 
  Baby, Briefcase, Anchor, Trees, ArrowRight 
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function GlazenwasserHarderwijk() {
  // JSON-LD voor lokale SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "D.T.G. Cleaning - Glazenwasser Harderwijk",
    "image": "https://dtgcleaning.nl/images/logo.png",
    "telephone": "+31 6 34683019",
    "email": "info@dtgcleaning.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Harderwijk",
      "addressRegion": "Gelderland",
      "addressCountry": "NL"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 07:00-18:00",
    "areaServed": "Harderwijk en omgeving",
    "url": "https://dtgcleaning.nl/werkgebied/harderwijk"
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
              Glazenwasser Harderwijk
            </h1>
            <p className="text-xl text-white/90 mb-4">Professionele glasbewassing in Harderwijk aan zee</p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Op zoek naar een betrouwbare <strong className="text-white">glazenwasser in Harderwijk</strong>? 
              D.T.G. Cleaning zorgt voor streeploos schone ramen, gevelreiniging en zonnepanelen reiniging 
              voor zowel particulieren als bedrijven in de gehele regio Harderwijk.
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

        {/* Introductie - Waarom D.T.G. Cleaning in Harderwijk */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Uw vaste glazenwasser in Harderwijk
                </h2>
                <p className="text-gray-600 mb-4">
                  Woon of werk je in <strong>Harderwijk</strong> en ben je op zoek naar een 
                  <strong> betrouwbare glazenwasser</strong>? D.T.G. Cleaning is al jaren actief 
                  in deze bruisende Hanzestad en staat bekend om kwaliteit, stiptheid en een 
                  persoonlijke aanpak.
                </p>
                <p className="text-gray-600 mb-6">
                  Of je nu een <strong>particulier</strong> bent met een woning in de historische binnenstad, 
                  een <strong>bedrijf</strong> met een pand aan de haven, een <strong>VvE</strong> met 
                  meerdere verdiepingen, of een <strong>school, winkel of horecagelegenheid</strong> - 
                  wij zorgen voor streeploos schone ramen met onze geavanceerde osmosewater-techniek.
                </p>
                <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-[#1a3a52]">
                  <p className="text-gray-700 italic">
                    "Harderwijk is een prachtige stad met veel karakter. Ik help graag mee om de panden 
                    er op hun best uit te laten zien!"
                  </p>
                  <p className="text-[#1a3a52] font-semibold mt-2">— Dominique, eigenaar D.T.G. Cleaning</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#1a3a52] mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Werkgebied Harderwijk
                </h3>
                <p className="text-gray-600 mb-4">
                  Wij zijn actief in heel Harderwijk en omgeving, inclusief:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div>🏠 Binnenstad</div>
                  <div>🏠 Stadsdennen</div>
                  <div>🏠 Frankrijk</div>
                  <div>🏠 Stadsweiden</div>
                  <div>🏠 Waterfront</div>
                  <div>🏠 Harderwijkerbos</div>
                  <div>🏠 Zeebuurt</div>
                  <div>🏠 Centrum</div>
                  <div>🏠 Drielanden</div>
                  <div>🏠 Veldkamp</div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <strong>📍 Specialisme:</strong> Ook historische panden in de binnenstad
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>🗺️ Reikwijdte:</strong> Hele Harderwijk + nabijgelegen kernen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alle Diensten in Harderwijk */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Onze schoonmaakdiensten in Harderwijk
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Van glasbewassing tot gevelreiniging - wij bieden een compleet pakket aan 
                <strong> professionele schoonmaakdiensten</strong> voor zowel particulieren als bedrijven 
                in Harderwijk.
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
                Als <strong>glazenwasser in Harderwijk</strong> maken wij gebruik van de modernste technieken. 
                Onze <strong>telescoopbewassing</strong> maakt het mogelijk om ook hoge ramen en gevels 
                tot 13,5 meter hoogte veilig en efficiënt te reinigen. Dit is ideaal voor de 
                karakteristieke panden in de Harderwijkse binnenstad.
              </p>
              <p className="text-gray-600 mb-4">
                Wij werken uitsluitend met <strong>osmosewater</strong> - 100% gedemineraliseerd water 
                zonder chemicaliën. Dit zorgt voor een <strong>streeploos resultaat</strong> en is 
                volledig <strong>milieuvriendelijk</strong>. Perfect voor de kwetsbare historische 
                gebouwen en moderne panden in Harderwijk.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Telewash tot 13,5 meter</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Osmosewater techniek</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Streeploos gegarandeerd</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Chemievrij & veilig</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Vaste planning mogelijk</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Historische panden specialist</div>
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
                Een <strong>schone gevel</strong> is het visitekaartje van uw bedrijf of woning. 
                In Harderwijk, met zijn rijke historie en unieke architectuur, is een goede uitstraling 
                essentieel. Wij verwijderen <strong>algen, mos, vuil, graffiti</strong> en andere 
                vervuilingen van alle geveltypes.
              </p>
              <p className="text-gray-600 mb-4">
                Of uw pand nu in de historische binnenstad staat of in de nieuwbouwwijk Drielanden, 
                wij stemmen onze reinigingsmethode af op het materiaal om schade te voorkomen. 
                Regelmatige <strong>gevelreiniging</strong> verlengt de levensduur van uw gevel 
                en verbetert de uitstraling van uw pand.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Algen en mos verwijderen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Historische panden specialist</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Alle geveltypes</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Zachte reiniging voor kwetsbare gevels</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor monumentale panden</div>
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
                Veel huizen en bedrijven in Harderwijk hebben zonnepanelen. Wist u dat vervuilde 
                <strong> zonnepanelen</strong> tot <strong>20% minder energie</strong> opwekken? 
                Onze <strong>zonnepanelen reiniging</strong> maakt gebruik van osmosewater en zachte 
                borstels die de panelen niet beschadigen.
              </p>
              <p className="text-gray-600 mb-4">
                U merkt het verschil direct in uw energieopbrengst. Regelmatig onderhoud verlengt 
                bovendien de levensduur van uw investering. Wij werken veilig op hoogte met onze 
                <strong> telescoopbewassing</strong>, zodat ook panelen op moeilijk bereikbare 
                plaatsen grondig gereinigd worden.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Tot 20% meer rendement</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Veilige reinigingsmethode</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Osmosewater techniek</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Periodiek onderhoud</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Schadepreventie</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor bedrijfsdaken</div>
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
                In een stad als Harderwijk, met veel bomen en een kustklimaat, kunnen dakgoten snel 
                verstopt raken. Verstopte <strong>dakgoten</strong> zijn een van de meest voorkomende 
                oorzaken van <strong>waterschade</strong> aan woningen en bedrijfspanden.
              </p>
              <p className="text-gray-600 mb-4">
                Onze grondige <strong>dakgootreiniging</strong> verwijdert al het vuil en controleert 
                tegelijkertijd de staat van uw goten en afvoeren. Een schone dakgoot beschermt uw pand 
                tegen kostbare waterschade, vooral tijdens de herfst- en wintermaanden.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Verstoppingen voorkomen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Waterschade preventie</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Grondige reiniging</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Inspectie inbegrepen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor platte daken</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Extra controle voor kustgebied</div>
              </div>
            </div>
          </div>
        </section>

        {/* Doelgroepen - Harderwijk specifiek */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Voor wie werken wij in Harderwijk?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Van de historische binnenstad tot de moderne wijken - D.T.G. Cleaning biedt 
                maatwerkoplossingen voor iedereen in Harderwijk.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Bedrijven & Horeca */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52]">Bedrijven & Horeca</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Winkels & Boetieks</strong> - Uitnodigende etalages</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Horeca & Restaurants</strong> - Uitstraling aan de haven</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Kantoren</strong> - Representatief voor klanten</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>VvE's</strong> - Gezamenlijke aanpak voor flatgebouwen</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Scholen & Kindcentra</strong> - Veilige en schone omgeving</span></li>
                </ul>
              </div>

              {/* Particulieren & Monumenten */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52]">Particulieren & Monumenten</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Historische binnenstad</strong> - Speciale zorg voor monumenten</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Waterfront woningen</strong> - Glasbewassing met uitzicht op het water</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Nieuwbouwwijken</strong> - Flexibele planning</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Twee-onder-één-kap</strong> - Voordelige combinatie</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Telescoopbewassing - Speciaal voor Harderwijk */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    Ideaal voor Harderwijk
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
                    Telescoopbewassing voor uw pand
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Of u nu een monumentaal pand in de binnenstad heeft of een modern appartementencomplex 
                    aan de Waterfront - onze <strong>telescoopbewassing</strong> maakt het mogelijk om 
                    tot 13,5 meter hoogte te werken zonder dure steigers of hoogwerker.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Dit bespaart u niet alleen kosten, maar zorgt ook voor minimale overlast - ideaal 
                    voor de smalle straten in de historische binnenstad van Harderwijk.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Geen steiger nodig</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Geen hoogwerker nodig</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Minder overlast</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Lagere kosten</div>
                  </div>
                </div>
                <div className="flex-1 text-center bg-blue-50 rounded-xl p-6">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-[#1a3a52]">13,5 m</span>
                    <p className="text-gray-600 mt-1">Maximale hoogte</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <span className="text-2xl font-bold text-green-600">✓ Historisch pand?</span>
                    <p className="text-gray-600 text-sm mt-1">Geen probleem, wij zijn specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voordelen Vaste Planning */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Waarom een vast contract voordelig is in Harderwijk
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
                    <div><strong className="text-gray-800">Minimale overlast</strong><p className="text-gray-600">Werken met minimale verstoring</p></div>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a3a52] rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Vrijblijvende offerte voor Harderwijk</h3>
                <p className="mb-6">Ontdek wat wij voor u kunnen betekenen</p>
                <Link href="/contact" className="inline-block bg-white text-[#1a3a52] rounded-full px-8 py-3 font-semibold hover:bg-gray-100 transition">
                  Offerte aanvragen
                </Link>
                <p className="text-white/60 text-sm mt-4">Geen verplichtingen, heldere prijsafspraken</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Specifiek voor Harderwijk */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#1a3a52] text-center mb-12">
              Veelgestelde vragen over Harderwijk
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Komt u ook in de binnenstad van Harderwijk?
                </h3>
                <p className="text-gray-600">
                  Ja, absoluut! De binnenstad van Harderwijk is een van onze kerngebieden. We zijn 
                  gespecialiseerd in het reinigen van panden in historische binnensteden, inclusief 
                  monumentale gebouwen.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Wat kost glasbewassing in Harderwijk?
                </h3>
                <p className="text-gray-600">
                  De kosten zijn afhankelijk van het aantal ramen, de moeilijkheidsgraad en de frequentie. 
                  Vraag vrijblijvend een offerte aan voor een exacte prijs. Wij rekenen geen extra 
                  reiskosten voor Harderwijk.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Werkt u ook voor VvE's in Harderwijk?
                </h3>
                <p className="text-gray-600">
                  Jazeker! Wij hebben ervaring met VvE's van zowel kleine als grote complexen. 
                  We bieden vaste contracten met vaste dagen en heldere afspraken.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Heeft u ervaring met monumentale panden?
                </h3>
                <p className="text-gray-600">
                  Ja, wij hebben ruime ervaring met het reinigen van monumentale en historische panden. 
                  Wij werken met zachte methoden die de kwetsbare gevels en ramen niet beschadigen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Sectie */}
        <section className="py-20 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Klaar voor streeploos schone ramen in Harderwijk?
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
              Geen reiskosten binnen Harderwijk | Heldere prijsafspraken
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
