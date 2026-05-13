import { Phone, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-2xl">
      <div className="grid grid-cols-2 divide-x divide-gray-200">
        <a
          href="tel:2678156344"
          className="flex items-center justify-center gap-2 py-4 text-white bg-navy-800 font-semibold text-sm active:bg-navy-900"
        >
          <Phone size={18} />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 py-4 text-white bg-amber-500 font-semibold text-sm active:bg-amber-600"
        >
          <Calendar size={18} />
          Request Service
        </Link>
      </div>
    </div>
  )
}
