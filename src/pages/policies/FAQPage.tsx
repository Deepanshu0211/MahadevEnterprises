import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../../components/layout/Layout';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your order on our website or through the courier partner's website."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and wallet payments. All transactions are secure and encrypted."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 2-4 business days for metro cities and 4-6 business days for other locations. Remote areas may take up to 8 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 15-day return policy for most items. Products must be unused and in their original packaging. Some items like personalized products are non-returnable."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within India. We plan to expand our shipping services to international locations in the future."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team through email at support@dharmikvadaliya.com or call us at +91 9876 543 210 between 10 AM and 6 PM IST."
    },
    {
      question: "Are the products handmade?",
      answer: "Yes, all our products are handcrafted by skilled artisans using traditional techniques and high-quality materials."
    },
    {
      question: "Do you offer bulk orders?",
      answer: "Yes, we accept bulk orders for corporate gifts and special occasions. Please contact our sales team for bulk order inquiries."
    }
  ];

  return (
    <Layout>
      <div className="bg-surface-50 py-12">
        <div className="container-custom mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl font-serif font-bold text-surface-900 mb-8 text-center">
              Frequently Asked Questions
            </h1>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-medium text-surface-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-surface-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 text-center bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-xl font-medium text-surface-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-surface-600 mb-6">
                Can't find the answer you're looking for? Please contact our customer service team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:support@dharmikvadaliya.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 hover:bg-primary-50 rounded-md transition-colors duration-200"
                >
                  Email Us
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white hover:bg-primary-700 rounded-md transition-colors duration-200"
                >
                  Call Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;