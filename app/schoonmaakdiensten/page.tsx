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

const benefits = ["Vaste planning & contract", "Streeploos resultaat gegarandeerd", "Volledig verzekerd", "Milieuvriendelijke reiniging"];

const diensten = [
  {
    icon: Sparkles, 
    title: "Ramen laten wassen", 
    subtitle: "Voor bedrijven & particulieren",
    description: "Streeploos schone ramen voor uw woning, kantoor of winkelpand. Wij bereiken ook de hoogste ramen – veilig en zonder steiger.",
    extendedDescription: "Schone ramen maken een wereld van verschil. Het laat zien dat u oog heeft voor detail en uw pand met trots presenteert. Wij gebruiken een geavanceerd telewash-systeem dat ook de ramen op de bovenste verdiepingen haalt. En het beste? Geen chemicaliën, geen strepen, geen kalkaanslag. Alleen kristalhelder glas dat er wekenlang perfect uitziet. Of u nu een winkelpand, kantoorgebouw of woonhuis heeft – wij zorgen voor een stralend resultaat dat direct opvalt.",
    features: [
      "Ook ramen op hoogte – veilig bereikt",
      "Streeploos resultaat met osmosewater",
      "Geen chemicaliën – veilig voor mens en dier",
      "Vaste planning mogelijk – altijd dezelfde glazenwasser",
      "Ook voor VvE's, scholen en zorginstellingen"
    ],
    image: "/images/glasbewassing.jpg",
  },
  {
    icon: Building2, 
    title: "Gevel reinigen", 
    subtitle: "Voor elk pandtype",
    description: "Uw gevel is het visitekaartje van uw pand. Wij verwijderen algen, mos, vuil en graffiti – uw pand ziet er weer als nieuw uit.",
    extendedDescription: "Een schone gevel doet meer dan u denkt. Het trekt klanten aan, verhoogt de waarde van uw pand en voorkomt dat vuil zich blijft ophopen. Na verloop van tijd verzamelen algen, mos en vuil zich op uw gevel – niet alleen lelijk, maar ook schadelijk voor het materiaal. Wij gebruiken de juiste techniek voor elk type gevel: zacht voor kwetsbare oppervlakken, krachtig voor harde materialen. Het resultaat? Een gevel die er weer uitziet als de dag dat hij werd opgeleverd. En met ons onderhoudscontract blijft hij ook zo.",
    features: [
      "Algen, mos en vuil grondig verwijderd",
      "Graffiti vrij – ook lastige vlekken",
      "Schadevrij reinigen – afgestemd op uw gevel",
      "Duurzaam resultaat – langer mooi",
      "Ook voor monumentale en kwetsbare gevels"
    ],
    image: "/images/Gevelreiniging.webp",
  },
  {
    icon: Sun, 
    title: "Zonnepanelen reinigen", 
    subtitle: "Voor maximaal rendement",
    description: "Wist u dat vuile zonnepanelen tot 20% minder opleveren? Wij maken ze weer schoon, zodat u weer optimaal profiteert van uw investering.",
    extendedDescription: "U heeft geïnvesteerd in zonnepanelen om te besparen op uw energierekening. Maar wanneer vuil, vogelpoep, bladeren en pollen zich ophopen, daalt de opbrengst. Soms wel met 20%. Dat is geld dat u misloopt. Wij reinigen uw zonnepanelen grondig met osmosewater en zachte borstels – zonder krassen of beschadigingen. U ziet het verschil direct op uw energierekening. Bovendien verlengt regelmatig onderhoud de levensduur van uw panelen. Een kleine investering met een groot rendement.",
    features: [
      "Tot 20% hogere energieopbrengst",
      "Veilige reiniging – geen schade",
      "Osmosewater voor vlekkeloos resultaat",
      "Periodiek onderhoud mogelijk",
      "Ook op moeilijk bereikbare plaatsen"
    ],
    image: "/images/zonnepanelen.jpg",
  },
  {
    icon: Droplets, 
    title: "Dakgoot reinigen", 
    subtitle: "Voorkom waterschade",
    description: "Verstopte dakgoten zijn een van de grootste oorzaken van waterschade. Wij maken ze schoon en voorkomen dure reparaties.",
    extendedDescription: "Water dat niet kan wegstromen, zoekt altijd een weg naar binnen. Verstopte dakgoten leiden tot lekkages, vochtplekken, schimmel en zelfs funderingsschade. De kosten van herstel kunnen oplopen tot duizenden euro's. Regelmatig onderhoud is daarom geen luxe, maar een noodzaak. Wij verwijderen bladeren, mos en ander vuil uit uw dakgoten en controleren meteen de staat van uw afvoeren. Kleine problemen lossen we direct op of we adviseren u over de volgende stap. Zo beschermt u uw pand tegen kostbare waterschade.",
    features: [
      "Verstoppingen voorkomen – droog en veilig",
      "Beschermt tegen lekkages en vochtschade",
      "Grondige reiniging en inspectie",
      "Ook voor platte daken en pannen",
      "Altijd een duidelijk advies"
    ],
    image: "/images/dakgootreiniging.jpg",
  },
];

