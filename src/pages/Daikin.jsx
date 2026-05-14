import { Helmet } from 'react-helmet-async'
import { CheckCircle, Award, Thermometer, Wind, Tag, ShoppingCart, Wrench } from 'lucide-react'
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

const specials = [
  {
    label: 'Limited Time',
    title: 'Summer Mini-Split Special',
    desc: 'Get $500 off installation on any Daikin ductless mini-split system. Perfect timing to stay cool all summer without breaking the bank.',
    badge: '$500 OFF',
    expires: 'Offer expires June 30, 2026',
  },
  {
    label: 'Rebate Combo',
    title: 'Heat Pump Rebate Bundle',
    desc: 'Combine available federal tax credits and PECO utility rebates with our dealer pricing — save up to $1,200 on a qualifying Daikin heat pump system.',
    badge: 'Up to $1,200 Savings',
    expires: 'Subject to rebate availability',
  },
  {
    label: 'New Install Bonus',
    title: 'Free 1-Year Maintenance Plan',
    desc: 'Purchase and install any new Daikin central air or heat pump system and receive a complimentary 1-year maintenance plan — a $199 value, on us.',
    badge: '$199 Value FREE',
    expires: 'While supplies last',
  },
]

const portfolioPhotos = Array.from({ length: 9 }, (_, i) => `/photos/daikin/photo-${String(i + 1).padStart(2, '0')}.jpg`)

export default function Daikin() {
  return (
    <>
      <Helmet>
        <title>Daikin HVAC Systems | MC Heating and Cooling</title>
        <meta name="description" content="MC Heating and Cooling is a Daikin authorized reseller. Buy Daikin units direct and get them installed by our team. Mini-splits, heat pumps, and central air. Call 267-815-6344." />
      </Helmet>

      <PageHero
        breadcrumb="Daikin Systems"
        title="Daikin Authorized Reseller & Installer"
        subtitle="Buy Daikin units direct from us — we carry exclusive specials you won't find at big-box stores. Have us install it or pick it up yourself."
      />

      {/* Authorized Dealer Badge */}
      <div className="bg-gray-50 border-b border-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-6 justify-center text-center sm:text-left">
          <img src="/daikin-logo.png" alt="Daikin Authorized Dealer" className="h-24 w-auto shrink-0" />
          <div className="hidden sm:block w-px h-12 bg-gray-200 shrink-0" />
          <div className="flex items-start gap-3">
            <Award size={28} className="text-navy-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-navy-900 text-lg">Official Daikin Authorized Dealer</p>
              <p className="text-sm text-gray-500 mt-1">As an authorized reseller, we purchase directly from Daikin — giving us access to factory-backed warranties, exclusive dealer pricing, and units you can buy right through us. No middleman. No markup games.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buy from us + Install options */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Buy Direct. Install with Us or Go DIY.</h2>
            <p className="section-sub mx-auto">We sell Daikin units directly to homeowners and contractors. We only carry our current specials — limited inventory, real savings.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="card border-2 border-navy-100 text-center">
              <div className="w-14 h-14 rounded-2xl bg-navy-50 flex items-center justify-center mb-4 mx-auto">
                <ShoppingCart size={26} className="text-navy-700" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Buy the Unit</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">Purchase any Daikin unit from our current specials inventory at authorized dealer pricing. Pick it up or arrange delivery — the unit is yours.</p>
              <p className="mt-4 text-xs text-amber-600 font-semibold uppercase tracking-wide">Unit purchase only</p>
            </div>
            <div className="card border-2 border-amber-200 text-center relative overflow-hidden">
              <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">Most Popular</span>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-4 mx-auto">
                <Wrench size={26} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Buy + We Install</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">Bundle the unit with our professional installation. One call, one team, one warranty. We handle everything from delivery to startup and walk-through.</p>
              <p className="mt-4 text-xs text-amber-600 font-semibold uppercase tracking-wide">Best value — unit + labor</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            <span className="font-semibold text-gray-500">Note:</span> We carry specials inventory only — not the full Daikin catalog. Call or message us to see what's currently available.
          </p>
        </div>
      </section>

      {/* Systems */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Daikin Product Lines We Carry</h2>
            <p className="section-sub mx-auto">We stock specials across these categories — availability varies, so reach out to check current inventory.</p>
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading text-center mb-8">Recent Daikin Installations</h2>
          <div className="grid grid-cols-3 gap-3">
            {portfolioPhotos.map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-gray-200">
                <img src={src} alt={`Daikin installation ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Current Specials</h2>
            <p className="section-sub mx-auto">We only carry specials — limited inventory at real dealer pricing. These deals won't last long.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specials.map(({ label, title, desc, badge, expires }) => (
              <div key={title} className="card border-2 border-amber-100 relative overflow-hidden">
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">{label}</span>
                <Tag size={24} className="text-amber-500 mb-3" />
                <h3 className="text-xl font-bold text-navy-900 pr-16">{title}</h3>
                <p className="text-gray-500 text-sm mt-2 mb-4 leading-relaxed">{desc}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-amber-600 font-bold text-sm">{badge}</span>
                  <span className="text-gray-400 text-xs">{expires}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-heading">Get a Daikin Quote</h2>
            <p className="section-sub mx-auto">Tell us what you need — unit only, unit + install, or just a question. We'll get back to you fast.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
