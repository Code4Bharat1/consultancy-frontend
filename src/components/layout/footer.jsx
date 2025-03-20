import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* About Section */}
          <div>
            <a href="/aboutus"><h3 className="text-2xl font-bold hover:text-blue-600">About Us</h3></a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="text-gray-200 hover:text-white transition">Home</a></li>
              <li><a href="/services" className="text-gray-200 hover:text-white transition">Services</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
           <a href="/contactus"> <h3 className="text-2xl font-bold hover:text-blue-300 transition">Contact Us</h3></a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-orange-400 mt-10 pt-6 text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Consultancy Firm. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
