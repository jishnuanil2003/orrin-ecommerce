import React from 'react'

const Footer = () => {
  return (
        <footer className="bg-black text-white px-8 py-12 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div>
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Find A Store</li>
            <li className="hover:text-white cursor-pointer">Become A Member</li>
            <li className="hover:text-white cursor-pointer">Premium Watch collection</li>
            <li className="hover:text-white cursor-pointer">Product Advice</li>
            <li className="hover:text-white cursor-pointer">Send Us Feedback</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Help</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Get Help</li>
            <li className="hover:text-white cursor-pointer">Order Status</li>
            <li className="hover:text-white cursor-pointer">Delivery</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Payment Options</li>
            <li className="hover:text-white cursor-pointer">Contact Us On Orrin.com Inquiries</li>
            <li className="hover:text-white cursor-pointer">Contact Us On All Other Inquiries</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">About Orrin</li>
            <li className="hover:text-white cursor-pointer">News</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Investors</li>
            <li className="hover:text-white cursor-pointer">Sustainability</li>
            <li className="hover:text-white cursor-pointer">Impact</li>
            <li className="hover:text-white cursor-pointer">Report a Concern</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
        © 2025 Orrin, Inc. All rights reserved &nbsp; | &nbsp;
        <span className="hover:text-white cursor-pointer">Guides</span> &nbsp; | &nbsp;
        <span className="hover:text-white cursor-pointer">Terms of Sale</span> &nbsp; | &nbsp;
        <span className="hover:text-white cursor-pointer">Terms of Use</span> &nbsp; | &nbsp;
        <span className="hover:text-white cursor-pointer">Orrin Privacy Policy</span> &nbsp; | &nbsp;
        <span className="hover:text-white cursor-pointer">Privacy Settings</span>
      </div>
    </footer>
  )
}

export default Footer
