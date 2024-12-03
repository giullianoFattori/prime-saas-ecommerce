import React from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find the Perfect Software
        </h1>
        <p className="text-xl text-gray-600">
          Discover and purchase the best SaaS solutions for your business
        </p>
      </div>

      <CategoryFilter />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}