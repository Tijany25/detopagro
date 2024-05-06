"use server"
import mongoose from 'mongoose';

const connectionString = `mongodb+srv://detopagro:DBm91O9ZebEfBmUE@cluster0.deqckxh.mongodb.net/detopagro?retryWrites=true&w=majority&appName=Cluster0`;

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
