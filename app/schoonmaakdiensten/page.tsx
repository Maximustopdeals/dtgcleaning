import Link from "next/link";
import { 
  Check, ArrowRight, Phone, Sparkles, Building2, Sun, Droplets, 
  Shield, Calendar, TrendingUp, Clock, ThumbsUp, Award, Home, 
  Mail, HelpCircle, MapPin 
} from "lucide-react";
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
    extendedDescription: "Onze glasbewassing gaat verder dan alleen een doekje over het raam. We gebruiken een geavanceerd telewash-systeem dat tot 13,5 meter hoogte kan reiken, waardoor we ook moeilijk bereikbare ramen vlekkeloos reinigen. Het osmosewater dat we gebruiken is 100% gedemineraliseerd, wat betekent dat er geen kalk- of minerale resten achterblijven. Het resultaat is kristalhelder glas dat dagenlang streeploos blijft. Of u nu een winkelpand, kantoorgebouw of woonhuis heeft, wij zorgen voor een stralend resultaat dat uw uitstraling verbetert.",
    features: ["Telewash systeem tot 13,5 meter", "Osmosewater techniek - streeploos resultaat", "Zonder chemicaliën - milieuvriendelijk", "Vaste planning mogelijk", "Ook voor VvE's en scholen"],
    image: "/images/glasbewassing.jpg",
  },
  {
    icon: Building2, title: "Gevelreiniging", subtitle: "Voor elk pandtype",
    description: "Herstel de uitstraling van uw pand met professionele gevelreiniging. We verwijderen algen, mos, vuil en graffiti.",
    extendedDescription: "Een schone gevel is het visitekaartje van uw bedrijf of woning. Na verloop van tijd verzamelt zich vuil, algen, mos en zelfs graffiti op uw gevel, wat niet alleen lelijk is maar ook de levensduur van uw gevelmateriaal kan verkorten. Onze gevelreiniging maakt gebruik van de juiste technieken voor elk type gevel: van zachte borsteltechniek voor kwetsbare oppervlakken tot hogedruk voor harde materialen. Wij herstellen de oorspronkelijke staat van uw gevel, waardoor uw pand er als nieuw uitziet. Bovendien voorkomen we schade door onze reinigingsmethoden nauwkeurig af te stemmen op uw specifieke geveltype.",
    features: ["Hogedruk reiniging", "Algen en mos verwijderen", "Graffiti verwijdering", "Alle geveltypes", "Duurzaam resultaat"],
    image: "/images/Gevelreiniging.webp",
  },
  {
    icon: Sun, title: "Zonnepanelen Reinigen", subtitle: "Maximaal rendement",
    description: "Houd uw zonnepanelen schoon voor optimaal rendement. Vuil en stof kunnen de opbrengst met 10-20% verminderen.",
    extendedDescription: "Wist u dat vervuilde zonnepanelen tot 20% minder energie opwekken? Stof, vogelpoep, bladeren en pollen vormen een isolerende laag op uw panelen, waardoor ze minder efficiënt worden. Onze reiniging maakt gebruik van osmosewater en zachte borstels die de panelen niet beschadigen. U merkt het verschil direct in uw energieopbrengst. Regelmatig onderhoud verlengt bovendien de levensduur van uw investering. Wij werken veilig op hoogte met onze telewash-techniek, zodat ook panelen op moeilijk bereikbare plaatsen grondig gereinigd worden.",
    features: ["Rendementsverbetering", "Veilige reinigingsmethode", "Osmosewater techniek", "Periodiek onderhoud", "Schadepreventie"],
    image: "/images/zonnepanelen.jpg",
  },
  {
    icon: Droplets, title: "Dakgootreiniging", subtitle: "Voorkom waterschade",
    description: "Voorkom verstoppingen en waterschade met regelmatige dakgootreiniging. Wij verwijderen bladeren, mos en ander vuil.",
    extendedDescription: "Verstopte dakgoten zijn een van de meest voorkomende oorzaken van waterschade aan woningen en bedrijfspanden. Bladeren, mos en ander vuil verzamelen zich in de goten, waardoor regenwater niet goed kan wegstromen. Dit leidt tot overstromende goten, lekkages, vochtproblemen en zelfs schade aan de fundering. Onze grondige dakgootreiniging verwijdert al het vuil en controleert tegelijkertijd de staat van uw goten en afvoeren. We kunnen ook eventuele kleine reparaties uitvoeren of u adviseren over noodzakelijk onderhoud. Een schone dakgoot beschermt uw pand tegen kostbare waterschade.",
    features: ["Verstoppingen voorkomen", "Waterschade preventie", "Grondige reiniging", "Inspectie inbegrepen", "Ook voor platte daken"],
    image: "/images/dakgootreiniging.jpg",
  },
];

