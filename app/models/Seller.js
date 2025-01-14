// models/Seller.js
import mongoose, { Schema, model, models } from 'mongoose';

const SellerSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  location: {
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: '2dsphere'
    }
  },
  rating: {
    type: Number,
    default: 0
  },
  reviewsCount: {
    type: Number,
    default: 0
  },
  farmName: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Seller = models.Seller || model('Seller', SellerSchema);
export default Seller;
