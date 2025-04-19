import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  isAdmin: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      
      login: (userData) => {
        console.log('Logging in user:', userData);
        set({
          user: userData,
          isAuthenticated: true,
        });
      },
      
      logout: () => {
        console.log('Logging out');
        set({
          user: null,
          isAuthenticated: false,
        });
      },
      
      isAdmin: () => {
        const { user } = get();
        return user?.role === 'admin';
      },
    }),
    {
      name: 'auth-storage',
      version: 1,
    }
  )
);

// Demo users for testing
const demoUsers = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin' as const,
  },
  {
    id: '2',
    name: 'Customer User',
    email: 'customer@example.com',
    password: 'customer123',
    role: 'customer' as const,
  },
];

// Function to authenticate a user
export const authenticateUser = (email: string, password: string): User | null => {
  console.log('Authenticating:', email);
  const user = demoUsers.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  
  if (user) {
    // Remove password from returned user object
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  
  return null;
};