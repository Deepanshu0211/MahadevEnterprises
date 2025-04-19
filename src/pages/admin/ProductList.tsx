import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Edit, Trash2, Search, PlusCircle } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import { products } from '../../data/products';

const ProductList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['All', 'home-decor', 'clothing', 'art', 'jewelry', 'kitchenware'];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || 
      product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      // In a real application, you would call an API to delete the product
      console.log(`Deleting product with ID: ${id}`);
    }
  };

  return (
    <Layout>
      <div className="bg-surface-50 py-8">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h1 className="text-3xl font-serif font-bold text-surface-900">Products</h1>
              <p className="text-surface-600 mt-2">
                Manage your product inventory
              </p>
            </div>
            <Link to="/admin/products/add" className="mt-4 sm:mt-0">
              <Button
                variant="primary"
                leftIcon={<PlusCircle className="w-5 h-5" />}
              >
                Add New Product
              </Button>
            </Link>
          </motion.div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-surface-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-surface-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-surface-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="flex-shrink-0">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-surface-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'All' ? 'All Categories' : category.replace('-', ' ')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-surface-200">
                <thead className="bg-surface-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-surface-500 uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-surface-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-surface-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-surface-500 uppercase tracking-wider"
                    >
                      Stock
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-surface-500 uppercase tracking-wider"
                    >
                      Featured
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-surface-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-surface-200">
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-surface-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-md object-cover"
                              src={product.images[0]}
                              alt={product.name}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-surface-900">{product.name}</div>
                            <div className="text-sm text-surface-500">ID: {product.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-surface-900 capitalize">
                          {product.category.replace('-', ' ')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-surface-900">
                          {product.discountPrice ? (
                            <>
                              <span className="font-medium">₹{product.discountPrice}</span>
                              <span className="text-surface-500 line-through ml-2">
                                ₹{product.price}
                              </span>
                            </>
                          ) : (
                            <span className="font-medium">₹{product.price}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs rounded-full ${
                            product.inStock
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs rounded-full ${
                            product.featured
                              ? 'bg-primary-100 text-primary-800'
                              : 'bg-surface-100 text-surface-800'
                          }`}
                        >
                          {product.featured ? 'Featured' : 'Not Featured'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Link
                            to={`/admin/products/edit/${product.id}`}
                            className="text-primary-600 hover:text-primary-900"
                          >
                            <Edit className="w-5 h-5" />
                          </Link>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredProducts.length === 0 && (
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-100 text-surface-500 mb-4">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium text-surface-900 mb-1">No products found</h3>
                <p className="text-surface-500">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}

            <div className="py-3 px-6 border-t border-surface-200 flex items-center justify-between">
              <div className="text-sm text-surface-500">
                Showing <span className="font-medium">{filteredProducts.length}</span> of{' '}
                <span className="font-medium">{products.length}</span> products
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-surface-200 rounded-md text-surface-600 hover:bg-surface-50">
                  Previous
                </button>
                <button className="px-3 py-1 border border-surface-200 rounded-md bg-primary-50 text-primary-600">
                  1
                </button>
                <button className="px-3 py-1 border border-surface-200 rounded-md text-surface-600 hover:bg-surface-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;