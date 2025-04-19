import { Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Home Decor',
    slug: 'home-decor',
    description: 'Beautiful handcrafted items to add a traditional touch to your home',
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'Clothing',
    slug: 'clothing',
    description: 'Traditional Indian garments with exquisite craftsmanship',
    image: 'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Art',
    slug: 'art',
    description: 'Original artwork showcasing traditional Indian art forms',
    image: 'https://images.pexels.com/photos/6044227/pexels-photo-6044227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    name: 'Jewelry',
    slug: 'jewelry',
    description: 'Handcrafted jewelry inspired by traditional Indian designs',
    image: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    name: 'Kitchenware',
    slug: 'kitchenware',
    description: 'Traditional kitchenware blending functionality with aesthetic appeal',
    image: 'https://images.pexels.com/photos/6046007/pexels-photo-6046007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(category => category.slug === slug);
};