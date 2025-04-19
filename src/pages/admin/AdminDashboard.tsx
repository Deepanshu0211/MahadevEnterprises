import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Users, Package, BarChart2 } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import { useAuthStore } from '../../store/authStore';
import { products } from '../../data/products';

const AdminDashboard: React.FC = () => {
  const { isAuthenticated, isAdmin } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !isAdmin()) {
      navigate('/login');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  // Dashboard stats (in a real app, these would come from your backend)
  const stats = [
    {
      name: 'Total Products',
      value: products.length,
      icon: <Package className="w-6 h-6" />,
      change: '+12%',
      trend: 'up',
    },
    {
      name: 'Total Orders',
      value: 28,
      icon: <ShoppingBag className="w-6 h-6" />,
      change: '+18%',
      trend: 'up',
    },
    {
      name: 'Total Customers',
      value: 42,
      icon: <Users className="w-6 h-6" />,
      change: '+8%',
      trend: 'up',
    },
    {
      name: 'Revenue',
      value: '₹58,452',
      icon: <BarChart2 className="w-6 h-6" />,
      change: '+24%',
      trend: 'up',
    },
  ];

  // Recent orders (mock data)
  const recentOrders = [
    {
      id: 'ORD-1234',
      customer: 'Priya Sharma',
      date: '2023-09-15',
      status: 'delivered',
      total: '₹3,499',
    },
    {
      id: 'ORD-1235',
      customer: 'Rahul Mehta',
      date: '2023-09-12',
      status: 'processing',
      total: '₹8,999',
    },
    {
      id: 'ORD-1236',
      customer: 'Anjali Patel',
      date: '2023-09-10',
      status: 'shipped',
      total: '₹1,999',
    },
    {
      id: 'ORD-1237',
      customer: 'Vikram Singh',
      date: '2023-09-08',
      status: 'delivered',
      total: '₹4,999',
    },
  ];

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
            <h1 className="text-3xl font-serif font-bold text-surface-900">Admin Dashboard</h1>
            <p className="text-surface-600 mt-2">
              Welcome back, {isAuthenticated && useAuthStore.getState().user?.name}
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary-100 text-primary-600">
                    {stat.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-surface-500">{stat.name}</p>
                    <p className="text-2xl font-semibold text-surface-900">{stat.value}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.change} from last month
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Orders */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6 border-b border-surface-200">
                  <h2 className="text-xl font-medium text-surface-900">Recent Orders</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-surface-200">
                    <thead className="bg-surface-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-surface-500 uppercase tracking-wider"
                        >
                          Order ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-surface-500 uppercase tracking-wider"
                        >
                          Customer
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-surface-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-surface-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-surface-500 uppercase tracking-wider"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-surface-200">
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-surface-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600">
                            {order.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-900">
                            {order.customer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-500">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                order.status === 'delivered'
                                  ? 'bg-green-100 text-green-800'
                                  : order.status === 'processing'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-900">
                            {order.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-surface-200">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:text-primary-700"
                  >
                    View all orders
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Product Management Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-medium text-surface-900 mb-6">Product Management</h2>
              <div className="space-y-4">
                <a
                  href="/admin/products"
                  className="block p-4 border border-surface-200 rounded-lg hover:bg-surface-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary-100 text-primary-600">
                      <Package className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-surface-900">View All Products</p>
                      <p className="text-sm text-surface-500">Manage your product inventory</p>
                    </div>
                  </div>
                </a>
                <a
                  href="/admin/products/add"
                  className="block p-4 border border-surface-200 rounded-lg hover:bg-surface-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-green-100 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-surface-900">Add New Product</p>
                      <p className="text-sm text-surface-500">Create a new product listing</p>
                    </div>
                  </div>
                </a>
                <a
                  href="/admin/categories"
                  className="block p-4 border border-surface-200 rounded-lg hover:bg-surface-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v8H5V6zm1 1v1h8V7H6zm0 2v1h8V9H6zm0 2v1h4v-1H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-surface-900">Manage Categories</p>
                      <p className="text-sm text-surface-500">Organize your product categories</p>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;