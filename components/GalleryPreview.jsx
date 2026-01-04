'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaImages } from 'react-icons/fa';

// NO VIDEO ITEMS
const galleryItems = [
  { type: 'image', src: '/images/gallery1.jpg', title: 'Cornrow Style' },
  { type: 'image', src: '/images/gallery2.jpg', title: 'Goddess Braids' },
  { type: 'image', src: '/images/box-braids.jpg', title: 'Box Braids' },
  { type: 'image', src: '/images/cornrows.jpg', title: 'Cornrows' },
];

const GalleryPreview = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Style Gallery
            </h2>
            <p className="text-gray-600">
              Browse our collection of completed styles
            </p>
          </div>
          <Link
            href="/gallery"
            className="flex items-center text-pink-600 hover:text-pink-700 font-semibold"
          >
            <FaImages className="mr-2" />
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* SIMPLE IMAGE - NO VIDEO PLAY BUTTON */}
              <div
                className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url('${item.src}')` }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
