import React from 'react';

const categories = ['All', 'Business', 'HR', 'Productivity', 'Marketing', 'Finance'];

export default function CategoryFilter() {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {categories.map((category) => (
        <button
          key={category}
          className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-rose-500 focus:outline-none focus:border-rose-500 whitespace-nowrap"
        >
          {category}
        </button>
      ))}
    </div>
  );
}