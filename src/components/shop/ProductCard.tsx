import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();

  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ productId: product.id, quantity: 1 });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product.id);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div 
        className="product-card group"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden rounded-lg bg-white shadow-md">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden zoom-container">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover zoom-image"
            />
          </div>
          
          {/* Quick Actions */}
          <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleToggleWishlist}
              className={`p-2 rounded-full ${
                isWishlisted 
                  ? 'bg-red-100 text-red-500' 
                  : 'bg-white text-surface-700 hover:bg-surface-100'
              } shadow-md transition-colors duration-200`}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            
            <button
              onClick={handleAddToCart}
              className="p-2 rounded-full bg-white text-surface-700 hover:bg-surface-100 shadow-md transition-colors duration-200"
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
          
          {/* Discount Badge */}
          {product.discountPrice && (
            <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 text-xs font-medium rounded">
              {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
            </div>
          )}
          
          {/* Product Info */}
          <div className="p-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-medium text-surface-900 line-clamp-1">{product.name}</h3>
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="text-sm ml-1 text-surface-700">{product.rating}</span>
              </div>
            </div>
            
            <p className="text-surface-500 text-sm line-clamp-2 mb-2">{product.description.substring(0, 60)}...</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-baseline">
                {product.discountPrice ? (
                  <>
                    <span className="text-lg font-semibold text-primary-600">₹{product.discountPrice}</span>
                    <span className="ml-2 text-sm text-surface-500 line-through">₹{product.price}</span>
                  </>
                ) : (
                  <span className="text-lg font-semibold text-primary-600">₹{product.price}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;