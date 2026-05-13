import { Helmet } from 'react-helmet-async'
import { Wrench, Bell, Clock, BarChart, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const features = [
  { icon: Wrench,   title: 'Seasonal Inspections',         desc: 'Full system inspection in fall (heating) and spring (cooling) to catch problems before they become expensive breakdowns.' },
  { icon: Bell,     title: 'Filter Replacement Reminders', desc: 'We track your system and remind you when filters need changing to keep airflow and efficiency optimal.' },
  { icon: Clock,    title: 'Priority Scheduling',          desc: 'Maintenance plan customers go to the front of the line for service calls — especially important during peak heating and cooling season.' },
  { icon: BarChart, title: 'System Performance Checks',    desc: 'We measure and record key performance metrics each visit so we can spot trends before they turn into failures.' },
]

const included = [
  'Check thermostat calibration and operation',
  'Inspect electrical connections and components',
  'Lubricate all moving parts',
  'Check refrigerant levels (cooling systems)',
  'Clean condenser and evaporator coils',
  'Inspect heat exchanger for cracks (heating systems)',
  'Test safety controls and limits',
  'Check flue and combustion venting',
  'Measure airflow and static pressure',
  'Record system performance metrics',
]

const benefits = [
  'Up to 30% lower energy bills',
  'Fewer emergency breakdowns',
  'Longer system lifespan',
  'Manufacturer warranty protection',
]

export default function Maintenance() {
  return (
    <>
      <Helmet>
        <title>Maintenance Plans | MC Heating and Cooling</title>
        <meta name="description" content="Seasonal inspections, priority scheduling, and system performance checks. Keep your HVAC system running at peak performance. Call 267-815-6344." />
      </Helmet>

      <PageHero
        breadcrumb="Services"
        title="HVAC Maintenance Plans"
        subtitle="Prevent breakdowns, extend system life, and keep your home comfortable year-round with a scheduled maintenance plan."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-amber-600" />
                </div>
                <h3 className="font-semibold text-navy-900">{title}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-6">What is Included in Every Visit</h2>
            <ul className="space-y-3">
              {included.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-amber-500 shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy-900 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Why Maintenance Matters</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              HVAC systems that receive annual maintenance last 30-50% longer than neglected systems. A $150 tune-up today can prevent a $3,000 emergency replacement down the road.
            </p>
            <ul className="space-y-3 mb-6">
              {benefits.map(b => (
                <li key={b} className="flex items-center gap-2 text-sm text-gray-200">
                  <CheckCircle size={15} className="text-amber-400 shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <a href="tel:2678156344" className="btn-primary w-full justify-center">Call to Enroll</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Sign Up for a Maintenance Plan</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
