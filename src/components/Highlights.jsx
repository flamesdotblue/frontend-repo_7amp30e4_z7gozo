import React from 'react'

const farmerLinks = [
  { title: 'Beneficiary Status', desc: 'Check Aadhar/Account/Mobile based status', color: 'bg-green-700 text-white' },
  { title: 'eKYC', desc: 'Complete eKYC to continue receiving benefits', color: 'bg-yellow-400 text-green-900' },
  { title: 'New Farmer Registration', desc: 'Apply online to join the scheme', color: 'bg-white border border-green-700 text-green-800' },
  { title: 'Edit/Update Registration', desc: 'Update details for accurate verification', color: 'bg-white border border-green-700 text-green-800' },
]

const stats = [
  { label: 'Beneficiaries', value: '11.8 Cr+' },
  { label: 'Installments Released', value: '16' },
  { label: 'Total Disbursed', value: '₹3.0+ Lakh Cr' },
]

function Highlights() {
  return (
    <section id="farmer-corner" className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-green-800">Farmer Corner</h3>
        <p className="text-gray-600 mt-1">Quick access to essential services</p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {farmerLinks.map((item) => (
            <a key={item.title} href="#" className={`rounded-lg p-4 shadow-sm hover:shadow ${item.color}`}>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm opacity-80">{item.desc}</p>
            </a>
          ))}
        </div>

        <div id="benefits" className="mt-10 grid md:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-lg p-6 shadow">
              <p className="text-2xl font-bold text-green-700">{s.value}</p>
              <p className="text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div id="guidelines" className="mt-10 bg-white rounded-lg shadow p-6">
          <h4 className="text-lg font-semibold text-green-800">Scheme Highlights</h4>
          <ul className="mt-3 list-disc pl-5 text-gray-600 space-y-1">
            <li>Direct Benefit Transfer of ₹6,000 per year in three equal installments.</li>
            <li>Coverage for eligible farmer families across the country.</li>
            <li>Transparent and accountable delivery using Aadhaar-based verification.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Highlights
