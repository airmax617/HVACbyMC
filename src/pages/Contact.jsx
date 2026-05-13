import { Helmet } from 'react-helmet-async'
import { Phone, Mail, Clock, MapPin, Shield } from 'lucide-react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact & Request Service | MC Heating and Cooling</title>
        <meta name="description" content="Request HVAC or electrical service from MC Heating and Cooling. Call 267-815-6344 or submit a service request online." />
      </Helmet>

      <section className="bg-gradient-to-br from-navy-950 to-navy-800 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-3 text-gray-300 text-lg">We'll get back to you quickly. For emergencies, call us directly.</p>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

          {/* Info panel */}
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-lg font-bold text-navy-900 mb-4">Get In Touch</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Phone</p>
                    <a href="tel:2678156344" className="text-amber-600 font-semibold hover:underline">267-815-6344</a>
                    <p className="text-xs text-gray-400 mt-0.5">24/7 for emergencies</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Email</p>
                    <a href="mailto:info@mchvac.com" className="text-amber-600 hover:underline text-sm">info@mchvac.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Hours</p>
                    <p className="text-sm text-gray-600">Mon–Fri: 7am – 6pm</p>
                    <p className="text-sm text-gray-600">Sat: 8am – 2pm</p>
                    <p className="text-sm text-gray-600">Emergency: 24/7</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">Service Area</p>
                    <p className="text-sm text-gray-600">Greater Philadelphia Area<br />Bucks County & surrounding communities</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-navy-900">License</p>
                    <p className="text-sm text-gray-600">[Contractor License #Placeholder]</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Emergency callout */}
            <div className="bg-navy-900 text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Need Emergency Service?</h3>
              <p className="text-gray-300 text-sm mb-4">No heat in winter or no AC in summer? We respond to emergencies 24/7. Call us now.</p>
              <a href="tel:2678156344" className="btn-primary w-full justify-center">
                <Phone size={16} /> Call 267-815-6344
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-1">Request Service</h2>
            <p className="text-gray-500 text-sm mb-8">Fill out the form below and we'll be in touch shortly.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
