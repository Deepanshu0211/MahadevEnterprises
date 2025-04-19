import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import Button from '../ui/Button';

interface ProductFilterProps {
  onFilterChange: (filters: Record<string, any>) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 15000],
    rating: 0,
  });

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetValues = {
      category: '',
      priceRange: [0, 15000],
      rating: 0,
    };
    setFilters(resetValues);
    onFilterChange(resetValues);
  };

  const categories = [
    { id: '', name: 'All Categories' },
    { id: 'home-decor', name: 'Home Decor' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'art', name: 'Art' },
    { id: 'jewelry', name: 'Jewelry' },
    { id: 'kitchenware', name: 'Kitchenware' },
  ];

  const filterVariants = {
    closed: { x: '-100%' },
    open: { x: 0 },
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <Button
          variant="secondary"
          onClick={() => setIsOpen(true)}
          leftIcon={<Filter className="w-4 h-4" />}
        >
          Filters
        </Button>
      </div>

      {/* Mobile Filter Sidebar */}
      <motion.div
        className="fixed inset-y-0 left-0 z-40 w-full max-w-xs bg-white shadow-xl md:hidden"
        variants={filterVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-medium">Filters</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-surface-500 hover:text-surface-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-full pb-32">
          <div className="mb-6">
            <h4 className="font-medium mb-3">Category</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={filters.category === category.id}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="mr-2"
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="px-2">
              <input
                type="range"
                min="0"
                max="15000"
                step="500"
                value={filters.priceRange[1]}
                onChange={(e) => 
                  handleFilterChange('priceRange', [0, parseInt(e.target.value)])
                }
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-sm text-surface-600">
                <span>₹0</span>
                <span>₹{filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Rating</h4>
            <div className="space-y-2">
              {[0, 4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={filters.rating === rating}
                    onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
                    className="mr-2"
                  />
                  <span>
                    {rating === 0 ? 'All Ratings' : `${rating}+ Stars`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
            <div className="flex space-x-4">
              <Button variant="outline" onClick={resetFilters} className="flex-1">
                Reset
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)} className="flex-1">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Desktop Filters */}
      <div className="hidden md:block sticky top-20 w-64">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-medium">Filters</h3>
            <button
              onClick={resetFilters}
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              Reset All
            </button>
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Category</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={filters.category === category.id}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="mr-2"
                  />
                  <span>{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Price Range</h4>
            <div className="px-2">
              <input
                type="range"
                min="0"
                max="15000"
                step="500"
                value={filters.priceRange[1]}
                onChange={(e) => 
                  handleFilterChange('priceRange', [0, parseInt(e.target.value)])
                }
                className="w-full"
              />
              <div className="flex justify-between mt-2 text-sm text-surface-600">
                <span>₹0</span>
                <span>₹{filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-3">Rating</h4>
            <div className="space-y-2">
              {[0, 4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={filters.rating === rating}
                    onChange={(e) => handleFilterChange('rating', parseInt(e.target.value))}
                    className="mr-2"
                  />
                  <span>
                    {rating === 0 ? 'All Ratings' : `${rating}+ Stars`}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;