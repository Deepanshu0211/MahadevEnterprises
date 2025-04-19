import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { categories } from '../data/categories';

const CategoriesPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-surface-50 py-12">
        <div className="container-custom mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-serif font-bold text-surface-900 mb-4">
              Our Categories
            </h1>
            <p className="text-surface-600 max-w-2xl mx-auto">
              Explore our diverse collection of traditional Indian crafts, each category showcasing unique artistry and cultural heritage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/category/${category.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-serif font-medium text-white mb-2">
                          {category.name}
                        </h3>
                        <p className="text-surface-100 line-clamp-2">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Featured Collection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/2866082/pexels-photo-2866082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Featured Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-surface-950/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                    Featured Collection
                  </h2>
                  <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto px-4">
                    Discover our handpicked selection of exceptional craftsmanship
                  </p>
                  <Link
                    to="/shop"
                    className="inline-block bg-white text-surface-900 px-8 py-3 rounded-md font-medium hover:bg-primary-50 transition-colors duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesPage;