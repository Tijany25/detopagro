import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../db'; // Assuming this connects to MongoDB
import Product from '../model/productModel'; // Assuming Product model definition

// Type for API response (can be customized)
type ApiResponse = {
  message?: string;
  error?: string;
  products?: any; // Array of Product documents
};

// **Named export functions for each HTTP method**
export async function GET(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    await connectDB();
    const url = new URL(req.url);
    const searchParams = url.searchParams; // Get search params object

    const searchTerm = searchParams.get('q')?.toString() || '';
    const category = searchParams.get('category')?.toString() || '';
    const pId = searchParams.get('id')?.toString() || '';
    const limit = parseInt(searchParams.get('limit') || '8');
    const page = parseInt(searchParams.get('page') || '1'); 
    const skip = (page - 1) * limit; // Calculate skip based on page and limit

    // Build filter query object
    const filter: any = {};
    if (searchTerm) {
      filter.name = { $regex: searchTerm, $options: 'i' }; // Search by name
    }
    if (category) {
      filter.category = category;
    }
    if (pId) {
      filter._id = pId
    }
    const products = await Product.find(filter, null, { skip, limit });
    const totalProducts = await Product.countDocuments(filter);
    return NextResponse.json({ products, totalProducts });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    const { name, location, category, description, imageUrl, estimatedDeliveryDate, features } = await req.json();
    const newProduct = new Product({ name, location, category, description, imageUrl, estimatedDeliveryDate, features });
    await newProduct.save();
    return NextResponse.json({ message: 'Product created successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
export async function PUT(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams; // Get search params object

    const productId = searchParams.get('id');// Assuming product ID is in URL params
    const updateData = await req.json();

    // Validate product ID (optional)
    if (!productId) {
      return NextResponse.json({ error: 'Missing product ID' }, { status: 400 });
    }

    const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, { new: true }); // Return updated product

    if (!updatedProduct) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams; // Get search params object

    const productId = searchParams.get('id'); // Assuming product ID is in URL params

    // Validate product ID (optional)
    if (!productId) {
      return NextResponse.json({ error: 'Missing product ID' }, { status: 400 });
    }

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


// Wrap the handler with the connectDB function (assuming it returns a Promise)
export default async (req: NextRequest, res: NextResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return GET(req, res);
    case 'POST':
      return POST(req, res);
    case 'PUT':
      return PUT(req, res);
    case 'DELETE':
      return DELETE(req, res);
    default:
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
};
