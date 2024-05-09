"use server"
import mongoose from 'mongoose';

const connectionString = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    //process.exit(1); // Exit process on error
  }
};

export default connectDB;
