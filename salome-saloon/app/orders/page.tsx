'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaShoppingBag, FaCalendarAlt, FaDollarSign, FaCheck, FaClock, FaTimes } from 'react-icons/fa';

const orders = [
  { id: 'ORD-001', service: 'Box Braids', date: '2024-01-15', price: '$180', status: 'completed' },
  { id: 'ORD-002', service: 'Cornrows', date: '2024-01-20', price: '$120', status: 'completed' },
  { id: 'ORD-003', service: 'Goddess Braids', date: '2024-02-05', price: '$250', status: 'upcoming' },
  { id: 'ORD-004', service: 'Knotless Braids', date: '2024-02-10', price: '$220', status: 'cancelled' },
];

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeTab);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <FaCheck className="text-green-500" />;
      case 'upcoming': return <FaClock className="text-blue-500" />;
      case 'cancelled': return <FaTimes className="text-red-500" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">View and manage your appointments and orders</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Orders</p>
                <p className="text-3xl font-bold text-gray-900">4</p>
              </div>
              <FaShoppingBag className="text-pink-600 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-3xl font-bold text-gray-900">2</p>
              </div>
              <FaCheck className="text-green-600 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Upcoming</p>
                <p className="text-3xl font-bold text-gray-900">1</p>
              </div>
              <FaClock className="text-blue-600 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Spent</p>
                <p className="text-3xl font-bold text-gray-900">$770</p>
              </div>
              <FaDollarSign className="text-purple-600 text-2xl" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
          {['all', 'upcoming', 'completed', 'cancelled'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium capitalize ${
                activeTab === tab
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          {filteredOrders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px 6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{order.id}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{order.service}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-gray-700">
                          <FaCalendarAlt className="mr-2 text-gray-400" />
                          {order.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                        {order.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="ml-2 capitalize">{order.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          href={`/orders/${order.id}`}
                          className="text-pink-600 hover:text-pink-900 mr-4"
                        >
                          View
                        </Link>
                        {order.status === 'upcoming' && (
                          <button className="text-red-600 hover:text-red-900">
                            Cancel
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <FaShoppingBag className="text-gray-300 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-600 mb-6">You don't have any {activeTab !== 'all' ? activeTab : ''} orders yet.</p>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700"
              >
                Browse Services
              </Link>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need help with an order?</h3>
              <p className="text-gray-700">Contact our support team for assistance</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-full font-semibold hover:bg-pink-50"
              >
                Contact Support
              </Link>
              <Link
                href="/booking"
                className="px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700"
              >
                Book New Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}