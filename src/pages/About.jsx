import { Helmet } from 'react-helmet-async'
import { CheckCircle, Users, Award, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'

const highlights = [
  { icon: Users,       title: 'Locally Owned & Operated', body: 'We live and work in this area. Our reputation depends on every job we do.' },
  { icon: Award,       title: 'Daikin Authorized Dealer',  body: 'Certified to sell, install, and service the full Daikin product lineup.' },
  { icon: CheckCircle, title: 'Licensed & Insured',        body: 'Fully licensed HVAC and electrical contractor. License #: [Placeholder]' },
  { icon: MapPin,      title: 'Tri-County Service Area', body: 'Philadelphia, Bucks, and Montgomery Counties.' },
]

const stats = [
  { num: '500+', label: 'Installations Completed' },
  { num: '24/7', label: 'Emergency Service' },
  { num: '100%', label: 'Licensed & Insured' },
  { num: '5 Star', label: 'Customer Satisfaction' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | MC Heating and Cooling</title>
        <meta name="description" content="Learn about MC Heating and Cooling — a local HVAC and electrical contractor serving the greater Philadelphia area. Honest, reliable, and experienced." />
      </Helmet>

      <PageHero
        breadcrumb="Company"
        title="About MC Heating and Cooling"
        subtitle="A local contractor you can trust — honest recommendations, quality work, and responsive service."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-5">Local Expertise You Can Count On</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              MC Heating and Cooling is a locally owned HVAC and electrical contractor serving homeowners and light commercial customers throughout Philadelphia, Bucks, and Montgomery Counties.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We built this company on a simple philosophy: show up on time, do the job right, and never recommend something a customer does not actually need. Whether you are dealing with a no-heat emergency or planning a whole-home HVAC upgrade, we treat every job with the same level of care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a Daikin authorized dealer and installer, we are equipped to provide the latest in high-efficiency comfort technology — including ductless mini-splits, heat pumps, and central air systems.
            </p>
          </div>
          <div className="space-y-5">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-navy-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900">{title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map(({ num, label }) => (
              <div key={label}>
                <div className="text-4xl font-bold text-navy-900">{num}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-navy-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-8">Call us or submit a service request — we will get back to you quickly and take good care of you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:2678156344" className="btn-primary">Call 267-815-6344</a>
            <a href="/contact" className="btn-outline-white">Request Service</a>
          </div>
        </div>
      </section>
    </>
  )
}
