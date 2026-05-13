import { Helmet } from 'react-helmet-async'
import { Flame, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const services = [
  { title: 'Furnace Repair & Replacement', desc: 'From a no-heat emergency to a full system upgrade, we diagnose and fix furnaces of all makes and models — or help you select an efficient replacement.' },
  { title: 'Heat Pump Installation',       desc: 'Heat pumps deliver efficient heating and cooling in one system. We install Daikin and other leading brands with proper sizing and refrigerant handling.' },
  { title: 'Boiler Service',               desc: 'Boiler not heating evenly? Leaking or making noise? We service and repair hot water and steam boilers for residential and light commercial properties.' },
  { title: 'Seasonal Heating Tune-ups',    desc: 'A fall tune-up keeps your heating system reliable all winter. We inspect, clean, and test every major component before you need it most.' },
]

const warningSigns = [
  'Unusual noises — banging, rattling, or screeching',
  'Uneven heating from room to room',
  'Heating bills higher than normal',
  'System cycles on and off frequently',
  'Pilot light or ignition issues',
  'System is over 15 years old',
]

export default function Heating() {
  return (
    <>
      <Helmet>
        <title>Heating Services | MC Heating and Cooling</title>
        <meta name="description" content="Furnace repair, heat pump installation, boiler service, and seasonal tune-ups. Call MC Heating and Cooling at 267-815-6344." />
      </Helmet>

      <PageHero
        breadcrumb="Services"
        title="Heating Services"
        subtitle="Keep your home warm and efficient all winter with expert heating repair, installation, and maintenance."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ title, desc }) => (
              <div key={title} className="card flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                  <Flame size={20} className="text-orange-600" />
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
            <h2 className="text-3xl font-bold mb-4">Signs Your Heating System Needs Attention</h2>
            <ul className="space-y-3">
              {warningSigns.map(s => (
                <li key={s} className="flex items-start gap-2 text-gray-300 text-sm">
                  <CheckCircle size={17} className="text-amber-400 shrink-0 mt-0.5" /> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Not sure what is wrong?</h3>
            <p className="text-gray-300 text-sm mb-6">Call us and describe what you are hearing or seeing. We will help you figure out if it is urgent or can wait for a scheduled visit.</p>
            <a href="tel:2678156344" className="btn-primary w-full justify-center">Call 267-815-6344</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Schedule Heating Service</h2>
            <p className="section-sub mx-auto">Describe what is happening and we will get you scheduled quickly.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
