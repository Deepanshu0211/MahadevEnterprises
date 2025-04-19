import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const ShippingPolicyPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-surface-50 py-12">
        <div className="container-custom mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8"
          >
            <h1 className="text-3xl font-serif font-bold text-surface-900 mb-6">Shipping Policy</h1>
            
            <div className="prose prose-surface max-w-none">
              <h2>Delivery Timeframes</h2>
              <p>
                We process all orders within 1-2 business days. Once shipped, delivery times are as follows:
              </p>
              <ul>
                <li>Metro Cities: 2-4 business days</li>
                <li>Other Cities: 4-6 business days</li>
                <li>Remote Areas: 6-8 business days</li>
              </ul>

              <h2>Shipping Costs</h2>
              <p>
                Shipping costs are calculated based on your location and the weight of your order:
              </p>
              <ul>
                <li>Orders above ₹5000: Free shipping</li>
                <li>Orders below ₹5000: Flat rate of ₹250</li>
              </ul>

              <h2>Order Tracking</h2>
              <p>
                Once your order is shipped, you will receive a tracking number via email. You can track your order status through our website or the courier partner's website.
              </p>

              <h2>International Shipping</h2>
              <p>
                Currently, we only ship within India. We plan to expand our shipping services to international locations in the future.
              </p>

              <h2>Shipping Partners</h2>
              <p>
                We work with reliable courier partners to ensure safe and timely delivery of your orders. Our primary shipping partners include:
              </p>
              <ul>
                <li>BlueDart</li>
                <li>DTDC</li>
                <li>FedEx</li>
              </ul>

              <h2>Damaged or Lost Packages</h2>
              <p>
                In the rare event that your package is damaged during transit or lost, please contact our customer service team within 48 hours of delivery. We will investigate the issue and work towards a resolution.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPolicyPage;