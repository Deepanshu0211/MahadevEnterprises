import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.page) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .populate('category', 'name slug')
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({
    products,
    page,
    pages: Math.ceil(count / pageSize),
  });
});

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate(
    'category',
    'name slug'
  );

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    price,
    discountPrice,
    category,
    colors,
    sizes,
    materials,
    tags,
    inStock,
    featured,
  } = req.body;

  // Handle image uploads
  const imageUrls = [];
  if (req.files && req.files.length > 0) {
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'products',
      });
      imageUrls.push(result.secure_url);
    }
  }

  const product = new Product({
    name,
    description,
    price,
    discountPrice,
    images: imageUrls,
    category,
    colors: colors ? colors.split(',') : [],
    sizes: sizes ? sizes.split(',') : [],
    materials: materials ? materials.split(',') : [],
    tags: tags ? tags.split(',') : [],
    inStock: inStock === 'true',
    featured: featured === 'true',
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  // Handle new image uploads
  const imageUrls = [...product.images];
  if (req.files && req.files.length > 0) {
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'products',
      });
      imageUrls.push(result.secure_url);
    }
  }

  // Update product
  product.name = req.body.name || product.name;
  product.description = req.body.description || product.description;
  product.price = req.body.price || product.price;
  product.discountPrice = req.body.discountPrice || product.discountPrice;
  product.images = req.body.images || imageUrls;
  product.category = req.body.category || product.category;
  product.colors = req.body.colors ? req.body.colors.split(',') : product.colors;
  product.sizes = req.body.sizes ? req.body.sizes.split(',') : product.sizes;
  product.materials = req.body.materials ? req.body.materials.split(',') : product.materials;
  product.tags = req.body.tags ? req.body.tags.split(',') : product.tags;
  product.inStock = req.body.inStock === 'true';
  product.featured = req.body.featured === 'true';

  const updatedProduct = await product.save();
  res.json(updatedProduct);
});

export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  // Delete images from Cloudinary
  for (const imageUrl of product.images) {
    const publicId = imageUrl.split('/').pop().split('.')[0];
    await cloudinary.uploader.destroy(`products/${publicId}`);
  }

  await product.deleteOne();
  res.json({ message: 'Product removed' });
});

export const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.reviewCount = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export const getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ featured: true })
    .populate('category', 'name slug')
    .limit(8);
  res.json(products);
});

export const getProductsByCategory = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: req.params.categoryId }).populate(
    'category',
    'name slug'
  );
  res.json(products);
});