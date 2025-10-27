import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
        {/* FAQ placeholder anchor to satisfy nav links */}
        <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-2xl font-bold text-green-800">Frequently Asked Questions</h3>
          <div className="mt-4 bg-gray-50 rounded-lg p-6 text-gray-600">
            This is a lightweight clone showcasing the look-and-feel of the PM-KISAN portal.
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
