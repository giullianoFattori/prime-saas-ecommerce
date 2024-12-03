import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <span className="text-rose-500 font-semibold">${product.price}/mo</span>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
        <div className="mt-4">
          <ul className="space-y-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <button 
          onClick={() => navigate(`/product/${product.id}`)}
          className="mt-4 w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}