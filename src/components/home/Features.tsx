import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Truck, Shield, RefreshCw, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Free Shipping',
      description: 'On orders above ₹5000',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payments',
      description: '100% secure transactions',
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Easy Returns',
      description: '15-day return policy',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Dedicated customer service',
    },
  ];

  return (
    <section className="py-12 bg-white" ref={sectionRef}>
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center p-6 bg-surface-50 rounded-lg"
            >
              <div className="flex-shrink-0 text-primary-600">{feature.icon}</div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-surface-900">{feature.title}</h3>
                <p className="text-surface-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;