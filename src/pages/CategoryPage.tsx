import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/shop/ProductGrid';
import { getCategoryBySlug } from '../data/categories';
import { getProductsByCategory } from '../data/products';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : null;
  const products = category ? getProductsByCategory(category.slug) : [];

  if (!category) {
    return <Navigate to="/categories" replace />;
  }

  return (
    <Layout>
      <div className="bg-surface-50">
        {/* Hero Section */}
        <div className="relative h-[50vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url("${category.image}")`,
              filter: 'brightness(0.6)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white px-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                {category.name}
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Products Section */}
        <div className="py-16">
          <div className="container-custom mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex justify-between items-baseline">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-surface-900">
                    Browse {category.name}
                  </h2>
                  <p className="text-surface-600 mt-2">
                    {products.length} products available
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    className="border border-surface-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    defaultValue="featured"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Product Grid */}
            <ProductGrid products={products} />
          </div>
        </div>

        {/* Category Features */}
        <div className="bg-surface-100 py-16">
          <div className="container-custom mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Authentic Craftsmanship',
                  description: 'Each piece is handcrafted by skilled artisans using traditional techniques.'
                },
                {
                  title: 'Premium Quality',
                  description: 'We ensure the highest quality materials and finishing in every product.'
                },
                {
                  title: 'Heritage Design',
                  description: 'Modern aesthetics meet traditional Indian design elements.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <h3 className="text-xl font-serif font-bold text-surface-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-surface-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;