import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../db'; // Assuming this connects to MongoDB
import Product from '../model/productModel'; // Assuming Product model definition
import Category from '../model/categoryModel'; // Assuming Category model definition

// Type for API response (can be customized)
type ApiResponse = {
  message?: string;
  error?: string;
  categories?: any; // Array of Category documents
};

// **Named export functions for each HTTP method**
export async function GET(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    await connectDB();
    const url = new URL(req.url);
    const searchParams = url.searchParams; // Get search params object

    const searchTerm = searchParams.get('q')?.toString() || '';
    const categories = await Category.find({ name: { $regex: searchTerm, $options: 'i' } });
    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    const { name, description, imageUrl } = await req.json();

    // Validate category data (optional, implement validation logic here)
    // if (!name || name.trim() === '') {
    //   return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    // }

    // Create a new category instance
    const newCategory = new Category({ name, description, imageUrl });

    // Save the new category
    await newCategory.save();

    return NextResponse.json({ message: 'Category created successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams; // Get search params object

    const catId = searchParams.get('id');// Assuming product ID is in URL params
    const updateData = await req.json();

    // Validate product ID (optional)
    if (!catId) {
      return NextResponse.json({ error: 'Missing Category ID' }, { status: 400 });
    }

    const updatedProduct = await Category.findByIdAndUpdate(catId, updateData, { new: true }); // Return updated product

    if (!updatedProduct) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Category updated successfully', product: updatedProduct });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams; // Get search params object

    const catId = searchParams.get('id'); // Assuming product ID is in URL params

    // Validate product ID (optional)
    if (!catId) {
      return NextResponse.json({ error: 'Missing Category ID' }, { status: 400 });
    }

    const deletedProduct = await Category.findByIdAndDelete(catId);

    if (!deletedProduct) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Category deleted successfully' });
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
