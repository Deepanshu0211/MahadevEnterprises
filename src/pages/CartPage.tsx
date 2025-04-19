import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useCartStore } from '../store/cartStore';
import { getProductById } from '../data/products';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Calculate total
  const subtotal = items.reduce((total, item) => {
    const product = getProductById(item.productId);
    if (product) {
      const price = product.discountPrice || product.price;
      return total + price * item.quantity;
    }
    return total;
  }, 0);

  const shippingCost = subtotal > 0 ? (subtotal > 5000 ? 0 : 250) : 0;
  const total = subtotal + shippingCost;

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity >= 1) {
      updateQuantity(productId, quantity);
    } else {
      removeItem(productId);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate API call
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      // Navigate to success page - in a real app, you'd redirect to a success page
      alert('Order placed successfully!');
    }, 2000);
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
              <ShoppingBag className="w-10 h-10 text-surface-500" />
            </div>
            <h1 className="text-2xl font-bold text-surface-900 mb-2">Your cart is empty</h1>
            <p className="text-surface-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/shop">
              <Button variant="primary" size="lg">
                Continue Shopping
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
            className="mb-8"
          >
            <h1 className="text-3xl font-serif font-bold text-surface-900">Shopping Cart</h1>
            <p className="text-surface-600 mt-2">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <ul className="divide-y divide-surface-200">
                  {items.map((item) => {
                    const product = getProductById(item.productId);
                    if (!product) return null;

                    return (
                      <motion.li
                        key={item.productId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 sm:p-6"
                      >
                        <div className="flex flex-col sm:flex-row">
                          <div className="w-full sm:w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover rounded-md"
                            />
                          </div>
                          <div className="sm:ml-6 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="text-lg font-medium text-surface-900">
                                  <Link to={`/product/${product.id}`} className="hover:text-primary-600">
                                    {product.name}
                                  </Link>
                                </h3>
                                <div className="mt-1 text-sm text-surface-500">
                                  {item.color && <span>Color: {item.color}</span>}
                                  {item.size && <span className="ml-2">Size: {item.size}</span>}
                                </div>
                                <p className="mt-1 text-sm font-medium text-surface-900">
                                  ₹{product.discountPrice || product.price}
                                </p>
                              </div>

                              <div className="flex items-start">
                                <div className="flex items-center border border-surface-200 rounded-md">
                                  <button
                                    className="px-2 py-1 text-surface-600 hover:text-surface-900"
                                    onClick={() =>
                                      handleQuantityChange(item.productId, item.quantity - 1)
                                    }
                                  >
                                    -
                                  </button>
                                  <span className="px-2 py-1 text-surface-900 w-8 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    className="px-2 py-1 text-surface-600 hover:text-surface-900"
                                    onClick={() =>
                                      handleQuantityChange(item.productId, item.quantity + 1)
                                    }
                                  >
                                    +
                                  </button>
                                </div>

                                <button
                                  className="ml-4 text-surface-500 hover:text-red-500"
                                  onClick={() => removeItem(item.productId)}
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-6">
                <Link to="/shop" className="text-primary-600 hover:text-primary-700 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-lg font-medium text-surface-900 mb-6">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-surface-600">Subtotal</span>
                    <span className="text-surface-900 font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-surface-600">Shipping</span>
                    <span className="text-surface-900 font-medium">
                      {shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="border-t border-surface-200 pt-4">
                    <div className="flex justify-between text-lg font-medium">
                      <span className="text-surface-900">Total</span>
                      <span className="text-primary-600">₹{total.toFixed(2)}</span>
                    </div>
                    <p className="text-surface-500 text-sm mt-1">
                      Including GST
                    </p>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full mt-6"
                  onClick={handleCheckout}
                  isLoading={isCheckingOut}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;