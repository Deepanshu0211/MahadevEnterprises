import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Handcrafted Wooden Elephant',
    description: 'Beautifully handcrafted wooden elephant with intricate detailing, showcasing traditional Indian craftsmanship. Each piece is unique and made by skilled artisans from Rajasthan.',
    price: 2999,
    discountPrice: 2499,
    images: [
      'https://images.pexels.com/photos/7245535/pexels-photo-7245535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7245537/pexels-photo-7245537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'home-decor',
    tags: ['handmade', 'wooden', 'sculpture', 'elephant', 'traditional'],
    inStock: true,
    featured: true,
    materials: ['Rosewood', 'Natural colors'],
    rating: 4.8,
    reviewCount: 24,
    createdAt: '2023-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Madhubani Painting - Tree of Life',
    description: 'Authentic Madhubani painting depicting the Tree of Life. This traditional art form from Bihar features intricate patterns and vibrant natural colors on handmade paper.',
    price: 5999,
    images: [
      'https://images.pexels.com/photos/6044227/pexels-photo-6044227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6044243/pexels-photo-6044243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'art',
    tags: ['madhubani', 'painting', 'traditional', 'wall-art', 'handmade'],
    inStock: true,
    featured: true,
    materials: ['Handmade paper', 'Natural colors'],
    rating: 4.9,
    reviewCount: 18,
    createdAt: '2023-02-10T09:30:00Z',
  },
  {
    id: '3',
    name: 'Zari Embroidered Silk Saree',
    description: 'Exquisite Banarasi silk saree with intricate zari work and traditional motifs. This luxurious piece showcases the heritage of Indian weaving techniques.',
    price: 12999,
    discountPrice: 9999,
    images: [
      'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'clothing',
    tags: ['saree', 'silk', 'zari', 'traditional', 'wedding'],
    inStock: true,
    featured: true,
    colors: ['Maroon', 'Royal Blue', 'Emerald Green'],
    materials: ['Pure Silk', 'Gold Zari'],
    rating: 5.0,
    reviewCount: 32,
    createdAt: '2023-01-05T11:15:00Z',
  },
  {
    id: '4',
    name: 'Brass Peacock Diya Lamp',
    description: 'Intricately designed brass peacock-shaped diya lamp. Perfect for festivals and home decoration, this piece combines functionality with traditional aesthetics.',
    price: 1999,
    images: [
      'https://images.pexels.com/photos/5760894/pexels-photo-5760894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5760897/pexels-photo-5760897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'home-decor',
    tags: ['brass', 'diya', 'lamp', 'peacock', 'festival'],
    inStock: true,
    featured: false,
    materials: ['Brass'],
    rating: 4.6,
    reviewCount: 15,
    createdAt: '2023-03-01T14:20:00Z',
  },
  {
    id: '5',
    name: 'Handwoven Pashmina Shawl',
    description: 'Luxurious handwoven Pashmina shawl from Kashmir. Known for its exceptional softness and warmth, this shawl features traditional Kashmiri embroidery.',
    price: 8999,
    discountPrice: 7499,
    images: [
      'https://images.pexels.com/photos/6858612/pexels-photo-6858612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'clothing',
    tags: ['shawl', 'pashmina', 'kashmiri', 'winter', 'handwoven'],
    inStock: true,
    featured: false,
    colors: ['Natural Cream', 'Burgundy', 'Navy Blue'],
    materials: ['Pashmina Wool'],
    rating: 4.7,
    reviewCount: 22,
    createdAt: '2023-02-18T16:45:00Z',
  },
  {
    id: '6',
    name: 'Blue Pottery Coffee Mug Set',
    description: 'Set of four handcrafted Blue Pottery coffee mugs from Jaipur. Each piece showcases the distinctive blue and white patterns that characterize this traditional craft.',
    price: 2499,
    images: [
      'https://images.pexels.com/photos/6046007/pexels-photo-6046007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6045987/pexels-photo-6045987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'kitchenware',
    tags: ['blue pottery', 'mug', 'coffee', 'handmade', 'jaipur'],
    inStock: true,
    featured: false,
    materials: ['Ceramic', 'Natural pigments'],
    rating: 4.5,
    reviewCount: 19,
    createdAt: '2023-03-10T09:10:00Z',
  },
  {
    id: '7',
    name: 'Sandalwood Carved Jewelry Box',
    description: 'Exquisitely carved sandalwood jewelry box with traditional motifs. Features multiple compartments and the natural fragrance of sandalwood.',
    price: 4999,
    discountPrice: 3999,
    images: [
      'https://images.pexels.com/photos/773497/pexels-photo-773497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/260417/pexels-photo-260417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'home-decor',
    tags: ['sandalwood', 'jewelry box', 'carved', 'handcrafted', 'mysore'],
    inStock: true,
    featured: true,
    materials: ['Sandalwood'],
    rating: 4.9,
    reviewCount: 27,
    createdAt: '2023-01-25T13:30:00Z',
  },
  {
    id: '8',
    name: 'Handloom Cotton Kurta',
    description: 'Comfortable and stylish handloom cotton kurta with traditional block prints. Perfect for casual and semi-formal occasions.',
    price: 1999,
    images: [
      'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5384429/pexels-photo-5384429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ],
    category: 'clothing',
    tags: ['kurta', 'handloom', 'cotton', 'block print', 'casual'],
    inStock: true,
    featured: false,
    colors: ['Indigo', 'Mustard', 'Off-white'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    materials: ['Handloom Cotton'],
    rating: 4.4,
    reviewCount: 31,
    createdAt: '2023-02-05T10:40:00Z',
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};