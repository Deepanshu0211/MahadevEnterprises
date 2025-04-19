import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="py-16 bg-surface-100" ref={sectionRef}>
      <div className="container-custom mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-serif font-bold text-surface-900 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-surface-600 mb-8">
            Stay updated with our latest collections, artisan stories, and exclusive offers
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-surface-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Button variant="primary" size="lg">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;