'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaImages, FaArrowLeft, FaInstagram } from 'react-icons/fa';

// NO VIDEO OBJECTS - ONLY IMAGES
const galleryItems = [
  {
    id: 1,
    src: '/images/gallery1.jpg',
    title: 'Box Braids Style',
    category: 'Classic',
  },
  {
    id: 2,
    src: '/images/gallery2.jpg',
    title: 'Cornrows Design',
    category: 'Traditional',
  },
  {
    id: 3,
    src: '/images/box-braids.jpg',
    title: 'Box Braids Detail',
    category: 'Classic',
  },
  {
    id: 4,
    src: '/images/cornrows.jpg',
    title: 'Cornrows Pattern',
    category: 'Traditional',
  },
  {
    id: 5,
    src: '/images/goddess-braids.jpg',
    title: 'Goddess Braids',
    category: 'Elegant',
  },
  {
    id: 6,
    src: '/images/knotless-braids.jpg',
    title: 'Knotless Braids',
    category: 'Modern',
  },
];

// NO 'Tutorial' CATEGORY
const categories = ['All', 'Classic', 'Traditional', 'Elegant', 'Modern'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header and filter code remains the same */}
      {/* Gallery grid - NO VIDEO LOGIC */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            {/* SIMPLE IMAGE DISPLAY - NO VIDEO THUMBNAIL LOGIC */}
            <div className="aspect-square">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url('${item.src}')` }}
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-bold text-gray-900">{item.title}</h3>
              <span className="text-sm text-pink-600 bg-pink-50 px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}