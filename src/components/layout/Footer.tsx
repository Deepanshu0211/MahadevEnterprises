import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-950 text-white pt-16 pb-6">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="font-serif text-2xl font-bold text-primary-300">Dharmik</span>
              <span className="font-serif text-2xl text-white ml-1">Vadaliya</span>
            </Link>
            <p className="text-surface-300 mb-6">
              Celebrating the rich heritage of Indian craftsmanship through authentic traditional products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shipping-policy" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-300 mr-3 mt-0.5" />
                <span className="text-surface-300">
                  123 Craft Avenue, Jaipur, Rajasthan 302001, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary-300 mr-3" />
                <a href="tel:+919876543210" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary-300 mr-3" />
                <a href="mailto:info@dharmikvadaliya.com" className="text-surface-300 hover:text-primary-300 transition-colors duration-300">
                  info@dharmikvadaliya.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-surface-400 text-sm">
              &copy; {new Date().getFullYear()} Dharmik Vadaliya. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <img src="https://images.pexels.com/photos/6407566/pexels-photo-6407566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Payment Methods" className="h-8 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;