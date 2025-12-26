'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaLock, FaGoogle, FaFacebook } from 'react-icons/fa';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? 'Login:' : 'Register:', formData);
    alert(isLogin ? 'Login successful!' : 'Registration successful!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-bold text-pink-600 inline-block">
              SALOME<span className="text-gray-900">Salon</span>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 mt-4">
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isLogin ? 'Sign in to your account' : 'Join our community of beautiful clients'}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex mb-6 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-full font-semibold transition-all ${
                isLogin ? 'bg-pink-600 text-white' : 'text-gray-700'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-full font-semibold transition-all ${
                !isLogin ? 'bg-pink-600 text-white' : 'text-gray-700'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={!isLogin}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-pink-600" />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-pink-600 hover:text-pink-700 text-sm">
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full font-bold transition-colors"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FaGoogle className="text-red-500" />
                <span>Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FaFacebook className="text-blue-600" />
                <span>Facebook</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-600">
            {isLogin ? (
              <p>
                Don't have an account?{' '}
                <button onClick={() => setIsLogin(false)} className="text-pink-600 hover:text-pink-700 font-semibold">
                  Sign up
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button onClick={() => setIsLogin(true)} className="text-pink-600 hover:text-pink-700 font-semibold">
                  Sign in
                </button>
              </p>
            )}
            <p className="mt-4 text-sm">
              By continuing, you agree to our{' '}
              <Link href="/terms" className="text-pink-600 hover:text-pink-700">
                Terms
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-pink-600 hover:text-pink-700">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}