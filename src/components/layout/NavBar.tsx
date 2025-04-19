import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Heart, Search, User } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import Button from '../ui/Button';
import SearchBar from '../ui/SearchBar';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const cartStore = useCartStore();
  const { isAuthenticated, user, logout, isAdmin } = useAuthStore();
  
  const itemCount = cartStore.getItemCount();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}
  `;
  
  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, delay: 0.1 * i } 
    }),
  };
  
  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };
  
  return (
    <header className={navbarClasses}>
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            <Link to="/" className="flex items-center">
              <span className="font-serif text-2xl font-bold text-primary-800">Dharmik</span>
              <span className="font-serif text-2xl text-primary-600 ml-1">Vadaliya</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
              >
                <Link
                  to={link.path}
                  className={`font-medium transition-colors duration-300 link-underline
                    ${location.pathname === link.path
                      ? 'text-primary-600'
                      : isScrolled
                        ? 'text-surface-800 hover:text-primary-600'
                        : 'text-surface-900 hover:text-primary-600'
                    }
                  `}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full hover:bg-surface-100 transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-surface-800" />
            </button>
            
            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="p-2 rounded-full hover:bg-surface-100 transition-colors duration-200"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 text-surface-800" />
            </Link>
            
            {/* Cart */}
            <Link
              to="/cart"
              className="p-2 rounded-full hover:bg-surface-100 transition-colors duration-200 relative"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 text-surface-800" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {/* User Account */}
            {isAuthenticated ? (
              <div className="relative group">
                <button className="p-2 rounded-full hover:bg-surface-100 transition-colors duration-200 flex items-center">
                  <span className="hidden sm:block mr-2 text-sm font-medium">{user?.name.split(' ')[0]}</span>
                  <User className="w-5 h-5 text-surface-800" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/account" className="block px-4 py-2 text-sm text-surface-700 hover:bg-surface-100">
                    My Account
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-surface-700 hover:bg-surface-100">
                    My Orders
                  </Link>
                  {isAdmin() && (
                    <Link to="/admin" className="block px-4 py-2 text-sm text-surface-700 hover:bg-surface-100">
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-surface-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <Button size="sm" variant="primary" className="hidden sm:flex">
                  Login
                </Button>
              </Link>
            )}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-surface-800" />
              ) : (
                <Menu className="h-6 w-6 text-surface-800" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-surface-950/50 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex items-center justify-between p-4 border-b border-surface-200">
                <h2 className="text-lg font-medium text-surface-900">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-surface-500 hover:text-surface-700 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="px-4 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-lg font-medium text-surface-900 hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                {!isAuthenticated && (
                  <Link to="/login" className="mt-6 block">
                    <Button variant="primary" className="w-full">
                      Login
                    </Button>
                  </Link>
                )}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 bg-surface-950/50 backdrop-blur-sm z-50">
            <div className="container mx-auto px-4 pt-20">
              <div className="relative">
                <SearchBar onClose={() => setIsSearchOpen(false)} isFullScreen />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute top-4 right-4 p-2 text-white hover:text-surface-200 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;