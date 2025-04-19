import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-surface-50">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url("https://images.pexels.com/photos/2866082/pexels-photo-2866082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
              filter: 'brightness(0.6)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                Our Story
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Preserving and promoting Indian craftsmanship through contemporary design
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 md:py-24">
          <div className="container-custom mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Artisan crafting"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-serif font-bold text-surface-900">Our Mission</h2>
                <p className="text-surface-600 leading-relaxed">
                  At Dharmik Vadaliya, we are dedicated to preserving and promoting the rich heritage of Indian craftsmanship. Our mission is to bridge the gap between traditional artisans and contemporary consumers, ensuring that age-old crafting techniques continue to thrive in the modern world.
                </p>
                <p className="text-surface-600 leading-relaxed">
                  We work directly with skilled artisans across India, providing them with fair compensation and a platform to showcase their exceptional work to a global audience. Each piece in our collection tells a story of tradition, skill, and artistic excellence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-surface-100 py-16 md:py-24">
          <div className="container-custom mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-surface-900 mb-4">Our Values</h2>
              <p className="text-surface-600 max-w-2xl mx-auto">
                The principles that guide us in our mission to preserve and promote Indian craftsmanship
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Authenticity',
                  description: 'We ensure that every piece maintains its traditional authenticity while meeting contemporary design standards.',
                  image: 'https://images.pexels.com/photos/6044227/pexels-photo-6044227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                  title: 'Sustainability',
                  description: 'Our commitment to sustainable practices helps preserve both craftsmanship and the environment.',
                  image: 'https://images.pexels.com/photos/6044242/pexels-photo-6044242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                  title: 'Fair Trade',
                  description: 'We ensure fair compensation and better working conditions for our artisan partners.',
                  image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-surface-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-surface-600">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 md:py-24">
          <div className="container-custom mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-surface-900 mb-4">Our Team</h2>
              <p className="text-surface-600 max-w-2xl mx-auto">
                Meet the passionate individuals working to bring Indian craftsmanship to the world
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  name: 'Dharmik Vadaliya',
                  role: 'Founder & Creative Director',
                  image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                  name: 'Priya Sharma',
                  role: 'Head of Design',
                  image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                  name: 'Rahul Mehta',
                  role: 'Artisan Relations',
                  image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                  name: 'Anjali Patel',
                  role: 'Marketing Director',
                  image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-4 group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>
                  <h3 className="text-lg font-medium text-surface-900">{member.name}</h3>
                  <p className="text-surface-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;