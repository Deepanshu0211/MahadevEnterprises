import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Trash } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useWishlistStore } from '../store/wishlistStore';
import { useCartStore } from '../store/cartStore';
import { getProductById } from '../data/products';

const WishlistPage: React.FC = () => {
  const { items, removeItem, clearWishlist } = useWishlistStore();
  const { addItem } = useCartStore();

  const handleMoveToCart = (productId: string) => {
    addItem({ productId, quantity: 1 });
    removeItem(productId);
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-surface-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-surface-500" />
            </div>
            <h1 className="text-2xl font-bold text-surface-900 mb-2">Your wishlist is empty</h1>
            <p className="text-surface-600 mb-8">
              Start adding items to your wishlist by clicking the heart icon on products you love.
            </p>
            <Link to="/shop">
              <Button variant="primary" size="lg">
                Explore Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-surface-50 py-8">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-between items-center"
          >
            <div>
              <h1 className="text-3xl font-serif font-bold text-surface-900">My Wishlist</h1>
              <p className="text-surface-600 mt-2">
                {items.length} {items.length === 1 ? 'item' : 'items'} in your wishlist
              </p>
            </div>
            <Button
              variant="outline"
              onClick={clearWishlist}
              className="border-red-500 text-red-500 hover:bg-red-50"
              leftIcon={<Trash className="w-4 h-4" />}
            >
              Clear Wishlist
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => {
              const product = getProductById(item.productId);
              if (!product) return null;

              return (
                <motion.div
                  key={item.productId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden group"
                >
                  <Link to={`/product/${product.id}`} className="block relative">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-red-500"
                      onClick={(e) => {
                        e.preventDefault();
                        removeItem(product.id);
                      }}
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </Link>

                  <div className="p-4">
                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="font-medium text-surface-900 mb-1 hover:text-primary-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-baseline mb-3">
                      {product.discountPrice ? (
                        <>
                          <span className="text-primary-600 font-semibold">₹{product.discountPrice}</span>
                          <span className="ml-2 text-sm text-surface-500 line-through">₹{product.price}</span>
                        </>
                      ) : (
                        <span className="text-primary-600 font-semibold">₹{product.price}</span>
                      )}
                    </div>

                    <Button
                      variant="primary"
                      className="w-full"
                      leftIcon={<ShoppingBag className="w-4 h-4" />}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMoveToCart(product.id);
                      }}
                    >
                      Move to Cart
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WishlistPage;