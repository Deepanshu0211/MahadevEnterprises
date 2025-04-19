import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const Collections: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="py-16 bg-surface-50" ref={sectionRef}>
      <div className="container-custom mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif font-bold text-surface-900">Latest Collections</h2>
          <p className="text-surface-600 mt-2">Discover our newest arrivals in traditional crafts</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] group overflow-hidden rounded-lg"
          >
            <img
              src="https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Traditional Clothing"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-surface-950/20 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-serif text-white mb-2">Traditional Clothing</h3>
                <p className="text-surface-100 mb-4">Handcrafted garments with exquisite details</p>
                <Link
                  to="/category/clothing"
                  className="inline-block bg-white text-surface-900 px-6 py-2 rounded-md hover:bg-primary-50 transition-colors duration-300"
                >
                  Explore Collection
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[16/9] group overflow-hidden rounded-lg"
            >
              <img
                src="https://images.pexels.com/photos/6044227/pexels-photo-6044227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Home Decor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif text-white mb-2">Home Decor</h3>
                  <p className="text-surface-100 mb-4">Traditional art for modern homes</p>
                  <Link
                    to="/category/home-decor"
                    className="inline-block bg-white text-surface-900 px-6 py-2 rounded-md hover:bg-primary-50 transition-colors duration-300"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative aspect-[16/9] group overflow-hidden rounded-lg"
            >
              <img
                src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Jewelry"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif text-white mb-2">Traditional Jewelry</h3>
                  <p className="text-surface-100 mb-4">Handcrafted with precision</p>
                  <Link
                    to="/category/jewelry"
                    className="inline-block bg-white text-surface-900 px-6 py-2 rounded-md hover:bg-primary-50 transition-colors duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;