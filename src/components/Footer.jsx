import React from 'react'

function Footer() {
  return (
    <footer id="contact" className="w-full bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-semibold text-white">About PM-KISAN</h5>
            <p className="mt-2 text-sm text-green-100/90">
              A Central Sector Scheme to supplement the financial needs of landholding farmer families.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-white">Quick Links</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a className="hover:underline" href="#farmer-corner">Farmer Corner</a></li>
              <li><a className="hover:underline" href="#benefits">Benefits</a></li>
              <li><a className="hover:underline" href="#guidelines">Guidelines</a></li>
              <li><a className="hover:underline" href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white">Helpline</h5>
            <p className="mt-2 text-sm">155261 / 011-24300606</p>
            <p className="text-sm">Email: pmkisan-ict[at]gov[dot]in</p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-xs text-green-200">
          © {new Date().getFullYear()} PM-KISAN (Demo clone for educational purposes)
        </div>
      </div>
    </footer>
  )
}

export default Footer
