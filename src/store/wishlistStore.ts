import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WishlistItem } from '../types';

interface WishlistState {
  items: WishlistItem[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  toggleItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (productId) => set((state) => {
        if (state.items.some(item => item.productId === productId)) {
          return state;
        }
        return {
          items: [...state.items, { productId }],
        };
      }),
      
      removeItem: (productId) => set((state) => ({
        items: state.items.filter((item) => item.productId !== productId),
      })),
      
      toggleItem: (productId) => {
        const isInWishlist = get().isInWishlist(productId);
        if (isInWishlist) {
          get().removeItem(productId);
        } else {
          get().addItem(productId);
        }
      },
      
      isInWishlist: (productId) => {
        return get().items.some(item => item.productId === productId);
      },
      
      clearWishlist: () => set({ items: [] }),
    }),
    {
      name: 'wishlist-storage',
    }
  )
);