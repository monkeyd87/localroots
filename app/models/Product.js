// models/Product.js
import mongoose, { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['fruits', 'vegetables', 'herbs', 'other'],
    default: 'other'
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    default: 'lb'
  },
  quantityAvailable: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = models.Product || model('Product', ProductSchema);
export default Product;
