import { Helmet } from 'react-helmet-async'
import { Wind, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const services = [
  { title: 'AC Repair',                         desc: 'Warm air from your vents? System not turning on? We diagnose and fix AC problems fast, especially during summer emergencies.' },
  { title: 'AC Replacement',                     desc: 'If your system is aging, inefficient, or breaking down repeatedly, we will help you find the right replacement and install it properly.' },
  { title: 'Daikin Mini-Split Installation',     desc: 'Ductless mini-splits provide efficient zoned comfort without ductwork. We are a Daikin authorized installer — perfect for additions, garages, and whole-home upgrades.' },
  { title: 'Refrigerant & Airflow Troubleshooting', desc: 'Low refrigerant, blocked coils, or poor airflow can all reduce efficiency and comfort. We find the root cause and fix it right.' },
  { title: 'Seasonal Cooling Tune-ups',          desc: 'A spring tune-up extends system life and prevents breakdowns on the hottest days. We clean, inspect, and test your AC before cooling season.' },
]

const warningSigns = [
  'Warm air blowing from vents',
  'AC running constantly but not cooling',
  'Ice forming on the unit',
  'Strange smells or unusual sounds',
  'Water leaking around the system',
  'High energy bills in summer',
]

export default function Cooling() {
  return (
    <>
      <Helmet>
        <title>Cooling & AC Services | MC Heating and Cooling</title>
        <meta name="description" content="AC repair, replacement, Daikin mini-split installation, and seasonal tune-ups. MC Heating and Cooling — call 267-815-6344." />
      </Helmet>

      <PageHero
        breadcrumb="Services"
        title="Cooling & AC Services"
        subtitle="Stay cool and comfortable all summer with expert AC repair, installation, and maintenance."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ title, desc }) => (
              <div key={title} className="card flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                  <Wind size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 text-lg">{title}</h3>
                  <p className="text-gray-500 mt-1 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Is Your AC Struggling?</h2>
            <ul className="space-y-3">
              {warningSigns.map(s => (
                <li key={s} className="flex items-start gap-2 text-gray-300 text-sm">
                  <CheckCircle size={17} className="text-amber-400 shrink-0 mt-0.5" /> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">AC emergency in summer heat?</h3>
            <p className="text-gray-300 text-sm mb-6">We offer fast response for cooling emergencies. Do not wait — call us now and we will get someone out as quickly as possible.</p>
            <a href="tel:2678156344" className="btn-primary w-full justify-center">Call 267-815-6344</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Schedule AC Service</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
