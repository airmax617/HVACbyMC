import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const urgencyOptions = ['Routine / Schedule at convenience', 'Soon (within a week)', 'Urgent (within 48 hrs)', 'Emergency']
const serviceOptions = ['Heating Repair / Replacement', 'Cooling / AC Repair', 'AC Installation', 'Electrical Work', 'Daikin System Install', 'Maintenance / Tune-up', 'Other']
const timeOptions = ['Morning (7am–12pm)', 'Afternoon (12pm–5pm)', 'Evening (5pm–7pm)', 'Flexible / Any time']

export default function ContactForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '',
    service: '', urgency: '', time: '', message: '',
  })

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <CheckCircle size={56} className="text-green-500" />
        <h3 className="text-2xl font-bold text-navy-900">Request Received!</h3>
        <p className="text-gray-500 max-w-sm">We'll reach out within a few hours to confirm your appointment. For immediate help, call us at <a href="tel:2678156344" className="text-navy-700 font-semibold">267-815-6344</a>.</p>
      </div>
    )
  }

  const fieldClass = "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent transition bg-gray-50 placeholder-gray-400"
  const labelClass = "block text-sm font-medium text-gray-700 mb-1"

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className={`grid gap-5 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
        <div>
          <label className={labelClass}>Name *</label>
          <input required name="name" value={form.name} onChange={handle} placeholder="Your full name" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Phone *</label>
          <input required name="phone" type="tel" value={form.phone} onChange={handle} placeholder="(215) 555-0000" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@example.com" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Service Address</label>
          <input name="address" value={form.address} onChange={handle} placeholder="Street, City, ZIP" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass}>Service Needed</label>
          <select name="service" value={form.service} onChange={handle} className={fieldClass}>
            <option value="">Select a service…</option>
            {serviceOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Urgency</label>
          <select name="urgency" value={form.urgency} onChange={handle} className={fieldClass}>
            <option value="">Select urgency…</option>
            {urgencyOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label className={labelClass}>Preferred Appointment Time</label>
          <select name="time" value={form.time} onChange={handle} className={fieldClass}>
            <option value="">Select preferred time…</option>
            {timeOptions.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label className={labelClass}>Photos / Videos</label>
          <div className="border-2 border-dashed border-gray-200 rounded-lg px-4 py-6 text-center text-sm text-gray-400 bg-gray-50 cursor-pointer hover:border-navy-300 transition-colors">
            Click to upload photos or videos (optional)<br />
            <span className="text-xs">Helps us diagnose the issue faster</span>
          </div>
        </div>
        <div className={compact ? '' : 'sm:col-span-2'}>
          <label className={labelClass}>Additional Details</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            rows={4}
            placeholder="Describe the issue or what you need…"
            className={fieldClass}
          />
        </div>
      </div>
      <button type="submit" className="btn-primary w-full justify-center text-base py-4">
        <Send size={18} />
        Submit Service Request
      </button>
      <p className="text-xs text-center text-gray-400">For emergencies, call us directly at <a href="tel:2678156344" className="font-medium text-navy-600">267-815-6344</a></p>
    </form>
  )
}
