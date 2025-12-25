'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaPlay, FaImages } from 'react-icons/fa';

const galleryItems = [
  { type: 'video', thumbnail: '/images/video-thumb1.jpg', title: 'Box Braids Tutorial' },
  { type: 'image', src: '/images/gallery1.jpg', title: 'Cornrow Style' },
  { type: 'image', src: '/images/gallery2.jpg', title: 'Goddess Braids' },
  { type: 'video', thumbnail: '/images/video-thumb2.jpg', title: 'Maintenance Tips' },
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
              Browse our collection of completed styles and tutorials
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
              {item.type === 'video' ? (
                <>
                  <div
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.thumbnail}')` }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <FaPlay className="text-white ml-1" />
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${item.src}')` }}
                />
              )}
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <span className="text-pink-300 text-sm">
                  {item.type === 'video' ? 'Watch Video' : 'View Style'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged view */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-pink-400"
            >
              ✕
            </button>
            {selectedItem.type === 'video' ? (
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                {/* Video player placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <FaPlay className="text-white text-6xl" />
                </div>
              </div>
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-auto rounded-lg"
              />
            )}
            <h3 className="text-white text-xl mt-4">{selectedItem.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPreview;