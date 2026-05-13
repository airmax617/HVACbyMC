import { Helmet } from 'react-helmet-async'
import { CheckCircle, Award, Thermometer, Wind } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'

const systems = [
  {
    icon: Wind,
    title: 'Ductless Mini-Splits',
    desc: 'Perfect for rooms without ductwork — home offices, additions, garages, or sunrooms. One outdoor unit can power multiple indoor units for zoned comfort.',
    features: ['No ductwork needed','Heat and cool from a single unit','Quiet operation','Up to 25+ SEER efficiency'],
  },
  {
    icon: Thermometer,
    title: 'High-Efficiency Heat Pumps',
    desc: 'Daikin heat pumps deliver efficient heating and cooling in a single system. Excellent for whole-home comfort with lower operating costs than traditional HVAC.',
    features: ['Heating and cooling in one unit','Works efficiently in cold climates','Pairs with existing ductwork','Significant energy savings'],
  },
  {
    icon: Wind,
    title: 'Central Air Systems',
    desc: 'The Daikin central air lineup offers outstanding efficiency ratings and reliable performance for whole-home comfort through your existing duct system.',
    features: ['Whole-home cooling','Works with existing ducts','High SEER2 ratings','Smart thermostat compatible'],
  },
]

const portfolioPhotos = Array.from({ length: 8 }, (_, i) => `/photos/photo-${i + 5}.jpg`)

export default function Daikin() {
  return (
    <>
      <Helmet>
        <title>Daikin HVAC Systems | MC Heating and Cooling</title>
        <meta name="description" content="MC Heating and Cooling is a Daikin authorized reseller. Mini-splits, heat pumps, and central air — installed right. Call 267-815-6344." />
      </Helmet>

      <PageHero
        breadcrumb="Daikin Systems"
        title="Daikin Authorized Reseller & Installer"
        subtitle="We help homeowners and businesses upgrade to high-efficiency Daikin comfort systems — sized and installed right the first time."
      />

      {/* Badge */}
      <div className="bg-gray-50 border-b border-gray-100 py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-center text-center sm:text-left">
          <Award size={40} className="text-navy-700 shrink-0" />
          <div>
            <p className="font-bold text-navy-900">Daikin Authorized Dealer</p>
            <p className="text-sm text-gray-500">As an authorized reseller, we have access to the full Daikin product lineup, factory-backed warranties, and technical support — so you get the best system for your home and budget.</p>
          </div>
        </div>
      </div>

      {/* Systems */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Daikin Product Lines We Install</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {systems.map(({ icon: Icon, title, desc, features }) => (
              <div key={title} className="card">
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-navy-700" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">{title}</h3>
                <p className="text-gray-500 text-sm mt-2 mb-4 leading-relaxed">{desc}</p>
                <ul className="space-y-2">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={15} className="text-amber-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio photos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading text-center mb-8">Recent Daikin Installations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {portfolioPhotos.map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-200">
                <img src={src} alt={`Daikin installation ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Get a Daikin Quote</h2>
            <p className="section-sub mx-auto">Tell us about your home and comfort goals — we will recommend the right system and pricing.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
