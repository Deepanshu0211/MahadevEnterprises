import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const PrivacyPolicyPage: React.FC = () => {
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
            <h1 className="text-3xl font-serif font-bold text-surface-900 mb-6">Privacy Policy</h1>
            
            <div className="prose prose-surface max-w-none">
              <p className="lead">
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
              </p>

              <h2>Personal Information We Collect</h2>
              <p>
                When you visit the site, we automatically collect certain information about your device, including:
              </p>
              <ul>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Time zone</li>
                <li>Cookie information</li>
              </ul>

              <h2>How We Use Your Personal Information</h2>
              <p>
                We use the personal information we collect to:
              </p>
              <ul>
                <li>Process your orders and payments</li>
                <li>Communicate with you about orders and services</li>
                <li>Screen orders for potential fraud</li>
                <li>Provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h2>Information Sharing and Disclosure</h2>
              <p>
                We share your Personal Information with third parties to help us use your Personal Information, as described above. For example:
              </p>
              <ul>
                <li>Payment processors for secure transactions</li>
                <li>Shipping partners for order delivery</li>
                <li>Analytics services to improve our website</li>
              </ul>

              <h2>Data Retention</h2>
              <p>
                We will maintain your Personal Information for our records unless and until you ask us to delete this information.
              </p>

              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to our use of your information</li>
                <li>Request data portability</li>
              </ul>

              <h2>Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>

              <h2>Contact Us</h2>
              <p>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at privacy@dharmikvadaliya.com.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;