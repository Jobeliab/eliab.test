import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-semibold text-lg mb-3">Bungoma County E-Tendering</h4>
          <p className="mb-4">Transforming procurement through technology for transparency, efficiency and accountability.</p>
          <p className="text-sm">&copy; 2025 Bungoma County Government</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-lg mb-3">Contact Information</h4>
          <address className="not-italic">
            <p>Bungoma County Government</p>
            <p>P.O. Box 437-50200</p>
            <p>Bungoma, Kenya</p>
            <p className="mt-2">Email: procurement@bungoma.go.ke</p>
            <p>Tel: +254 700 000000</p>
          </address>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer