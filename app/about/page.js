import Image from 'next/image';
import { FaAward, FaUsers, FaClock, FaHeart } from 'react-icons/fa';

export default function About() {
  const stats = [
    { icon: <FaAward />, value: '5+', label: 'Years Experience' },
    { icon: <FaUsers />, value: '500+', label: 'Happy Clients' },
    { icon: <FaClock />, value: '2000+', label: 'Hours of Braiding' },
    { icon: <FaHeart />, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About SALOME SALOON
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where tradition meets innovation in the art of hair braiding
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2018, SALOME SALOON began as a passion project by master braider 
                Salome Johnson. What started as a small in-home studio has blossomed into 
                a premier destination for women seeking exquisite braiding services.
              </p>
              <p>
                Our mission is to provide not just hair services, but an empowering 
                experience where every woman leaves feeling beautiful, confident, and 
                connected to the rich heritage of hair braiding.
              </p>
              <p>
                We believe in the power of community, the importance of self-care, 
                and the transformative nature of a beautifully crafted hairstyle.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            {/* Replace with actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center">
              <span className="text-gray-400">Salome George - Founder</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-pink-600 text-3xl mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-pink-600 text-2xl mb-4">✨</div>
              <h3 className="font-bold text-xl mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every braid, ensuring each style meets our 
                highest standards of quality and artistry.
              </p>
            </div>
            <div className="text-center">
              <div className="text-pink-600 text-2xl mb-4">💝</div>
              <h3 className="font-bold text-xl mb-3">Care</h3>
              <p className="text-gray-600">
                Your comfort and hair health are our top priorities. We use gentle 
                techniques and quality products.
              </p>
            </div>
            <div className="text-center">
              <div className="text-pink-600 text-2xl mb-4">🤝</div>
              <h3 className="font-bold text-xl mb-3">Community</h3>
              <p className="text-gray-600">
                We're more than a salon—we're a sisterhood celebrating beauty, 
                culture, and connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}