import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const ReturnPolicyPage: React.FC = () => {
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
            <h1 className="text-3xl font-serif font-bold text-surface-900 mb-6">Return Policy</h1>
            
            <div className="prose prose-surface max-w-none">
              <h2>Return Window</h2>
              <p>
                We accept returns within 15 days of delivery. To be eligible for a return, your item must be:
              </p>
              <ul>
                <li>Unused and in the same condition that you received it</li>
                <li>In the original packaging</li>
                <li>Accompanied by the original invoice</li>
              </ul>

              <h2>Non-Returnable Items</h2>
              <p>
                The following items cannot be returned:
              </p>
              <ul>
                <li>Customized or personalized products</li>
                <li>Personal care items</li>
                <li>Sale items marked as "Final Sale"</li>
              </ul>

              <h2>Return Process</h2>
              <p>
                To initiate a return:
              </p>
              <ol>
                <li>Log in to your account and go to the Orders section</li>
                <li>Select the order and items you wish to return</li>
                <li>Choose a reason for return</li>
                <li>Print the return shipping label</li>
                <li>Pack the items securely with all tags and original packaging</li>
                <li>Drop off the package at the nearest courier partner location</li>
              </ol>

              <h2>Refunds</h2>
              <p>
                Once we receive and inspect the returned item, we will notify you about the status of your refund:
              </p>
              <ul>
                <li>Original payment method: 5-7 business days</li>
                <li>Store credit: Immediate</li>
                <li>Bank transfer: 7-10 business days</li>
              </ul>

              <h2>Return Shipping</h2>
              <p>
                Return shipping costs will be borne by:
              </p>
              <ul>
                <li>Customer: For change of mind or incorrect size selection</li>
                <li>Company: For defective items or wrong items delivered</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our return policy, please contact our customer service team:
              </p>
              <ul>
                <li>Email: returns@dharmikvadaliya.com</li>
                <li>Phone: +91 9876 543 210</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnPolicyPage;