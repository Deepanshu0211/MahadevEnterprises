import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart, Share, ChevronRight, Minus, Plus } from 'lucide-react';
import Button from '../ui/Button';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';
import { useWishlistStore } from '../../store/wishlistStore';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');

  const { addItem } = useCartStore();
  const { toggleItem, isInWishlist } = useWishlistStore();

  const isWishlisted = isInWishlist(product.id);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      quantity,
      color: selectedColor,
      size: selectedSize,
    });
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        <motion.div 
          className="aspect-square rounded-lg overflow-hidden bg-white"
          key={selectedImage}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                selectedImage === index ? 'border-primary-600' : 'border-transparent'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      
      {/* Product Information */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2">
            <div className="flex items-center text-sm text-surface-500 space-x-2">
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span>{product.category}</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-surface-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-sm text-surface-600">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-baseline">
              {product.discountPrice ? (
                <>
                  <span className="text-2xl font-bold text-primary-600">₹{product.discountPrice}</span>
                  <span className="ml-3 text-lg text-surface-500 line-through">₹{product.price}</span>
                  <span className="ml-3 text-sm font-medium text-green-600">
                    {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                  </span>
                </>
              ) : (
                <span className="text-2xl font-bold text-primary-600">₹{product.price}</span>
              )}
            </div>
            <p className="text-sm text-surface-600 mt-1">
              Inclusive of all taxes
            </p>
          </div>
          
          <div className="prose prose-surface mb-6">
            <p className="text-surface-700">{product.description}</p>
          </div>
          
          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      selectedColor === color
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-surface-200 text-surface-700 hover:border-surface-300'
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 flex items-center justify-center border rounded-md text-sm ${
                      selectedSize === size
                        ? 'border-primary-600 bg-primary-50 text-primary-600'
                        : 'border-surface-200 text-surface-700 hover:border-surface-300'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center">
              <button
                className="w-10 h-10 border border-surface-300 rounded-l-md flex items-center justify-center hover:bg-surface-100"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-16 h-10 border-y border-surface-300 text-center focus:outline-none"
              />
              <button
                className="w-10 h-10 border border-surface-300 rounded-r-md flex items-center justify-center hover:bg-surface-100"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex space-x-4 mb-8">
            <Button
              variant="primary"
              size="lg"
              leftIcon={<ShoppingBag className="w-5 h-5" />}
              className="flex-1"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            
            <Button
              variant={isWishlisted ? "primary" : "outline"}
              size="lg"
              leftIcon={<Heart className={`w-5 h-5 ${isWishlisted ? '' : ''}`} />}
              onClick={() => toggleItem(product.id)}
            >
              {isWishlisted ? 'Wishlisted' : 'Wishlist'}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              leftIcon={<Share className="w-5 h-5" />}
              className="hidden md:flex"
            >
              Share
            </Button>
          </div>
          
          {/* Additional Info */}
          <div className="border-t border-surface-200 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-surface-500 mb-1">Materials</h4>
                <p className="text-surface-800">
                  {product.materials?.join(', ') || 'Not specified'}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-surface-500 mb-1">Category</h4>
                <p className="text-surface-800 capitalize">
                  {product.category.replace('-', ' ')}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-surface-500 mb-1">Tags</h4>
                <p className="text-surface-800">
                  {product.tags.map((tag) => tag.replace('-', ' ')).join(', ')}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-surface-500 mb-1">Availability</h4>
                <p className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;