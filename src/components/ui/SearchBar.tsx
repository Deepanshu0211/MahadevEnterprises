import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { searchProducts } from '../../data/products';
import { Product } from '../../types';

interface SearchBarProps {
  onClose?: () => void;
  isFullScreen?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, isFullScreen = false }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (isFullScreen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFullScreen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        setIsLoading(true);
        const searchResults = searchProducts(query);
        setResults(searchResults);
        setIsLoading(false);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setQuery('');
    onClose?.();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const resultsVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={searchRef}
      className={`${
        isFullScreen
          ? 'fixed inset-0 bg-surface-950/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20'
          : 'relative'
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`${
          isFullScreen ? 'w-full max-w-2xl mx-4' : 'w-full'
        } bg-white rounded-lg shadow-lg`}
      >
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-3 pl-12 pr-10 rounded-lg border-2 border-surface-200 focus:border-primary-500 focus:outline-none"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-surface-400" />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-surface-400 hover:text-surface-600"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <AnimatePresence>
          {(results.length > 0 || isLoading) && (
            <motion.div
              variants={resultsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto z-50"
            >
              {isLoading ? (
                <div className="p-4 text-center text-surface-600">
                  <div className="animate-spin inline-block w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full"></div>
                </div>
              ) : (
                <div className="py-2">
                  {results.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="w-full px-4 py-2 hover:bg-surface-50 flex items-center space-x-3 text-left"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium text-surface-900">{product.name}</h4>
                        <p className="text-sm text-surface-600">₹{product.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SearchBar;