export default function SchoonmaakdienstenPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero - SEO: zoekwoorden in H1 en eerste alinea */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a3a52] to-[#2c4a66]">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Schoonmaakbedrijf Nijkerk – al uw reinigingsdiensten
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Ramen laten wassen, gevelreiniging, zonnepanelen reinigen en meer
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              D.T.G. Cleaning is uw betrouwbare partner voor professionele reiniging in Nijkerk en omgeving. 
              <strong> Vrijblijvende offerte – u betaalt pas na uitvoering.</strong>
            </p>
          </div>
        </section>

        {/* Extra content sectie - Waarom professionele reiniging */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a52] mb-4">
                Professionele reiniging in Nijkerk – waarom wij?
              </h2>
              <div className="w-20 h-1 bg-green-500 mx-auto"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                Uw pand verdient de beste zorg. Wij zorgen voor stralende resultaten – zonder gedoe en zonder verrassingen.
              </p>
            </div>

            <div className="prose prose-lg text-gray-600 mx-auto space-y-6">
              <p>
                Of u nu een <strong>bedrijf</strong> bent dat representatief wil overkomen, een <strong>VvE</strong> die het pand goed wil onderhouden, 
                of een <strong>particulier</strong> die weer helder zicht wil – wij bieden de oplossing. 
                Van eenmalige glasbewassing tot <strong>vaste onderhoudscontracten</strong> met vaste planning. U bepaalt, wij voeren uit.
              </p>

              <h3 className="text-xl font-semibold text-[#1a3a52] mt-8">Waarom regelmatig reinigen loont</h3>
              <p>
                Veel mensen denken pas aan reiniging als het echt nodig is. Maar regelmatig onderhoud bespaart u op de lange termijn juist geld. 
                Vuil dat zich ophoopt op ramen, gevels en zonnepanelen tast het oppervlak aan. 
                Bij D.T.G. Cleaning gebruiken we <strong>osmosewater</strong> – een milieuvriendelijke techniek die geen strepen of vlekken achterlaat. 
                En dankzij onze <strong>telewash-systemen</strong> bereiken we moeiteloos de hoogste plekken, zonder dat u een steiger hoeft te huren.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a3a52] mb-2">Streeploos resultaat</h4>
                  <p className="text-gray-600 text-sm">Met osmosewater – geen vlekken, geen chemicaliën</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a3a52] mb-2">Vaste planning</h4>
                  <p className="text-gray-600 text-sm">Vaste dag, vaste glazenwasser – geen gedoe</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5 text-center">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-full flex items-center justify-center mx-auto mb-3">
                    <ThumbsUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-[#1a3a52] mb-2">100% Tevredenheid</h4>
                  <p className="text-gray-600 text-sm">Wij staan altijd voor u klaar – ook na de klus</p>
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

        {/* Diensten secties - Nu klantgericht geschreven */}
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
                  <Link href="/contact" className="inline-flex items-center bg-[#1a3a52] text-white rounded-full px-6 py-3 font-semibold hover:bg-[#2c4a66] transition-colors">
                    Vrijblijvend offerte aanvragen <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Osmosewater uitleg sectie - Voordelen voor de klant */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl py-8 px-6 md:py-10 md:px-10 shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a3a52] rounded-full mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">
                Wat betekent osmosewater voor u?
              </h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Osmosewater is 100% zuiver water – zonder mineralen, kalk of chemicaliën. 
                Het resultaat? <strong>Geen strepen, geen vlekken, geen kalkaanslag.</strong> 
                Uw ramen blijven langer schoon en het is volledig veilig voor mens, dier en plant. 
                Geen agressieve middelen, alleen een perfect resultaat.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Streeploos resultaat – gegarandeerd</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Geen chemicaliën – veilig voor u en uw gezin</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Milieuvriendelijk – beter voor de natuur</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Langer schoon – bespaart u tijd en geld</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Veilig voor alle oppervlakken – geen schade</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">Geen kalkaanslag – ramen blijven stralen</span>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Waarom bedrijven en particulieren <br />voor ons kiezen
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                D.T.G. Cleaning is hét schoonmaakbedrijf in Nijkerk en omgeving voor wie kiest voor kwaliteit, betrouwbaarheid en een stralend resultaat.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Streeploos resultaat – zonder gedoe</h3>
                <p className="text-gray-600 mb-4">
                  Geen strepen, geen vlekken, geen chemicaliën. Alleen kristalhelder glas dat er wekenlang perfect uitziet.
                </p>
                <GreenCheckLabel label="Zakelijk" />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ook de hoogste ramen – veilig bereikt</h3>
                <p className="text-gray-600 mb-4">
                  Geen steiger of hoogwerker nodig. Ons telewash-systeem bereikt tot 13,5 meter hoogte – snel, veilig en zonder overlast.
                </p>
                <GreenCheckLabel label="Zakelijk" />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Vaste planning – geen verrassingen</h3>
                <p className="text-gray-600 mb-4">
                  Vaste dag, vaste glazenwasser. Geen gedoe, geen omkijken. U weet waar u aan toe bent.
                </p>
                <GreenCheckLabel label="Zakelijk" />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#1a3a52] rounded-full flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Volledig verzekerd – voor uw gemoedsrust</h3>
                <p className="text-gray-600 mb-4">
                  Mocht er onverhoopt iets gebeuren, dan staat u niet voor de kosten. Uw pand is bij ons in veilige handen.
                </p>
                <GreenCheckLabel label="Zakelijk" />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Flexibel en betaalbaar – ook voor thuis</h3>
                <p className="text-gray-600 mb-4">
                  Geen gedoe met ingewikkelde contracten. Wij plannen op uw gewenste dag en tijd – ook voor particulieren.
                </p>
                <GreenCheckLabel label="Ook voor particulieren" />
              </div>
            </div>

            {/* CTA binnen de sectie */}
            <div className="text-center mt-12">
              <Link href="/contact" className="inline-flex items-center bg-[#1a3a52] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#2c4a66] transition-colors">
                <Mail className="w-5 h-5 mr-2" /> Vrijblijvend offerte aanvragen <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
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
