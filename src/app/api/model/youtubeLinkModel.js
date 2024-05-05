import mongoose from 'mongoose';

const myLinkSchema = new mongoose.Schema({
  imageUrl: String,
  name: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Youtube || mongoose.model("Youtube", myLinkSchema);
