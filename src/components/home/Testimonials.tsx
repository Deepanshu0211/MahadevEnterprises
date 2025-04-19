import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'The Madhubani painting I purchased is absolutely stunning. The attention to detail and vibrant colors bring so much joy to my home. The quality is exceptional, and it arrived perfectly packaged.',
  },
  {
    id: '2',
    name: 'Rahul Mehta',
    location: 'Delhi',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    text: 'I ordered a Pashmina shawl for my mothers birthday. The craftsmanship is outstanding, and the material is incredibly soft and warm. My mother couldnt be happier with her gift.',
  },
  {
    id: '3',
    name: 'Anjali Patel',
    location: 'Ahmedabad',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    text: 'The wooden elephant is a beautiful piece of art. Its exactly as described and pictured on the website. The craftsmanship is impeccable, and it has become a conversation starter in my living room.',
  },
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section 
      className="py-16 bg-surface-100"
      ref={sectionRef}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl font-bold text-surface-900">What Our Customers Say</h2>
          <p className="text-surface-600 mt-2 max-w-2xl mx-auto">
            Read testimonials from our satisfied customers around the country
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                {/* Stars */}
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-surface-500 text-sm">
                  {testimonial.rating}.0/5.0
                </span>
              </div>
              
              <p className="text-surface-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-medium text-surface-900">{testimonial.name}</h4>
                  <p className="text-sm text-surface-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;