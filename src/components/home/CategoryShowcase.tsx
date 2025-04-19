import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { categories } from '../../data/categories';

const CategoryShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl font-bold text-surface-900">Shop by Category</h2>
          <p className="text-surface-600 mt-2 max-w-2xl mx-auto">
            Explore our diverse range of traditional Indian craft categories
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className={`aspect-square relative rounded-xl overflow-hidden ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <Link to={`/category/${category.slug}`}>
                <div className="absolute inset-0 bg-surface-950/40 hover:bg-surface-950/30 transition-colors duration-300 z-10">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-2xl font-serif font-medium mb-2">{category.name}</h3>
                    <p className="text-sm text-center text-white/90">{category.description}</p>
                    <span className="mt-4 inline-block border-b-2 border-primary-300 pb-1 font-medium">
                      Explore
                    </span>
                  </div>
                </div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryShowcase;