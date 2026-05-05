import Link from "next/link";
import { 
  Phone, Check, MapPin, Clock, Mail, Sparkles, Building2, Sun, Droplets, 
  Shield, Calendar, TrendingUp, Award, Home, Users, Building, School, 
  Baby, Briefcase, ArrowRight, ChevronRight 
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function GlazenwasserNijkerk() {
  // JSON-LD voor lokale SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "D.T.G. Cleaning - Glazenwasser Nijkerk",
    "image": "https://dtgcleaning.nl/images/logo.png",
    "telephone": "+31 6 34683019",
    "email": "info@dtgcleaning.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nijkerk",
      "addressRegion": "Gelderland",
      "addressCountry": "NL"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 07:00-18:00",
    "areaServed": "Nijkerk en omgeving",
    "url": "https://dtgcleaning.nl/werkgebied/nijkerk"
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
              Glazenwasser Nijkerk
            </h1>
            <p className="text-xl text-white/90 mb-4">Professionele glasbewassing in Nijkerk en omgeving</p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Op zoek naar een betrouwbare <strong className="text-white">glazenwasser in Nijkerk</strong>? 
              D.T.G. Cleaning zorgt voor streeploos schone ramen, gevelreiniging en zonnepanelen reiniging 
              voor zowel particulieren als bedrijven.
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

        {/* Introductie - Waarom D.T.G. Cleaning in Nijkerk */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Uw vaste glazenwasser in Nijkerk
                </h2>
                <p className="text-gray-600 mb-4">
                  Woon of werk je in <strong>Nijkerk</strong> en ben je op zoek naar een 
                  <strong> betrouwbare glazenwasser</strong>? D.T.G. Cleaning is al jaren actief 
                  in de regio en staat bekend om kwaliteit, stiptheid en een persoonlijke aanpak.
                </p>
                <p className="text-gray-600 mb-6">
                  Of je nu een <strong>particulier</strong> bent met een eengezinswoning, een 
                  <strong> bedrijf</strong> met een groot kantoorpand, een <strong>VvE</strong> met 
                  meerdere verdiepingen, of een <strong>school, kinderdagverblijf of winkel</strong> - 
                  wij zorgen voor streeploos schone ramen met onze geavanceerde osmosewater-techniek.
                </p>
                <div className="bg-gray-50 rounded-xl p-5 border-l-4 border-green-500">
                  <p className="text-gray-700 italic">
                    "Perfectie zit niet in één detail, maar in de zorg en aandacht die ik aan elk project geef."
                  </p>
                  <p className="text-[#1a3a52] font-semibold mt-2">— Dominique, eigenaar D.T.G. Cleaning</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#1a3a52] mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Werkgebied Nijkerk
                </h3>
                <p className="text-gray-600 mb-4">
                  Wij zijn actief in heel Nijkerk en omgeving, inclusief:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div>🏠 Nijkerk Centrum</div>
                  <div>🏠 Nijkerkerveen</div>
                  <div>🏠 Doornsteeg</div>
                  <div>🏠 Paasbos</div>
                  <div>🏠 Arkervaart</div>
                  <div>🏠 Corlaer</div>
                  <div>🏠 Kruishaar</div>
                  <div>🏠 Holk</div>
                  <div>🏠 Spiekerhoek</div>
                  <div>🏠 Kloosterkampen</div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <strong>📍 All-in service:</strong> Geen reiskosten binnen Nijkerk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alle Diensten in Nijkerk - Uitgebreid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Onze schoonmaakdiensten in Nijkerk
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Van glasbewassing tot gevelreiniging - wij bieden een compleet pakket aan 
                <strong> professionele schoonmaakdiensten</strong> voor zowel particulieren als bedrijven.
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
                Als <strong>glazenwasser in Nijkerk</strong> maken wij gebruik van de modernste technieken. 
                Onze <strong>telescoopbewassing</strong> maakt het mogelijk om ook hoge ramen en gevels 
                tot 13,5 meter hoogte veilig en efficiënt te reinigen. Geen dure steigers of hoogwerkers nodig, 
                wat leidt tot <strong>kostenbesparing</strong> voor u als klant.
              </p>
              <p className="text-gray-600 mb-4">
                Wij werken uitsluitend met <strong>osmosewater</strong> - 100% gedemineraliseerd water 
                zonder chemicaliën. Dit zorgt voor een <strong>streeploos resultaat</strong> en is 
                volledig <strong>milieuvriendelijk</strong>. Uw ramen blijven langer schoon en krijgen 
                een kristalheldere glans.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Telewash tot 13,5 meter</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Osmosewater techniek</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Streeploos gegarandeerd</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Chemievrij & veilig</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Vaste planning mogelijk</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor VvE's en scholen</div>
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
                Wij verwijderen <strong>algen, mos, vuil, graffiti en andere vervuilingen</strong> 
                van alle geveltypes. Onze reinigingsmethoden zijn afgestemd op het materiaal 
                (baksteen, beton, hout, kunststof) om schade te voorkomen.
              </p>
              <p className="text-gray-600 mb-4">
                Regelmatige <strong>gevelreiniging</strong> verlengt de levensduur van uw gevel 
                en verbetert de uitstraling van uw pand. Of u nu een <strong>winkel</strong> in 
                het centrum van Nijkerk heeft, een <strong>kantoorpand</strong> aan de rand, 
                of een <strong>school of kinderdagverblijf</strong> - wij zorgen voor een frisse, 
                representatieve uitstraling.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Algen en mos verwijderen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Graffiti verwijdering</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Alle geveltypes</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Hogedruk of zachte borstel</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Duurzaam resultaat</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor monumentale panden</div>
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
                Wist u dat vervuilde <strong>zonnepanelen</strong> tot <strong>20% minder energie</strong> 
                opwekken? Stof, vogelpoep, bladeren en pollen vormen een isolerende laag op uw panelen, 
                waardoor ze minder efficiënt worden. Onze <strong>zonnepanelen reiniging</strong> 
                maakt gebruik van osmosewater en zachte borstels die de panelen niet beschadigen.
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
                Verstopte <strong>dakgoten</strong> zijn een van de meest voorkomende oorzaken van 
                <strong> waterschade</strong> aan woningen en bedrijfspanden. Bladeren, mos en ander vuil 
                verzamelen zich in de goten, waardoor regenwater niet goed kan wegstromen.
              </p>
              <p className="text-gray-600 mb-4">
                Onze grondige <strong>dakgootreiniging</strong> verwijdert al het vuil en controleert 
                tegelijkertijd de staat van uw goten en afvoeren. We kunnen ook eventuele kleine reparaties 
                uitvoeren of u adviseren over noodzakelijk onderhoud. Een schone dakgoot beschermt uw pand 
                tegen kostbare waterschade.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Verstoppingen voorkomen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Waterschade preventie</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Grondige reiniging</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Inspectie inbegrepen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor platte daken</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Rapportage bij afwijkingen</div>
              </div>
            </div>
          </div>
        </section>

        {/* Doelgroepen - Bedrijven en Particulieren */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Voor wie werken wij in Nijkerk?
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                D.T.G. Cleaning biedt maatwerkoplossingen voor zowel <strong>bedrijven</strong> als 
                <strong> particulieren</strong>. Ontdek hieronder wat wij voor uw situatie kunnen betekenen.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Bedrijven */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52]">Bedrijven & Instellingen</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Kantoren</strong> - Representatieve uitstraling is essentieel</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>VvE's</strong> - Gezamenlijke aanpak voor flatgebouwen</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Winkels</strong> - Aantrekkelijke etalages trekken klanten</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Scholen</strong> - Veilige en schone leeromgeving</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Kinderdagverblijven</strong> - Hygiëne en uitstraling</span></li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="font-semibold text-[#1a3a52]">Vaste contracten met SLA</p>
                  <p className="text-sm text-gray-600">Vaste dag, vaste glazenwasser, heldere afspraken</p>
                </div>
              </div>

              {/* Particulieren */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52]">Particulieren</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Eengezinswoningen</strong> - Flexibele planning</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Vrijstaande woningen</strong> - Maatwerk per klant</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Twee-onder-één-kap</strong> - Voordelige combinatie</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Appartementen</strong> - Ook op hoogte</span></li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="font-semibold text-[#1a3a52]">Flexibel & betaalbaar</p>
                  <p className="text-sm text-gray-600">Geen abonnement verplicht, u bepaalt de frequentie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Telescoopbewassing - Kostenbesparend */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    Kostenbesparend & Milieuvriendelijk
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
                    Telescoopbewassing: de toekomst van glasbewassing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Traditionele glasbewassing op hoogte vereist vaak dure steigers of een hoogwerker. 
                    Met onze <strong>telescoopbewassing</strong> kunnen wij tot 13,5 meter hoogte werken 
                    zonder extra materieel. Dit bespaart u honderden euro's per reiniging.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Daarnaast gebruiken wij <strong>osmosewater</strong> - een milieuvriendelijk alternatief 
                    voor agressieve chemicaliën. Uw ramen worden streeploos schoon zonder schadelijke 
                    stoffen die in het milieu terechtkomen.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Geen steiger nodig</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Geen hoogwerker nodig</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Minder overlast</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Lagere kosten</div>
                  </div>
                </div>
                <div className="flex-1 text-center bg-gray-100 rounded-xl p-6">
                  <span className="text-5xl font-bold text-[#1a3a52]">13,5 m</span>
                  <p className="text-gray-600 mt-2">Maximale hoogte</p>
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <span className="text-2xl font-bold text-green-600">€0</span>
                    <p className="text-gray-600">extra kosten voor hoogte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Uitleg Osmosewater */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Waarom osmosewater beter is</h2>
              <div className="w-20 h-1 bg-green-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Streeploos resultaat</h3>
                <p className="text-gray-600 text-sm">Geen vlekken of strepen door gedemineraliseerd water</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Milieuvriendelijk</h3>
                <p className="text-gray-600 text-sm">Geen chemicaliën, veilig voor planten en dieren</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Langer schoon</h3>
                <p className="text-gray-600 text-sm">Water trekt geen vuil aan, ramen blijven langer mooi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Voordelen Vaste Planning */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Waarom een vast contract voordelig is
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
                    <div><strong className="text-gray-800">Minimale overlast</strong><p className="text-gray-600">Werken met minimale verstoring van uw bedrijfsvoering</p></div>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a3a52] rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Vrijblijvende offerte</h3>
                <p className="mb-6">Ontdek wat wij voor u kunnen betekenen</p>
                <Link href="/contact" className="inline-block bg-white text-[#1a3a52] rounded-full px-8 py-3 font-semibold hover:bg-gray-100 transition">
                  Offerte aanvragen
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Veelgestelde vragen over Nijkerk */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#1a3a52] text-center mb-12">
              Veelgestelde vragen over glasbewassing in Nijkerk
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Wat kost glasbewassing in Nijkerk?
                </h3>
                <p className="text-gray-600">
                  De kosten zijn afhankelijk van het aantal ramen, de moeilijkheidsgraad en de frequentie. 
                  Vraag vrijblijvend een offerte aan voor een exacte prijs. Voor vaste contracten bieden wij 
                  tot 20% korting.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Hoe vaak moet ik mijn ramen laten wassen?
                </h3>
                <p className="text-gray-600">
                  Voor particulieren adviseren wij 4 tot 6 keer per jaar. Voor bedrijven en winkels is 
                  6 tot 8 weken aan te raden voor een optimale uitstraling.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Werkt u ook in het weekend in Nijkerk?
                </h3>
                <p className="text-gray-600">
                  Ja, in overleg kunnen wij ook op zaterdag komen. Dit is ideaal voor bedrijven die 
                  doordeweeks geen overlast willen en particulieren die niet thuis zijn.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Wat is telescoopbewassing en waarom is het voordelig?
                </h3>
                <p className="text-gray-600">
                  Telescoopbewassing is een techniek waarmee wij tot 13,5 meter hoogte kunnen werken 
                  zonder steiger of hoogwerker. Dit bespaart u kosten en zorgt voor minder overlast.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Gebruikt u chemicaliën voor glasbewassing?
                </h3>
                <p className="text-gray-600">
                  Nee, wij werken uitsluitend met osmosewater. Dit is 100% milieuvriendelijk, 
                  veilig voor planten en dieren, en geeft een streeploos resultaat zonder agressieve middelen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Sectie */}
        <section className="py-20 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Klaar voor streeploos schone ramen in Nijkerk?
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
              Geen verplichtingen, heldere prijsafspraken
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
