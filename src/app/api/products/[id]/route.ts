import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../db'; // Assuming this connects to MongoDB
import Product from '../../model/productModel'; // Assuming Product model definition

// Type for API response (can be customized)
type ApiResponse = {
  message?: string;
  error?: string;
  products?: any; // Array of Product documents
};

export async function PUT(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    const url = new URL(req.url)
    const searchParams = url.searchParams; // Get search params object


    const productId = searchParams.get('id');
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
    const url = new URL(req.url)
    const searchParams = url.searchParams; // Get search params object
    

    const productId = searchParams.get('id');

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
