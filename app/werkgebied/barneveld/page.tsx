import Link from "next/link";
import { 
  Phone, Check, MapPin, Clock, Mail, Sparkles, Building2, Sun, Droplets, 
  Shield, Calendar, TrendingUp, Award, Home, Users, Building, School, 
  Baby, Briefcase, Factory, Tractor, ArrowRight 
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

export default function GlazenwasserBarneveld() {
  // JSON-LD voor lokale SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "D.T.G. Cleaning - Glazenwasser Barneveld",
    "image": "https://dtgcleaning.nl/images/logo.png",
    "telephone": "+31 6 34683019",
    "email": "info@dtgcleaning.nl",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barneveld",
      "addressRegion": "Gelderland",
      "addressCountry": "NL"
    },
    "priceRange": "€€",
    "openingHours": "Mo-Fr 07:00-18:00",
    "areaServed": "Barneveld en omgeving",
    "url": "https://dtgcleaning.nl/werkgebied/barneveld"
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
              Glazenwasser Barneveld
            </h1>
            <p className="text-xl text-white/90 mb-4">Professionele glasbewassing in Barneveld en omgeving</p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Op zoek naar een betrouwbare <strong className="text-white">glazenwasser in Barneveld</strong>? 
              D.T.G. Cleaning zorgt voor streeploos schone ramen, gevelreiniging en zonnepanelen reiniging 
              voor zowel particulieren als bedrijven in heel Barneveld en de omliggende kernen.
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

        {/* Introductie - Waarom D.T.G. Cleaning in Barneveld */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">
                  Uw vaste glazenwasser in Barneveld
                </h2>
                <p className="text-gray-600 mb-4">
                  Woon of werk je in <strong>Barneveld</strong> en ben je op zoek naar een 
                  <strong> betrouwbare glazenwasser</strong>? D.T.G. Cleaning is actief in deze 
                  dynamische gemeente en staat bekend om kwaliteit, stiptheid en een persoonlijke aanpak.
                </p>
                <p className="text-gray-600 mb-6">
                  Of je nu een <strong>particulier</strong> bent met een woning in de dorpskern, 
                  een <strong>bedrijf</strong> op een van de industrieterreinen, een <strong>VvE</strong> 
                  in de nieuwbouwwijken, of een <strong>school, winkel of agrarisch bedrijf</strong> - 
                  wij zorgen voor streeploos schone ramen met onze geavanceerde osmosewater-techniek.
                </p>
                <div className="bg-orange-50 rounded-xl p-5 border-l-4 border-orange-500">
                  <p className="text-gray-700 italic">
                    "Barneveld is een bruisende gemeente waar ik met veel plezier werk. Van de 
                      binnenstad tot de industrieterreinen, ik help graag mee aan een stralende uitstraling."
                  </p>
                  <p className="text-[#1a3a52] font-semibold mt-2">— Dominique, eigenaar D.T.G. Cleaning</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-[#1a3a52] mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" /> Werkgebied Barneveld
                </h3>
                <p className="text-gray-600 mb-4">
                  Wij zijn actief in heel Barneveld en omgeving, inclusief:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div>🏠 Centrum Barneveld</div>
                  <div>🏠 Harselaar</div>
                  <div>🏠 Veller</div>
                  <div>🏠 De Glind</div>
                  <div>🏠 Kootwijkerbroek</div>
                  <div>🏠 Stroe</div>
                  <div>🏠 Zwartebroek</div>
                  <div>🏠 Terschuur</div>
                  <div>🏠 Voorthuizen (deels)</div>
                  <div>🏠 Achterveld</div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <strong>📍 Afstand vanaf Nijkerk:</strong> 12 km — wekelijks routes
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>🏭 Bijzonderheid:</strong> Specialist in bedrijfspanden en industrieterreinen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alle Diensten in Barneveld */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Onze schoonmaakdiensten in Barneveld
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Van glasbewassing tot gevelreiniging - wij bieden een compleet pakket aan 
                <strong> professionele schoonmaakdiensten</strong> voor zowel particulieren als bedrijven 
                in Barneveld.
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
                Als <strong>glazenwasser in Barneveld</strong> maken wij gebruik van de modernste technieken. 
                Onze <strong>telescoopbewassing</strong> maakt het mogelijk om ook hoge ramen en gevels 
                tot 13,5 meter hoogte veilig en efficiënt te reinigen. Dit is ideaal voor de 
                karakteristieke panden in de binnenstad en de moderne bedrijfspanden op Harselaar.
              </p>
              <p className="text-gray-600 mb-4">
                Wij werken uitsluitend met <strong>osmosewater</strong> - 100% gedemineraliseerd water 
                zonder chemicaliën. Dit zorgt voor een <strong>streeploos resultaat</strong> en is 
                volledig <strong>milieuvriendelijk</strong>. Perfect voor de groene gemeente Barneveld.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Telewash tot 13,5 meter</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Osmosewater techniek</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Streeploos gegarandeerd</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Chemievrij & veilig</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Vaste planning mogelijk</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Specialist in bedrijfspanden</div>
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
                In Barneveld, met zijn mix van historische panden en moderne bedrijfsgebouwen, 
                is een goede uitstraling essentieel. Wij verwijderen <strong>algen, mos, vuil</strong> 
                en andere vervuilingen van alle geveltypes.
              </p>
              <p className="text-gray-600 mb-4">
                Voor de vele bedrijfspanden op de industrieterreinen Harselaar en Veller hebben wij 
                speciale ervaring met groot oppervlakte reiniging. Ook voor historische panden in de 
                binnenstad gebruiken wij zachte methoden om schade te voorkomen.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Algen en mos verwijderen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Specialist in bedrijfspanden</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Alle geveltypes</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Zachte reiniging voor historische panden</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor industrieterreinen</div>
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
                Veel huizen en bedrijven in Barneveld hebben zonnepanelen. Wist u dat vervuilde 
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
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor agrarische bedrijven</div>
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
                In de gemeente Barneveld, met veel bomen en groen, kunnen dakgoten snel verstopt raken 
                door bladeren, mos en ander vuil. Verstopte <strong>dakgoten</strong> zijn een van de 
                meest voorkomende oorzaken van <strong>waterschade</strong> aan woningen en bedrijfspanden.
              </p>
              <p className="text-gray-600 mb-4">
                Onze grondige <strong>dakgootreiniging</strong> verwijdert al het vuil en controleert 
                tegelijkertijd de staat van uw goten en afvoeren. Voor zowel particuliere woningen als 
                grote bedrijfspanden bieden wij deze essentiële service aan.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Verstoppingen voorkomen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Waterschade preventie</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Grondige reiniging</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Inspectie inbegrepen</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Ook voor bedrijfspanden</div>
                <div className="flex items-center text-sm text-gray-600"><Check className="w-4 h-4 text-green-500 mr-2" />Specialist in agrarische gebouwen</div>
              </div>
            </div>
          </div>
        </section>

        {/* Doelgroepen - Barneveld specifiek */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Onze diensten in Barneveld zijn geschikt voor
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Van de binnenstad tot de industrieterreinen - D.T.G. Cleaning biedt maatwerkoplossingen 
                voor iedereen in Barneveld.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Bedrijven & Industrie */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mr-4">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52]">Bedrijven & Industrie</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Industrieterreinen Harselaar & Veller</strong> - Specialist in bedrijfspanden</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Winkels & Retail</strong> - Uitnodigende etalages</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Kantoren</strong> - Representatief voor klanten</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Agrarische bedrijven</strong> - Schuren, loodsen en stallen</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>VvE's</strong> - Gezamenlijke aanpak voor complexen</span></li>
                </ul>
              </div>

              {/* Particulieren & Zorginstellingen */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52]">Particulieren & Zorg</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Centrum Barneveld</strong> - Historische panden specialist</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Nieuwbouwwijken</strong> - Moderne woningen</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Zorginstellingen</strong> - Hygiëne en uitstraling</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Scholen & Kindcentra</strong> - Veilige en schone omgeving</span></li>
                  <li className="flex items-start"><Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" /><span><strong>Buitengebieden</strong> - Landelijke panden specialist</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Telescoopbewassing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-block bg-[#1a3a52]/10 text-[#1a3a52] rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    Ideaal voor Barneveld
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
                    Telescoopbewassing voor uw pand
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Of u nu een historisch pand in de binnenstad heeft, een bedrijfspand op Harselaar 
                    of een agrarisch bedrijf met hoge loodsen - onze <strong>telescoopbewassing</strong> 
                    maakt het mogelijk om tot 13,5 meter hoogte te werken zonder dure steigers of hoogwerker.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Dit bespaart u niet alleen kosten, maar zorgt ook voor minimale overlast. 
                    Voor de vele bedrijfspanden en agrarische gebouwen in Barneveld is dit een 
                    ideale oplossing.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Geen steiger nodig</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Geen hoogwerker nodig</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Minder overlast</div>
                    <div className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-2" />Lagere kosten</div>
                  </div>
                </div>
                <div className="flex-1 text-center bg-orange-50 rounded-xl p-6">
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-[#1a3a52]">12 km</span>
                    <p className="text-gray-600 mt-1">Afstand vanaf Nijkerk</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <span className="text-2xl font-bold text-green-600">✓ Bedrijfspanden specialist</span>
                    <p className="text-gray-600 text-sm mt-1">Ervaring met Harselaar en Veller</p>
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
                  Waarom een vast contract voordelig is in Barneveld
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
                    <div><strong className="text-gray-800">Speciale tarieven voor bedrijven</strong><p className="text-gray-600">Maatwerk voor grote panden</p></div>
                  </li>
                </ul>
              </div>
              <div className="bg-[#1a3a52] rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Vrijblijvende offerte voor Barneveld</h3>
                <p className="mb-6">Ontdek wat wij voor u kunnen betekenen</p>
                <Link href="/contact" className="inline-block bg-white text-[#1a3a52] rounded-full px-8 py-3 font-semibold hover:bg-gray-100 transition">
                  Offerte aanvragen
                </Link>
                <p className="text-white/60 text-sm mt-4">Geen verplichtingen, heldere prijsafspraken</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Specifiek voor Barneveld */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#1a3a52] text-center mb-12">
              Veelgestelde vragen over Barneveld
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Komt u ook naar de industrieterreinen Harselaar en Veller?
                </h3>
                <p className="text-gray-600">
                  Absoluut! Dit zijn belangrijke gebieden voor ons. Wij hebben veel ervaring met 
                  het reinigen van grote bedrijfspanden, showrooms en kantoren op beide terreinen.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Wat kost glasbewassing voor een bedrijfspand in Barneveld?
                </h3>
                <p className="text-gray-600">
                  De kosten zijn afhankelijk van het aantal ramen, de hoogte en de frequentie. 
                  Wij bieden speciale tarieven voor bedrijven en geven vrijblijvend offerte op maat.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Werkt u ook voor agrarische bedrijven in Barneveld?
                </h3>
                <p className="text-gray-600">
                  Jazeker! De agrarische sector is belangrijk in Barneveld. Wij reinigen schuren, 
                  loodsen, stallen en ook de woningen van agrarische ondernemers.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#1a3a52] mb-2">
                  Waarom zou ik voor D.T.G. Cleaning kiezen in Barneveld?
                </h3>
                <p className="text-gray-600">
                  Wij zijn betrouwbaar, gebruiken milieuvriendelijk osmosewater, hebben vaste planning 
                  en geven geen overlast. Daarnaast hebben wij uitgebreide ervaring met zowel 
                  particuliere woningen als grote bedrijfspanden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Sectie */}
        <section className="py-20 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Klaar voor streeploos schone ramen in Barneveld?
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
              Speciale tarieven voor bedrijven | Heldere prijsafspraken
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
