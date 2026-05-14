import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Heating', to: '/heating' },
  { label: 'Cooling', to: '/cooling' },
  { label: 'Electrical', to: '/electrical' },
  { label: 'Daikin Systems', to: '/daikin' },
  { label: 'Maintenance', to: '/maintenance' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <img src="/logo.svg" alt="MC Heating and Cooling" className="hidden lg:block h-10 w-auto" />
            <img src="/logo-icon.svg" alt="MC Heating and Cooling" className="lg:hidden h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-white/10'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Call CTA */}
          <a
            href="tel:2678156344"
            className="hidden lg:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <Phone size={16} />
            267-815-6344
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-950 border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-400 bg-white/10'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="tel:2678156344"
              className="mt-2 flex items-center justify-center gap-2 bg-amber-500 text-white font-semibold px-4 py-3 rounded-lg"
            >
              <Phone size={16} />
              Call 267-815-6344
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
