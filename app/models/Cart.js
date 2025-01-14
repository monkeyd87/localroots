// models/Cart.js
import mongoose, { Schema, model, models } from 'mongoose';

const CartItemSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
  },
  priceAtAddition: {
    type: Number,
    required: true
  }
});

const CartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  items: {
    type: [CartItemSchema],
    default: []
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Cart = models.Cart || model('Cart', CartSchema);
export default Cart;
