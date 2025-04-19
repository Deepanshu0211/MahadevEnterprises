import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem } from '../types';

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => set((state) => {
        const existingItem = state.items.find((i) => 
          i.productId === item.productId && 
          i.color === item.color && 
          i.size === item.size
        );
        
        if (existingItem) {
          return {
            items: state.items.map((i) => 
              i.productId === item.productId && i.color === item.color && i.size === item.size
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          };
        }
        
        return {
          items: [...state.items, item],
        };
      }),
      
      removeItem: (productId) => set((state) => ({
        items: state.items.filter((item) => item.productId !== productId),
      })),
      
      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map((item) => 
          item.productId === productId ? { ...item, quantity } : item
        ),
      })),
      
      clearCart: () => set({ items: [] }),
      
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);