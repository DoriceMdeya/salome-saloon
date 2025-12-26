'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for appointments, inquiries, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Our Location</h3>
                    <p className="text-gray-700">123 Beauty Street, Hair City, HC 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone Number</h3>
                    <p className="text-gray-700">(555) 123-4567</p>
                    <p className="text-sm text-gray-600">Mon-Fri, 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email Address</h3>
                    <p className="text-gray-700">info@salomesalon.com</p>
                    <p className="text-sm text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Business Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 5:00 PM</p>
                      <p>Sunday: 11:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-pink-300">✓</span>
                  <span>Certified braiding specialists</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-300">✓</span>
                  <span>Premium quality hair products</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-300">✓</span>
                  <span>Hygiene & safety first</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-300">✓</span>
                  <span>Comfortable seating & ambiance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Appointment Inquiry</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="service">Service Information</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-sm">
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2"
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Find Our Salon</h3>
              <div className="h-64 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-pink-600 text-4xl mx-auto mb-4" />
                  <p className="text-gray-700">123 Beauty Street, Hair City, HC 10001</p>
                  <p className="text-gray-600 text-sm mt-2">Map integration can be added here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}