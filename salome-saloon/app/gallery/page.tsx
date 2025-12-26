'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaPlay, FaImages, FaArrowLeft } from 'react-icons/fa';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: '/images/gallery1.jpg',
    title: 'Box Braids Style',
    category: 'Classic'
  },
  {
    id: 2,
    type: 'image',
    src: '/images/gallery2.jpg',
    title: 'Cornrows Design',
    category: 'Traditional'
  },
  {
    id: 3,
    type: 'image',
    src: '/images/box-braids.jpg',
    title: 'Box Braids Detail',
    category: 'Classic'
  },
  {
    id: 4,
    type: 'image',
    src: '/images/cornrows.jpg',
    title: 'Cornrows Pattern',
    category: 'Traditional'
  },
  {
    id: 5,
    type: 'image',
    src: '/images/goddess-braids.jpg',
    title: 'Goddess Braids',
    category: 'Elegant'
  },
  {
    id: 6,
    type: 'image',
    src: '/images/knotless-braids.jpg',
    title: 'Knotless Braids',
    category: 'Modern'
  },
  {
    id: 7,
    type: 'video',
    thumbnail: '/images/video-thumb1.jpg',
    videoSrc: '/videos/tutorial1.mp4', // ← Actual video file
    title: 'Braiding Tutorial',
    category: 'Tutorial'
  },
  {
    id: 8,
    type: 'video',
    thumbnail: '/images/video-thumb2.jpg',
    videoSrc: '/videos/tutorial2.mp4', // ← Actual video file
    title: 'Maintenance Tips',
    category: 'Tutorial'
  },
];

const categories = ['All', 'Classic', 'Traditional', 'Elegant', 'Modern', 'Tutorial'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (Header and filter code stays the same) ... */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
              onClick={() => setSelectedItem(item)}
            >
              {item.type === 'video' ? (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.thumbnail}')` }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <FaPlay className="text-white ml-1" />
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${item.src}')` }}
                />
              )}
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <span className="text-pink-300 text-sm">{item.category}</span>
                  </div>
                  <span className="text-white/80 text-sm">
                    {item.type === 'video' ? 'Video' : 'Image'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ... (Rest of the code stays the same) ... */}
      </div>

      {/* Modal - UPDATED FOR VIDEOS */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-pink-400"
            >
              ✕
            </button>
            
            {selectedItem.type === 'video' ? (
              // VIDEO PLAYER
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                {selectedItem.videoSrc ? (
                  <video 
                    controls 
                    className="w-full h-full"
                    poster={selectedItem.thumbnail}
                  >
                    <source src={selectedItem.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  // Fallback if no video file
                  <div className="w-full h-full flex flex-col items-center justify-center p-8">
                    <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2">{selectedItem.title}</h3>
                    <p className="text-gray-300">Video coming soon!</p>
                  </div>
                )}
              </div>
            ) : (
              // IMAGE DISPLAY
              <div className="bg-white rounded-lg overflow-hidden">
                <div
                  className="h-96 bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedItem.src}')` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.title}</h3>
                  <span className="text-pink-600 font-semibold">{selectedItem.category}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}