import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-navy-700 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {breadcrumb && (
          <p className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-3">{breadcrumb}</p>
        )}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="tel:2678156344" className="btn-primary">
            <Phone size={18} /> Call 267-815-6344
          </a>
          <Link to="/contact" className="btn-outline-white">
            Request Service
          </Link>
        </div>
      </div>
    </section>
  )
}