export default function SchoonmaakdienstenPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Schoonmaakbedrijf Nijkerk</h1>
            <p className="text-xl text-white/90 mb-4">Professioneel & Betrouwbaar</p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              D.T.G. Cleaning verzorgt professionele schoonmaakdiensten, glasbewassing en gevelreiniging.
            </p>
          </div>
        </section>

        {/* Extra content sectie - Waarom professionele reiniging */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Professioneel schoonmaakbedrijf in Nijkerk
              </h2>
              <div className="w-20 h-1 bg-green-500 mx-auto"></div>
            </div>

            <div className="prose prose-lg text-gray-600 mx-auto space-y-6">
              <p>
                <strong>D.T.G. Cleaning</strong> staat al jarenlang bekend als het betrouwbare schoonmaakbedrijf in <strong>Nijkerk en heel Gelderland</strong>. 
                Of u nu een <strong>bedrijf, VvE, instelling of particulier</strong> bent, wij bieden maatwerkoplossingen die aansluiten bij uw specifieke wensen en budget. 
                Van eenmalige glasbewassing tot structurele contracten met SLA, alles is mogelijk.
              </p>

              <h3 className="text-xl font-semibold text-[#1a3a52] mt-8">Waarom kiezen voor een professioneel schoonmaakbedrijf?</h3>
              <p>
                Veel mensen onderschatten het belang van professionele reiniging. Niet alleen ziet het er beter uit, maar het draagt ook bij aan een gezonder binnenklimaat 
                en verlengt de levensduur van uw gevel, ramen en zonnepanelen. Bij D.T.G. Cleaning gebruiken we geavanceerde technieken zoals <strong>osmosewater</strong> 
                voor streeploos glas en <strong>telewash-systemen</strong> voor reiniging op hoogte tot 13,5 meter. Zo bereiken we waar anderen stoppen.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a3a52] mb-2">Kwaliteit gegarandeerd</h4>
                  <p className="text-gray-600 text-sm">Streeploos resultaat met osmosewater-techniek</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a3a52] mb-2">Vaste planning</h4>
                  <p className="text-gray-600 text-sm">Vaste dag, vaste glazenwasser, geen verrassingen</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-3">
                    <ThumbsUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a3a52] mb-2">100% Tevredenheid</h4>
                  <p className="text-gray-600 text-sm">Werk volgens afspraak, altijd aanspreekbaar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits banner */}
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

        {/* Diensten secties */}
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
                  <p className="text-gray-600 mb-4 text-lg">{d.description}</p>
                  <p className="text-gray-600 mb-6">{d.extendedDescription}</p>
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

        {/* Osmosewater uitleg sectie */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl py-8 px-6 md:py-10 md:px-10 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a3a52] rounded-full mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">Wat is osmosewater en waarom is het beter?</h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Osmosewater is 100% gedemineraliseerd water zonder enige toegevoegde chemicaliën. Het wordt gezuiverd via een 
                omgekeerde osmose filter, waardoor alle mineralen, kalk en onzuiverheden worden verwijderd. Het resultaat is water 
                dat geen vlekken of strepen achterlaat, perfect voor glasbewassing. Bovendien is het volledig milieuvriendelijk 
                en veilig voor planten, dieren en uw gevel.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Streeploos resultaat</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Geen chemicaliën</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Milieuvriendelijk</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Langer schoon</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Veilig voor alle oppervlakken</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-600">Geen kalkaanslag</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM D.T.G. CLEANING sectie */}
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
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Volledig verzekerd</h3>
                <p className="text-gray-600 mb-4">Aansprakelijkheidsverzekerd en gecertificeerd. Uw pand en uw medewerkers zijn altijd gedekt.</p>
                <GreenCheckLabel label="Zakelijk" />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Flexibel & betaalbaar voor thuis</h3>
                <p className="text-gray-600 mb-4">Schonere ramen voor jouw woning, met een vast aanspreekpunt. Flexibele planning en betaalbare prijzen.</p>
                <GreenCheckLabel label="Ook voor particulieren" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Sectie */}
        <section className="py-20 bg-[#1a3a52]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Klaar voor een schone omgeving?</h2>
            <p className="text-lg text-white/80 mb-8">Vraag vandaag nog een vrijblijvende offerte aan.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-[#1a3a52] rounded-full px-8 py-4 font-semibold hover:bg-gray-100 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" /> Vrijblijvend voorstel aanvragen
              </Link>
              <a href="tel:0634683019" className="border-2 border-white text-white rounded-full px-8 py-4 font-semibold hover:bg-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> Bel direct voor advies
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
