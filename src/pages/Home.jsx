import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Phone, Calendar, Flame, Wind, Zap, Wrench, Star,
  CheckCircle, MapPin, Clock, Shield, ThumbsUp, Award
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'

const PHONE = '267-815-6344'

const services = [
  { icon: Flame,  title: 'Heating',          description: 'Furnace repair, heat pump installation, boiler service, and seasonal tune-ups.', to: '/heating' },
  { icon: Wind,   title: 'Cooling & AC',      description: 'AC repair, replacement, Daikin mini-split installation, and airflow troubleshooting.', to: '/cooling' },
  { icon: Zap,    title: 'Electrical',        description: 'Panel upgrades, outlets, lighting, dedicated circuits, and electrical troubleshooting.', to: '/electrical' },
  { icon: Wrench, title: 'Maintenance Plans', description: 'Seasonal inspections, filter reminders, priority scheduling, and system checks.', to: '/maintenance' },
]

const whyUs = [
  { icon: Clock,       title: 'Responsive Scheduling',  body: 'We respect your time. Same-week appointments available for most services.' },
  { icon: ThumbsUp,    title: 'Honest Recommendations', body: 'We tell you what you actually need — no upselling or unnecessary repairs.' },
  { icon: Shield,      title: 'Licensed & Insured',      body: 'Fully licensed and insured for your peace of mind on every job.' },
  { icon: Award,       title: 'Daikin Authorized',       body: 'Certified reseller and installer of Daikin high-efficiency HVAC systems.' },
  { icon: CheckCircle, title: 'Quality Workmanship',     body: 'Clean installs, thorough testing, and follow-up support on every project.' },
  { icon: Phone,       title: '24/7 Emergency Service',  body: 'When your heat goes out at 2am, we pick up. Emergency service always available.' },
]

const reviews = [
  { name: 'Jennifer M.', location: 'Bensalem, PA',  stars: 5, text: 'MC Heating and Cooling replaced our old furnace and did a fantastic job. Fast, clean, and reasonably priced. Highly recommend!' },
  { name: 'David R.',    location: 'Levittown, PA', stars: 5, text: 'They installed a Daikin mini-split in my home office and it works perfectly. Very knowledgeable team, answered all my questions.' },
  { name: 'Sarah K.',    location: 'Bristol, PA',   stars: 5, text: 'Called them for an AC emergency on the hottest day of the summer. They came out within hours. Incredible service.' },
]

const serviceArea = {
  'Philadelphia County': ['Philadelphia', 'Northeast Philadelphia', 'South Philadelphia'],
  'Bucks County': ['Bensalem', 'Bristol', 'Levittown', 'Langhorne', 'Feasterville', 'Trevose', 'Southampton', 'Newtown', 'Yardley', 'Morrisville', 'Penndel', 'Croydon'],
  'Montgomery County': ['Warminster', 'Horsham', 'Hatboro', 'Willow Grove', 'Abington', 'Cheltenham', 'Jenkintown', 'Ambler'],
}

const portfolioPhotos = Array.from({ length: 191 }, (_, i) => `/photos/photo-${String(i + 1).padStart(2, '0')}.jpg`)

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MC Heating and Cooling | HVAC &amp; Electrical Services</title>
        <meta name="description" content="MC Heating and Cooling provides reliable heating, cooling, electrical, and maintenance services. Daikin authorized reseller. Call 267-815-6344." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/photos/photo-03.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="inline-block bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Daikin Authorized Reseller
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Reliable HVAC &amp; Electrical Services When You Need Them Most
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              MC Heating and Cooling provides dependable heating, cooling, electrical, and maintenance services with honest recommendations, quality workmanship, and responsive scheduling.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:2678156344" className="btn-primary text-base px-8 py-4">
                <Phone size={20} /> Call Now: {PHONE}
              </a>
              <Link to="/contact" className="btn-outline-white text-base px-8 py-4">
                <Calendar size={20} /> Request Service
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-amber-400" /> Licensed &amp; Insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-amber-400" /> 24/7 Emergency</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-amber-400" /> Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Banner ── */}
      <div className="bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white font-semibold text-sm text-center sm:text-left">
            Heating or cooling emergency? We respond fast — 24 hours a day, 7 days a week.
          </p>
          <a href="tel:2678156344" className="shrink-0 bg-white text-amber-600 font-bold text-sm px-5 py-2 rounded-lg hover:bg-amber-50 transition-colors">
            Call {PHONE}
          </a>
        </div>
      </div>

      {/* ── Services ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-sub mx-auto">Everything you need to stay comfortable year-round.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => <ServiceCard key={s.to} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── Daikin Section ── */}
      <section className="py-20 px-4 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-3">Authorized Reseller</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Daikin High-Efficiency Comfort Systems</h2>
              <p className="mt-5 text-gray-300 text-lg leading-relaxed">
                As a Daikin reseller, MC Heating and Cooling helps homeowners and businesses upgrade to high-efficiency comfort systems, including ductless mini-splits, heat pumps, and central air solutions. Our team can help you choose the right system for your home, comfort needs, and budget.
              </p>
              <ul className="mt-6 space-y-3">
                {['Ductless Mini-Split Systems','High-Efficiency Heat Pumps','Central Air Solutions','Multi-Zone Comfort Control'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-200">
                    <CheckCircle size={18} className="text-amber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/daikin" className="btn-primary">Learn About Daikin Systems</Link>
                <a href="tel:2678156344" className="btn-outline-white">Get a Quote</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {portfolioPhotos.slice(0, 4).map((src, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden">
                  <img src={src} alt="HVAC installation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Our Work</h2>
            <p className="section-sub mx-auto">Recent installations and service calls in the area.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {portfolioPhotos.map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img src={src} alt={`MC HVAC work photo ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose MC Heating and Cooling?</h2>
            <p className="section-sub mx-auto">We built our reputation on showing up, doing the job right, and treating customers honestly.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">{title}</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Our Customers Say</h2>
            <p className="section-sub mx-auto">Don't take our word for it.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map(({ name, location, stars, text }) => (
              <div key={name} className="card">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">"{text}"</p>
                <div className="mt-4 border-t border-gray-100 pt-3">
                  <p className="font-semibold text-navy-900 text-sm">{name}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5"><MapPin size={12} />{location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="py-16 px-4 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <MapPin size={32} className="text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Serving Philadelphia, Bucks & Montgomery Counties</h2>
          <p className="text-gray-400 mb-10">We provide heating, cooling, electrical, and maintenance services to homes and businesses across the tri-county area.</p>
          <div className="grid sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            {Object.entries(serviceArea).map(([county, towns]) => (
              <div key={county} className="bg-white/10 rounded-xl p-5">
                <h3 className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">{county}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {towns.map(town => (
                    <span key={town} className="bg-white/10 text-gray-200 text-xs px-2.5 py-1 rounded-full">{town}</span>
                  ))}
                  <span className="text-gray-500 text-xs px-2.5 py-1">& more</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section id="request" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Request Service</h2>
            <p className="section-sub mx-auto">Fill out the form and we'll get back to you quickly — usually within a few hours.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
