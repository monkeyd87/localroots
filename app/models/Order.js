// models/Order.js
import mongoose, { Schema, model, models } from 'mongoose';

const OrderItemSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  priceAtOrder: {
    type: Number,
    required: true
  }
});

const OrderSchema = new Schema({
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seller',
    required: true
  },
  items: {
    type: [OrderItemSchema],
    default: []
  },
  totalAmount: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  fulfillmentStatus: {
    type: String,
    enum: ['pending', 'accepted', 'in_progress', 'delivered', 'cancelled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = models.Order || model('Order', OrderSchema);
export default Order;
