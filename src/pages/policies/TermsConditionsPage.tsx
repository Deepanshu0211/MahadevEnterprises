import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const TermsConditionsPage: React.FC = () => {
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
            <h1 className="text-3xl font-serif font-bold text-surface-900 mb-6">Terms and Conditions</h1>
            
            <div className="prose prose-surface max-w-none">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2>Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Dharmik Vadaliya's website for personal, non-commercial transitory viewing only.
              </p>

              <h2>User Account</h2>
              <p>
                To access certain features of the website, you may be required to create an account. You agree to:
              </p>
              <ul>
                <li>Provide accurate information</li>
                <li>Maintain the security of your account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any security breaches</li>
              </ul>

              <h2>Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and pricing. However:
              </p>
              <ul>
                <li>Colors may vary due to display settings</li>
                <li>All items are subject to availability</li>
                <li>Prices are subject to change without notice</li>
                <li>We reserve the right to limit quantities</li>
              </ul>

              <h2>Ordering and Payment</h2>
              <p>
                By placing an order, you agree to:
              </p>
              <ul>
                <li>Provide current, complete, and accurate purchase information</li>
                <li>Pay all charges at the prices in effect when incurred</li>
                <li>Pay any applicable taxes and shipping charges</li>
              </ul>

              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Dharmik Vadaliya and is protected by copyright and other intellectual property laws.
              </p>

              <h2>Prohibited Activities</h2>
              <p>
                You may not:
              </p>
              <ul>
                <li>Use the website for any illegal purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Interfere with the security of the website</li>
                <li>Impersonate another person</li>
                <li>Engage in any data mining or similar data gathering</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                In no event shall Dharmik Vadaliya be liable for any damages arising out of the use or inability to use the materials on the website.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website.
              </p>

              <h2>Contact Information</h2>
              <p>
                Questions about the Terms of Service should be sent to us at legal@dharmikvadaliya.com.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditionsPage;