import React from 'react'

function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top identity bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              alt="Emblem of India"
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="text-xs text-gray-500 leading-tight">Government of India</p>
              <h1 className="text-lg sm:text-xl font-semibold text-green-700 leading-tight">Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)</h1>
              <p className="text-[11px] sm:text-xs text-gray-500 leading-tight">Department of Agriculture & Farmers Welfare</p>
            </div>
          </div>
          <img
            src="https://pmkisan.gov.in/newAssets/img/PM-KISAN-Logo.png"
            alt="PM-KISAN Logo"
            className="h-10 sm:h-12 object-contain"
          />
        </div>
      </div>

      {/* Nav bar */}
      <nav className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="hover:text-yellow-200">Home</a>
              <a href="#farmer-corner" className="hover:text-yellow-200">Farmer Corner</a>
              <a href="#benefits" className="hover:text-yellow-200">Benefits</a>
              <a href="#guidelines" className="hover:text-yellow-200">Guidelines</a>
              <a href="#faq" className="hover:text-yellow-200">FAQs</a>
              <a href="#contact" className="hover:text-yellow-200">Contact</a>
            </div>
            <button className="bg-yellow-400 text-green-900 font-semibold px-3 py-1 rounded hover:bg-yellow-300">
              Check Beneficiary Status
            </button>
          </div>
        </div>
      </nav>

      {/* Announcement ticker */}
      <div className="bg-yellow-50 border-t border-b border-yellow-200 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center text-[10px] font-semibold uppercase bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded">New</span>
            <marquee behavior="scroll" direction="left" scrollamount="5">
              16th installment released. Farmers are requested to complete eKYC for smooth benefit transfer. | Helpline: 155261 / 011-24300606
            </marquee>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
