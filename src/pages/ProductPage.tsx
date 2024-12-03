import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Check, Star, Users, BarChart, Clock, Shield } from 'lucide-react';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-50 to-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {product.description}
              </p>
              <div className="flex items-center space-x-4">
                <button className="px-8 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 border border-rose-500 text-rose-500 rounded-lg hover:bg-rose-50 transition-colors">
                  Schedule Demo
                </button>
              </div>
            </div>
            <div>
              <img
                src={product.imageUrl}
                alt={product.title}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600">
                Enhance your workflow with our powerful {feature.toLowerCase()} capabilities.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose {product.title}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">Work together seamlessly with your team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Make data-driven decisions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-12 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help whenever you need it</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Your data is safe with us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Simple, Transparent Pricing
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Plan</h3>
                <p className="text-gray-600">Everything you need to grow your business</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-gray-900">${product.price}</p>
                <p className="text-gray-600">per user/month</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.concat([
                'Priority Support',
                'API Access',
                'Custom Integration',
                'Advanced Security'
              ]).map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-rose-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "{product.title} has transformed the way we work. The features are exactly what we needed, and the support team is exceptional."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-600">CEO at TechCorp</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}