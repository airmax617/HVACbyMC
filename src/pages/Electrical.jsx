import { Helmet } from 'react-helmet-async'
import { Zap, CheckCircle, AlertTriangle } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const services = [
  { title: 'Electrical Troubleshooting', desc: 'Tripping breakers, flickering lights, dead outlets — we diagnose and fix electrical problems safely and accurately.' },
  { title: 'Panel Upgrades',             desc: 'Older panels can be a fire hazard and cannot handle modern electrical loads. We upgrade to modern, properly rated panels.' },
  { title: 'Outlets & Switches',         desc: 'Install new outlets, replace old ungrounded receptacles, add GFCI protection in kitchens and bathrooms, or fix faulty switches.' },
  { title: 'Lighting Installation',      desc: 'Recessed lighting, ceiling fans, under-cabinet lighting, and more. We handle the wiring so everything is safe and up to code.' },
  { title: 'Dedicated Circuits',         desc: 'High-draw appliances like HVAC equipment, EV chargers, dryers, and refrigerators need their own circuit. We install them correctly.' },
]

const safetyWarnings = [
  'Burning smell near outlets or panels',
  'Breakers that trip repeatedly',
  'Outlets that spark or feel warm',
  'Lights that flicker or dim unexpectedly',
  'Buzzing or crackling sounds from walls',
  'Panel has Federal Pacific or Zinsco breakers',
]

export default function Electrical() {
  return (
    <>
      <Helmet>
        <title>Electrical Services | MC Heating and Cooling</title>
        <meta name="description" content="Electrical troubleshooting, panel upgrades, outlets, lighting, and dedicated circuits. MC Heating and Cooling — call 267-815-6344." />
      </Helmet>

      <PageHero
        breadcrumb="Services"
        title="Electrical Services"
        subtitle="Safe, reliable electrical work for your home or business — from troubleshooting to full panel upgrades."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ title, desc }) => (
              <div key={title} className="card flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                  <Zap size={20} className="text-yellow-600" />
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

      <section className="py-16 px-4 bg-amber-50 border-y border-amber-100">
        <div className="max-w-4xl mx-auto flex gap-4 items-start">
          <AlertTriangle size={28} className="text-amber-500 shrink-0 mt-1" />
          <div>
            <h3 className="text-navy-900 font-bold text-lg">Electrical Safety Warning Signs</h3>
            <p className="text-gray-600 text-sm mt-1 mb-4">If you notice any of the following, call us right away — these can indicate serious hazards.</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {safetyWarnings.map(s => (
                <div key={s} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-amber-500 shrink-0 mt-0.5" /> {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Schedule Electrical Service</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
