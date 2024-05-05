import { NextRequest, NextResponse } from 'next/server';
import Youtube from '../model/youtubeLinkModel';

type ApiResponse = {
  message?: string;
  error?: string;
  ytLink?: any; 
};

export async function GET(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const searchTerm = searchParams.get('q')?.toString() || '';
    const ytLink = await Youtube.find().limit(4);
    return NextResponse.json(ytLink);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    const { name, imageUrl } = await req.json();
    const newLink = new Youtube({ name, imageUrl });

    await newLink.save();

    return NextResponse.json({ message: 'Youtube link created successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse): Promise<NextResponse> {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const catId = searchParams.get('id');

    if (!catId) {
      return NextResponse.json({ error: 'Missing Youtube link ID' }, { status: 400 });
    }

    const deletedProduct = await Youtube.findByIdAndDelete(catId);

    if (!deletedProduct) {
      return NextResponse.json({ error: 'Youtube link not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Youtube link deleted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}