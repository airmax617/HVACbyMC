import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, description, to, accent = false }) {
  return (
    <Link
      to={to}
      className={`group flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
        accent
          ? 'bg-navy-800 border-navy-700 text-white'
          : 'bg-white border-gray-100 text-gray-800'
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${accent ? 'bg-amber-500' : 'bg-navy-50'}`}>
        <Icon size={24} className={accent ? 'text-white' : 'text-navy-700'} />
      </div>
      <div>
        <h3 className={`text-lg font-semibold ${accent ? 'text-white' : 'text-navy-900'}`}>{title}</h3>
        <p className={`text-sm mt-1 leading-relaxed ${accent ? 'text-gray-300' : 'text-gray-500'}`}>{description}</p>
      </div>
      <div className={`mt-auto flex items-center gap-1 text-sm font-medium ${accent ? 'text-amber-400' : 'text-navy-600'} group-hover:gap-2 transition-all`}>
        Learn more <ArrowRight size={16} />
      </div>
    </Link>
  )
}
