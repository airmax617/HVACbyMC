import { Link } from 'react-router-dom'
import { Phone, Mail, Clock, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <img src="/logo-white.png" alt="MC Heating and Cooling" className="h-12 w-auto mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Reliable heating, cooling, electrical, and maintenance services for residential and light commercial customers.
            </p>
            <p className="mt-4 text-xs text-gray-500">License #: [Placeholder]</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['Heating', '/heating'],
                ['Cooling & AC', '/cooling'],
                ['Electrical', '/electrical'],
                ['Daikin Systems', '/daikin'],
                ['Maintenance Plans', '/maintenance'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-amber-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['About Us', '/about'],
                ['Contact', '/contact'],
                ['Request Service', '/contact'],
              ].map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-amber-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-amber-400 shrink-0" />
                <a href="tel:2678156344" className="hover:text-amber-400 transition-colors">267-815-6344</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-amber-400 shrink-0" />
                <a href="mailto:info@mchvac.com" className="hover:text-amber-400 transition-colors">info@mchvac.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div>Mon–Fri: 7am – 6pm</div>
                  <div>Sat: 8am – 2pm</div>
                  <div>Emergency: 24/7</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Shield size={15} className="text-amber-400 shrink-0" />
                <span>Licensed & Insured</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MC Heating and Cooling. All rights reserved.</p>
          <p>Serving Philadelphia, Bucks & Montgomery Counties</p>
        </div>
      </div>
    </footer>
  )
}
