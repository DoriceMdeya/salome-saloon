'use client';

import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Jessica M.',
    service: 'Box Braids',
    rating: 5,
    text: 'The best braiding experience I\'ve ever had! Salome is an artist. My braids were perfect and lasted over 2 months.',
    date: '2 weeks ago',
    avatar: 'JM',
  },
  {
    id: 2,
    name: 'Aisha T.',
    service: 'Goddess Braids',
    rating: 5,
    text: 'I felt like royalty! The attention to detail and care for my hair health was incredible. Will definitely be back.',
    date: '1 month ago',
    avatar: 'AT',
  },
  {
    id: 3,
    name: 'Maria S.',
    service: 'Knotless Braids',
    rating: 5,
    text: 'So comfortable! No tension headaches like I usually get. Salome truly knows how to braid with care.',
    date: '3 weeks ago',
    avatar: 'MS',
  },
  {
    id: 4,
    name: 'Chloe R.',
    service: 'Cornrows',
    rating: 5,
    text: 'Beautiful and neat! I got so many compliments. The salon atmosphere is so relaxing and professional.',
    date: '2 months ago',
    avatar: 'CR',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.service}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <FaQuoteLeft className="text-pink-300 text-2xl mb-4" />
                <p className="text-gray-700 text-lg italic mb-4">"{testimonial.text}"</p>
                <span className="text-gray-500 text-sm">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.service}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 text-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <FaQuoteLeft className="text-pink-300 text-xl mb-3" />
                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                    <span className="text-gray-500 text-sm">{testimonial.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? 'bg-pink-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-pink-600">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-600">98%</div>
              <div className="text-gray-600">Return Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-600">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-600">100%</div>
              <div className="text-gray-600">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;