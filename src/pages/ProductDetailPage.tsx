import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import ProductDetails from '../components/shop/ProductDetails';
import ProductGrid from '../components/shop/ProductGrid';
import { getProductById, getProductsByCategory } from '../data/products';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      if (id) {
        const foundProduct = getProductById(id);
        
        if (foundProduct) {
          setProduct(foundProduct);
          
          // Get related products
          const related = getProductsByCategory(foundProduct.category)
            .filter((p) => p.id !== id)
            .slice(0, 4);
            
          setRelatedProducts(related);
        } else {
          // Product not found, redirect to shop
          navigate('/shop');
        }
      }
      
      setIsLoading(false);
    }, 500);
  }, [id, navigate]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container-custom mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square bg-surface-200 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-surface-200 rounded w-3/4"></div>
                <div className="h-6 bg-surface-200 rounded w-1/2"></div>
                <div className="h-24 bg-surface-200 rounded"></div>
                <div className="h-12 bg-surface-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-surface-50 py-12"
      >
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <ProductDetails product={product} />
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-serif font-bold text-surface-900 mb-8">You may also like</h2>
              <ProductGrid products={relatedProducts} />
            </div>
          )}
        </div>
      </motion.div>
    </Layout>
  );
};

export default ProductDetailPage;