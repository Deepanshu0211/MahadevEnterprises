import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Plus, ArrowLeft } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { getProductById } from '../../data/products';

const productSchema = z.object({
  name: z.string().min(3, 'Product name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().positive('Price must be positive'),
  discountPrice: z.number().nullable().optional(),
  category: z.string().min(1, 'Category is required'),
  tags: z.string().optional(),
  inStock: z.boolean(),
  featured: z.boolean(),
});

type ProductFormValues = z.infer<typeof productSchema>;

const ProductForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const isEditMode = Boolean(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      inStock: true,
      featured: false,
    },
  });

  useEffect(() => {
    if (isEditMode && id) {
      const product = getProductById(id);
      if (product) {
        setValue('name', product.name);
        setValue('description', product.description);
        setValue('price', product.price);
        setValue('discountPrice', product.discountPrice || null);
        setValue('category', product.category);
        setValue('tags', product.tags.join(', '));
        setValue('inStock', product.inStock);
        setValue('featured', product.featured);
        setImages(product.images);
      } else {
        navigate('/admin/products');
      }
    }
  }, [id, isEditMode, setValue, navigate]);

  const handleAddImage = () => {
    if (imageUrl && !images.includes(imageUrl)) {
      setImages([...images, imageUrl]);
      setImageUrl('');
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const onSubmit = (data: ProductFormValues) => {
    if (images.length === 0) {
      alert('Please add at least one product image');
      return;
    }

    setIsSubmitting(true);

    // In a real application, you would call an API to save the product
    const productData = {
      ...data,
      images,
      tags: data.tags ? data.tags.split(',').map((tag) => tag.trim()) : [],
    };

    // Simulating API call
    setTimeout(() => {
      console.log('Saving product data:', productData);
      setIsSubmitting(false);
      navigate('/admin/products');
    }, 1500);
  };

  return (
    <Layout>
      <div className="bg-surface-50 py-8">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <button
              onClick={() => navigate('/admin/products')}
              className="flex items-center text-surface-600 hover:text-surface-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Products
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-serif font-bold text-surface-900">
              {isEditMode ? 'Edit Product' : 'Add New Product'}
            </h1>
            <p className="text-surface-600 mt-2">
              {isEditMode
                ? 'Update product information'
                : 'Fill in the details to create a new product'}
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6 border-b border-surface-200">
                <h2 className="text-xl font-medium text-surface-900 mb-4">Basic Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <Input
                      label="Product Name"
                      error={errors.name?.message}
                      placeholder="Enter product name"
                      {...register('name')}
                    />
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-surface-800 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      className={`w-full px-3 py-2 bg-white border rounded-md transition-all duration-200
                        ${
                          errors.description
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-surface-200 focus:ring-primary-500 focus:border-transparent'
                        }
                        focus:outline-none focus:ring-2
                      `}
                      placeholder="Enter product description"
                      {...register('description')}
                    ></textarea>
                    {errors.description && (
                      <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      label="Price (₹)"
                      type="number"
                      error={errors.price?.message}
                      placeholder="0.00"
                      {...register('price', { valueAsNumber: true })}
                    />
                  </div>

                  <div>
                    <Input
                      label="Discount Price (₹)"
                      type="number"
                      helperText="Leave empty if no discount"
                      placeholder="0.00"
                      {...register('discountPrice', { valueAsNumber: true })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-surface-800 mb-1">
                      Category
                    </label>
                    <select
                      className={`w-full px-3 py-2 bg-white border rounded-md transition-all duration-200
                        ${
                          errors.category
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-surface-200 focus:ring-primary-500 focus:border-transparent'
                        }
                        focus:outline-none focus:ring-2
                      `}
                      {...register('category')}
                    >
                      <option value="">Select Category</option>
                      <option value="home-decor">Home Decor</option>
                      <option value="clothing">Clothing</option>
                      <option value="art">Art</option>
                      <option value="jewelry">Jewelry</option>
                      <option value="kitchenware">Kitchenware</option>
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      label="Tags"
                      placeholder="handmade, traditional, wooden (comma separated)"
                      helperText="Separate tags with commas"
                      {...register('tags')}
                    />
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="inStock"
                        className="h-4 w-4 text-primary-600 border-surface-300 rounded focus:ring-primary-500"
                        {...register('inStock')}
                      />
                      <label htmlFor="inStock" className="ml-2 text-sm text-surface-900">
                        In Stock
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="featured"
                        className="h-4 w-4 text-primary-600 border-surface-300 rounded focus:ring-primary-500"
                        {...register('featured')}
                      />
                      <label htmlFor="featured" className="ml-2 text-sm text-surface-900">
                        Featured Product
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-b border-surface-200">
                <h2 className="text-xl font-medium text-surface-900 mb-4">Product Images</h2>

                <div className="mb-4">
                  <div className="flex items-center">
                    <Input
                      placeholder="Enter image URL"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={handleAddImage}
                      className="ml-2"
                      leftIcon={<Plus className="w-4 h-4" />}
                    >
                      Add
                    </Button>
                  </div>
                  <p className="mt-1 text-sm text-surface-500">
                    Enter URLs of product images. First image will be the main product image.
                  </p>
                </div>

                {images.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className="relative rounded-md overflow-hidden group border border-surface-200"
                      >
                        <img
                          src={image}
                          alt={`Product image ${index + 1}`}
                          className="w-full h-32 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        {index === 0 && (
                          <div className="absolute top-1 left-1 bg-primary-500 text-white text-xs px-2 py-1 rounded">
                            Main
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 border-2 border-dashed border-surface-200 rounded-md">
                    <div className="text-surface-500">No images added yet</div>
                    <p className="text-sm text-surface-400 mt-1">
                      Add at least one image for your product
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6 flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  className="mr-4"
                  onClick={() => navigate('/admin/products')}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary" isLoading={isSubmitting}>
                  {isEditMode ? 'Update Product' : 'Create Product'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductForm;