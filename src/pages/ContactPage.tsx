import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Layout>
      <div className="bg-surface-50">
        {/* Hero Section */}
        <div className="relative h-[40vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url("https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
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
                Contact Us
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Get in touch with us for any questions or inquiries
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 md:py-24">
          <div className="container-custom mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-serif font-bold text-surface-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-surface-600 mb-8">
                    We'd love to hear from you. Please fill out the form or contact us using the information below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-surface-900">Visit Us</h3>
                      <p className="text-surface-600 mt-1">
                        123 Craft Avenue, Jaipur<br />
                        Rajasthan 302001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-surface-900">Email Us</h3>
                      <a 
                        href="mailto:info@dharmikvadaliya.com"
                        className="text-surface-600 hover:text-primary-600 transition-colors duration-300 mt-1 block"
                      >
                        info@dharmikvadaliya.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-surface-900">Call Us</h3>
                      <a 
                        href="tel:+919876543210"
                        className="text-surface-600 hover:text-primary-600 transition-colors duration-300 mt-1 block"
                      >
                        +91 9876 543 210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-surface-900">Business Hours</h3>
                      <p className="text-surface-600 mt-1">
                        Monday - Saturday: 10:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-serif font-bold text-surface-900 mb-6">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="First Name"
                        type="text"
                        placeholder="John"
                        required
                      />
                      <Input
                        label="Last Name"
                        type="text"
                        placeholder="Doe"
                        required
                      />
                    </div>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                    />
                    <div>
                      <label className="block text-sm font-medium text-surface-800 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-surface-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="Your message..."
                        required
                      ></textarea>
                    </div>
                    <Button type="submit" variant="primary" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-[400px] bg-surface-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6435862337007!2d75.78126631503875!3d26.917928683121985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40b3eb8ef05%3A0xf717a14f84a33c4e!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1645548145782!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;