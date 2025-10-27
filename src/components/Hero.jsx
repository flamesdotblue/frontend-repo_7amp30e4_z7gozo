import React from 'react'

function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-green-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 leading-tight">
              Income Support for Farmers across India
            </h2>
            <p className="mt-3 text-gray-600">
              PM-KISAN provides financial assistance to eligible farmer families to ensure a better livelihood.
              Check your status, complete eKYC, and explore services from the farmer corner.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#status" className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded">
                Beneficiary Status
              </a>
              <a href="#ekyc" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-semibold px-4 py-2 rounded">
                eKYC
              </a>
              <a href="#new-registration" className="inline-flex items-center gap-2 border border-green-700 text-green-800 hover:bg-green-50 font-semibold px-4 py-2 rounded">
                New Farmer Registration
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1543251699-5fde069c427a?q=80&w=1200&auto=format&fit=crop"
              alt="Farmer field"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <div className="absolute -bottom-6 left-6 bg-white rounded-lg shadow p-3">
              <p className="text-sm font-semibold text-green-800">Over 11 Crore Beneficiaries</p>
              <p className="text-xs text-gray-500">Empowering farmer families nation-wide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
