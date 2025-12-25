'use client';

import { useState } from 'react';
import { FaClock, FaCheck, FaInfoCircle } from 'react-icons/fa';

const braidStyles = [
  {
    id: 1,
    name: 'Box Braids',
    category: 'Classic',
    price: '$120 - $300',
    duration: '3-5 hours',
    description: 'Traditional individual braids using synthetic or human hair extensions',
    details: [
      'Small, medium, or large sizes',
      'Human hair upgrade available',
      'Includes consultation',
      'Basic maintenance instructions',
    ],
    popular: true,
  },
  {
    id: 2,
    name: 'Knotless Braids',
    category: 'Modern',
    price: '$140 - $350',
    duration: '4-6 hours',
    description: 'Gentle braiding method that eliminates knots at the base for maximum comfort',
    details: [
      'Scalp-friendly technique',
      'Reduced tension on hairline',
      'Longer-lasting results',
      'Perfect for sensitive scalps',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Cornrows',
    category: 'Traditional',
    price: '$80 - $200',
    duration: '2-4 hours',
    description: 'Classic braiding technique where hair is braided close to the scalp',
    details: [
      'Various patterns available',
      'Can be combined with other styles',
      'Great for active lifestyles',
      'Easy maintenance',
    ],
    popular: false,
  },
  {
    id: 4,
    name: 'Goddess Braids',
    category: 'Elegant',
    price: '$150 - $400',
    duration: '5-7 hours',
    description: 'Larger, intricate braids often decorated with beads, rings, or accessories',
    details: [
      'Decorative elements included',
      'Custom accessory options',
      'Perfect for special events',
      'Royal, elegant appearance',
    ],
    popular: true,
  },
  {
    id: 5,
    name: 'French Braids',
    category: 'European',
    price: '$60 - $150',
    duration: '1-2 hours',
    description: 'Three-strand braid incorporating hair from the sides as you move down',
    details: [
      'Single or double braids',
      'Great for all hair types',
      'Versatile styling options',
      'Quick and elegant',
    ],
    popular: false,
  },
  {
    id: 6,
    name: 'Fulani Braids',
    category: 'Cultural',
    price: '$130 - $280',
    duration: '3-4 hours',
    description: 'Traditional West African style featuring a center part and decorative elements',
    details: [
      'Authentic Fulani pattern',
      'Coin and bead decorations',
      'Cultural significance',
      'Statement style',
    ],
    popular: false,
  },
  {
    id: 7,
    name: 'Butterfly Braids',
    category: 'Trendy',
    price: '$160 - $320',
    duration: '4-5 hours',
    description: 'Loose, wavy braids with a soft, romantic appearance',
    details: [
      'Soft, voluminous look',
      'Gentle on natural hair',
      'Modern twist on classics',
      'Versatile styling',
    ],
    popular: true,
  },
  {
    id: 8,
    name: 'Twisted Braids',
    category: 'Protective',
    price: '$100 - $250',
    duration: '3-4 hours',
    description: 'Two-strand twists that mimic the look of braids with less tension',
    details: [
      'Gentle protective style',
      'Softer appearance',
      'Easy to install and remove',
      'Great for transitioning hair',
    ],
    popular: false,
  },
];

const Services = () => {
  const [filter, setFilter] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const categories = ['all', 'Classic', 'Modern', 'Traditional', 'Elegant', 'European', 'Cultural', 'Trendy', 'Protective'];

  const filteredServices = filter === 'all' 
    ? braidStyles 
    : braidStyles.filter(service => service.category === filter);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Braiding Services & Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive menu of braiding services. 
            All prices include consultation and basic maintenance instructions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                service.popular ? 'ring-2 ring-pink-500' : ''
              }`}
            >
              {service.popular && (
                <div className="bg-pink-600 text-white text-sm font-bold py-1 text-center">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                    <span className="text-gray-500 text-sm">{service.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                    <div className="text-gray-500 text-sm flex items-center gap-1">
                      <FaClock /> {service.duration}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-1">
                    <FaInfoCircle /> Includes:
                  </h4>
                  <ul className="space-y-1">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-pink-600 hover:text-pink-700 font-semibold"
                  >
                    View Details
                  </button>
                  <a
                    href="/booking"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            💖 Special Notes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <h4 className="font-bold mb-2">Consultation</h4>
              <p>Free 15-minute consultation included with every booking</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Deposit</h4>
              <p>50% deposit required to secure your appointment</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Cancellation</h4>
              <p>24-hour cancellation policy applies to all bookings</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedService.name}</h2>
                  <span className="text-gray-500">{selectedService.category}</span>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Price Range</h3>
                  <div className="text-3xl font-bold text-pink-600">{selectedService.price}</div>
                  <p className="text-gray-600 mt-1">Price varies based on length and hair type</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Duration</h3>
                  <div className="text-xl font-bold text-gray-900">{selectedService.duration}</div>
                  <p className="text-gray-600 mt-1">Please arrive 10 minutes early</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700">{selectedService.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h4 className="font-bold text-gray-900 mb-2">💡 Pro Tips</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Wash and detangle hair 24 hours before appointment</li>
                  <li>• Come with clean, dry hair for best results</li>
                  <li>• Bring reference photos for your desired style</li>
                </ul>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2 border border-gray-300 rounded-full font-semibold hover:bg-gray-50"
                >
                  Close
                </button>
                <a
                  href="/booking"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
                >
                  Book This Service
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;