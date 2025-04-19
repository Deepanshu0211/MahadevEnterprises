import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuthStore, authenticateUser } from '../store/authStore';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setAuthError('');

    try {
      const user = authenticateUser(data.email, data.password);
      
      if (user) {
        login(user);
        navigate(user.role === 'admin' ? '/admin' : '/');
      } else {
        setAuthError('Invalid email or password');
      }
    } catch (error) {
      setAuthError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-surface-50 py-12">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-surface-900">Welcome Back</h1>
                <p className="text-surface-600 mt-2">Sign in to your account</p>
              </div>

              {authError && (
                <div className="bg-red-50 text-red-700 p-3 rounded-md mb-6">
                  {authError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-surface-800 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`w-full px-3 py-2 bg-white border rounded-md transition-all duration-200
                      ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-surface-200 focus:ring-primary-500 focus:border-transparent'}
                      focus:outline-none focus:ring-2`}
                    placeholder="your.email@example.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-800 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={`w-full px-3 py-2 bg-white border rounded-md transition-all duration-200 pr-10
                        ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-surface-200 focus:ring-primary-500 focus:border-transparent'}
                        focus:outline-none focus:ring-2`}
                      placeholder="••••••••"
                      {...register('password')}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 border-surface-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-surface-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isLoading}
                >
                  Sign In
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-surface-600">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary-600 hover:text-primary-700">
                    Create account
                  </Link>
                </p>
              </div>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-surface-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-surface-500">Demo Accounts</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <div className="border border-surface-200 rounded-md p-3">
                    <p className="text-sm font-medium">Admin Account</p>
                    <p className="text-xs text-surface-500">Email: admin@example.com</p>
                    <p className="text-xs text-surface-500">Password: admin123</p>
                  </div>
                  <div className="border border-surface-200 rounded-md p-3">
                    <p className="text-sm font-medium">Customer Account</p>
                    <p className="text-xs text-surface-500">Email: customer@example.com</p>
                    <p className="text-xs text-surface-500">Password: customer123</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;