'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    id: 1,
    name: 'Box Braids',
    price: '$120+',
    duration: '3-4 hours',
    description: 'Classic protective style with synthetic or human hair',
    image: '/images/box-braids.jpg',
  },
  {
    id: 2,
    name: 'Cornrows',
    price: '$80+',
    duration: '2-3 hours',
    description: 'Traditional braiding technique close to the scalp',
    image: '/images/cornrows.jpg',
  },
  {
    id: 3,
    name: 'Goddess Braids',
    price: '$150+',
    duration: '4-5 hours',
    description: 'Larger, intricate braids with decorative elements',
    image: '/images/goddess-braids.jpg',
  },
  {
    id: 4,
    name: 'Knotless Braids',
    price: '$140+',
    duration: '4-6 hours',
    description: 'Gentle braiding method for scalp comfort',
    image: '/images/knotless-braids.jpg',
  },
];

const ServicesPreview = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Signature Braids
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expertly crafted braiding styles that blend tradition with modern elegance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  <span className="text-pink-600 font-bold">{service.price}</span>
                </div>
                
                <p className="text-gray-600 mb-3">{service.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  ⏱️ {service.duration}
                </div>
                
                <div className={`transition-all duration-300 ${
                  hoveredCard === service.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Link
                    href={`/services#${service.name.toLowerCase().replace(' ', '-')}`}
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold"
                  >
                    Learn More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-full font-semibold transition-all"
          >
            View All Services & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;