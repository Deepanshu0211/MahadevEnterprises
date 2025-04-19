import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/shop/ProductGrid';
import ProductFilter from '../components/shop/ProductFilter';
import { products, searchProducts, getProductsByCategory } from '../data/products';
import { Product } from '../types';

const ShopPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const handleFilterChange = (filters: Record<string, any>) => {
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      let result = [...products];
      
      // Filter by category
      if (filters.category) {
        result = getProductsByCategory(filters.category);
      }
      
      // Filter by price range
      result = result.filter((product) => {
        const price = product.discountPrice || product.price;
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      });
      
      // Filter by rating
      if (filters.rating > 0) {
        result = result.filter((product) => product.rating >= filters.rating);
      }
      
      // Apply search if any
      if (searchQuery) {
        result = searchProducts(searchQuery).filter((p) => 
          result.some((rp) => rp.id === p.id)
        );
      }
      
      // Apply sorting
      switch (sortBy) {
        case 'price-low-high':
          result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
          break;
        case 'price-high-low':
          result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
          break;
        case 'newest':
          result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        default:
          // 'featured' - no specific sorting
          break;
      }
      
      setFilteredProducts(result);
      setIsLoading(false);
    }, 500);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleFilterChange({});
  };

  useEffect(() => {
    // Re-apply filters when sort changes
    handleFilterChange({});
  }, [sortBy]);

  return (
    <Layout>
      <div className="bg-surface-50 py-8">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-serif font-bold text-surface-900">Our Products</h1>
            <p className="text-surface-600 mt-2">
              Browse our collection of handcrafted traditional Indian items
            </p>
          </motion.div>

          <div className="mb-6 flex flex-col md:flex-row justify-between gap-4">
            <form onSubmit={handleSearch} className="w-full md:w-1/2 lg:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-surface-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-surface-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-surface-700 whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={handleSortChange}
                className="border border-surface-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <ProductFilter onFilterChange={handleFilterChange} />

            <div className="flex-1">
              <ProductGrid products={filteredProducts} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;