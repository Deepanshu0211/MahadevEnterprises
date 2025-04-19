import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Collections from '../components/home/Collections';
import CategoryShowcase from '../components/home/CategoryShowcase';
import Testimonials from '../components/home/Testimonials';
import InstagramFeed from '../components/home/InstagramFeed';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Collections />
      <CategoryShowcase />
      <Testimonials />
      <InstagramFeed />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;