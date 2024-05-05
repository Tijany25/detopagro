import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Category || mongoose.model("Category", categorySchema);
