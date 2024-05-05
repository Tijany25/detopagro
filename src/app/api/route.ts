import { NextRequest, NextResponse } from 'next/server';
import connectDB from './db'; // Assuming this connects to MongoDB
import Product from './model/productModel'; // Assuming Product model definition

// Type for API response (can be customized)
type ApiResponse = {
  message?: string;
  error?: string;
  products?: any; // Array of Product documents
};

async function handler(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  const { method } = req;

  console.log(method);
  console.log(req);

  

  try {
    switch (method) {
      case 'GET':
        const products = await Product.find();
        return NextResponse.json(products);
      case 'POST':
        const { name, location, categoryId, description, imageUrl, estimatedDeliveryDate } = await req.json();
        const newProduct = new Product({ name, location, categoryId, description, imageUrl, estimatedDeliveryDate });
        await newProduct.save();
        return NextResponse.json({ message: 'Product created successfully' });
      // Implement similar logic for PUT (update) and DELETE (remove) with authorization checks
      default:
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Wrap the handler with the connectDB function (assuming it returns a Promise)
export default connectDB(handler);
