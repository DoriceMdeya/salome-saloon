'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar } from '@/components/Calendar';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const services = [
    'Box Braids', 'Knotless Braids', 'Cornrows', 'Goddess Braids',
    'French Braids', 'Fulani Braids', 'Butterfly Braids', 'Twisted Braids',
    'Consultation Only', 'Maintenance/Care'
  ];

  const onSubmit = (data) => {
    console.log({ ...data, selectedDate, selectedTime, serviceType });
    alert('Appointment booked successfully! We will confirm via email.');
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`flex flex-col items-center ${
                  step >= num ? 'text-pink-600' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-2 ${
                    step >= num
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {num}
                </div>
                <span className="text-sm">
                  {num === 1 ? 'Service & Date' : num === 2 ? 'Time' : 'Details'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-pink-600 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Book Your Appointment
            </h1>
            <p className="text-gray-600 mb-8">
              Secure your spot for a beautiful braiding experience
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      <FaUser className="inline mr-2" />
                      Select Service Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setServiceType(service)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            serviceType === service
                              ? 'border-pink-600 bg-pink-50'
                              : 'border-gray-200 hover:border-pink-300'
                          }`}
                        >
                          <div className="font-medium text-gray-900">{service}</div>
                        </button>
                      ))}
                    </div>
                    {!serviceType && (
                      <p className="text-red-500 text-sm mt-2">Please select a service</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      <FaCalendarAlt className="inline mr-2" />
                      Select Date
                    </label>
                    <Calendar onDateSelect={setSelectedDate} />
                    {!selectedDate && (
                      <p className="text-red-500 text-sm mt-2">Please select a date</p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (serviceType && selectedDate) setStep(2);
                    }}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full font-semibold transition-colors"
                  >
                    Continue to Time Selection
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      <FaClock className="inline mr-2" />
                      Select Time Slot
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border text-center transition-all ${
                            selectedTime === time
                              ? 'border-pink-600 bg-pink-600 text-white'
                              : 'border-gray-300 hover:border-pink-400 hover:bg-pink-50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {!selectedTime && (
                      <p className="text-red-500 text-sm mt-2">Please select a time</p>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border border-gray-300 py-3 rounded-full font-semibold hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (selectedTime) setStep(3);
                      }}
                      className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full font-semibold transition-colors"
                    >
                      Continue to Details
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Your Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          {...register('name', { required: true })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">Name is required</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">
                          <FaPhone className="inline mr-2" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register('phone', { required: true })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="(555) 123-4567"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">Phone is required</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">
                          <FaEnvelope className="inline mr-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          {...register('email', { required: true })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">Email is required</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 mb-2">Special Requests</label>
                        <textarea
                          {...register('requests')}
                          rows="3"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                          placeholder="Any allergies, reference photos, or special requirements..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-pink-50 rounded-xl p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Appointment Summary</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-semibold">Service:</span> {serviceType}</p>
                      <p><span className="font-semibold">Date:</span> {selectedDate?.toDateString()}</p>
                      <p><span className="font-semibold">Time:</span> {selectedTime}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 border border-gray-300 py-3 rounded-full font-semibold hover:bg-gray-50"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full font-semibold transition-colors"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Booking Information Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready for Your Transformation?</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-xl">✨</span>
                  <span>Expert braiding by certified stylists</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">💝</span>
                  <span>Premium hair products included</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">⏰</span>
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">🎁</span>
                  <span>First-time client discount available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">📋 Preparation Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">•</span>
                  <span>Wash and detangle hair 24 hours before</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">•</span>
                  <span>Come with clean, dry hair (no products)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">•</span>
                  <span>Bring reference photos of desired style</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">•</span>
                  <span>Plan for appointment duration (see service times)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600">•</span>
                  <span>Bring snacks/drinks for longer sessions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">ℹ️ Important Information</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Deposit:</strong> 50% deposit required to secure booking
                </p>
                <p>
                  <strong>Cancellation:</strong> 24-hour notice required for changes
                </p>
                <p>
                  <strong>Late Policy:</strong> 15+ minutes late may result in rescheduling
                </p>
                <p>
                  <strong>Payment:</strong> We accept cash, credit cards, and digital payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}