import Link from 'next/link';
import { FaCalendarAlt, FaPhone, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Hair Transformation?
          </h2>
          <p className="text-xl text-pink-200 max-w-3xl mx-auto">
            Book your appointment today and experience the SALOME difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Book Appointment */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                <FaCalendarAlt className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Book Online</h3>
              <p className="text-pink-200 mb-6">
                Easy, fast, and secure online booking available 24/7
              </p>
              <Link
                href="/booking"
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-bold transition-all w-full text-center"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Call Us */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Call Us</h3>
              <p className="text-pink-200 mb-6">
                Speak directly with our team for personalized assistance
              </p>
              <a
                href="tel:+15551234567"
                className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full font-bold transition-all w-full text-center"
              >
                (555) 123-4567
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                <FaInstagram className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <p className="text-pink-200 mb-6">
                See our latest styles and transformations on social media
              </p>
              <div className="flex gap-4 w-full">
                <a
                  href="#"
                  className="flex-1 bg-white text-pink-600 hover:bg-pink-50 px-4 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2"
                >
                  <FaInstagram /> Instagram
                </a>
                <a
                  href="#"
                  className="flex-1 bg-green-500 text-white hover:bg-green-600 px-4 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-pink-200">✓ 100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-pink-200">✓ Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-pink-200">✓ Flexible Payment Options</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-pink-200">✓ Gift Cards Available</span>
            </div>
          </div>

          <p className="text-pink-200 mb-8 max-w-2xl mx-auto">
            Join our community of beautiful, confident women who trust SALOME Salon 
            with their hair. Your perfect style awaits!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all"
            >
              View Our Gallery
            </Link>
            <Link
              href="/services"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-bold transition-all"
            >
              See All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;