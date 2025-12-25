'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const heroImages = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="fade-in max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Beautiful Braids,<br />
              <span className="text-pink-300">Confident You</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Experience the art of premium braiding at SALOME Salon. 
              Where elegance meets expertise in every strand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/booking"
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all"
              >
                Book Now <FaArrowRight />
              </Link>
              <Link
                href="/services"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                View Services
              </Link>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-300">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-lg">4.9/5 • 200+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentImage === index
                ? 'bg-pink-500 w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;