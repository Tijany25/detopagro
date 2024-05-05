import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  category: String,
  description: String,
  imageUrl: String,
  estimatedDeliveryDate: String,
  createdAt: { type: Date, default: Date.now },
  features: String,
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);
