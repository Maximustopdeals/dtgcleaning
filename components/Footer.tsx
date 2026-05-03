import Link from "next/link";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/schoonmaakdiensten", label: "Schoonmaakdiensten" },
    { path: "/over-mij", label: "Over mij" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#1a3a52] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/images/image(1).png" alt="D.T.G. Cleaning" className="h-16 w-auto mb-4" />
            <p className="text-white/80 text-sm mb-4">
              D.T.G. Cleaning – Uw tevredenheid staat voorop. Met maatwerk, vakmanschap en een scherp oog voor detail.
            </p>
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2">
              <span className="text-green-400 mr-2">✦</span>
              <span className="text-sm font-semibold">STREEPLOOS GEGARANDEERD</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="flex items-center text-white/80 hover:text-white">
                    <ArrowRight className="w-4 h-4 mr-2" /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Openingstijden</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Maandag t/m vrijdag</p>
                  <p>07:00 – 18:00 uur</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Zaterdag & Zondag</p>
                  <p>Gesloten</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" /> Nijkerk & Putten
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:info@dtgcleaning.nl">info@dtgcleaning.nl</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+31634683019">+31 6 34683019</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© 2026 D.T.G. Cleaning | Alle rechten voorbehouden</p>
          <div className="flex items-center space-x-6">
            <a href="https://www.dtgcleaning.nl/wp-content/uploads/2026/03/Algemene-Voorwaarden.pdf" target="_blank" className="text-white/60 hover:text-white text-sm">Algemene voorwaarden</a>
            <a href="https://www.dtgcleaning.nl/wp-content/uploads/2026/03/Privacy-Verklaring.pdf" target="_blank" className="text-white/60 hover:text-white text-sm">Privacy verklaring</a>
            <a href="https://www.dtgcleaning.nl/wp-content/uploads/2026/03/Disclaimer.pdf" target="_blank" className="text-white/60 hover:text-white text-sm">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
