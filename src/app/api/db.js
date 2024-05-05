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
    process.exit(1); // Exit process on error
  }
};

export default connectDB;


// const connectDB = async (handler) => async (req, res) => {
//   // Check if the database connection is already established
//   console.log('ttttttyyy');

//   if (mongoose.connections[0].readyState) {
//     console.log('ttttttyyy');
//     return handler(req, res); // Use existing connection
//   }

//   // If not connected, attempt to connect
//   try {
//     await mongoose.connect(connectionString, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected successfully');
//     return handler(req, res); // Use newly established connection
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     return NextResponse.json({ error: 'Database connection error' }, { status: 500 }); // Handle connection error
//   }
// };

// export default connectDB;