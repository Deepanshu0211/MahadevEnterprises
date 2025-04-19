import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Mock Instagram posts - in a real app, these would come from the Instagram API
  const instagramPosts = [
    {
      id: '1',
      image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
      likes: 124,
      comments: 12,
    },
    {
      id: '2',
      image: 'https://images.pexels.com/photos/6044227/pexels-photo-6044227.jpeg',
      likes: 98,
      comments: 8,
    },
    {
      id: '3',
      image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg',
      likes: 156,
      comments: 15,
    },
    {
      id: '4',
      image: 'https://images.pexels.com/photos/6046007/pexels-photo-6046007.jpeg',
      likes: 89,
      comments: 7,
    },
    {
      id: '5',
      image: 'https://images.pexels.com/photos/2866082/pexels-photo-2866082.jpeg',
      likes: 245,
      comments: 23,
    },
    {
      id: '6',
      image: 'https://images.pexels.com/photos/6858612/pexels-photo-6858612.jpeg',
      likes: 167,
      comments: 14,
    },
  ];

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container-custom mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif font-bold text-surface-900 mb-4">
            Follow Us on Instagram
          </h2>
          <p className="text-surface-600">
            @dharmikvadaliya • #IndianCrafts #TraditionalArt
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-surface-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.likes}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @dharmikvadaliya
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;