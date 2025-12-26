import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              SALOME<span className="text-white">SALOON</span>
            </h2>
            <p className="text-gray-400 mb-4">
              Premier women's hair salon specializing in exquisite braiding techniques and hair care services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-pink-500">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-pink-500">Services & Pricing</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-pink-500">Gallery</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-pink-500">Book Appointment</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-pink-500">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Box Braids</li>
              <li className="text-gray-400">Cornrows</li>
              <li className="text-gray-400">Goddess Braids</li>
              <li className="text-gray-400">Knotless Braids</li>
              <li className="text-gray-400">Maintenance & Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <FaMapMarkerAlt className="text-pink-500" />
                <span>123 Beauty Street, Hair City, HC 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaPhone className="text-pink-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FaEnvelope className="text-pink-500" />
                <span>info@salomesalon.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SALOME SALOON. All rights reserved.</p>
          <p className="mt-2 text-sm">Professional braiding services for women</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;