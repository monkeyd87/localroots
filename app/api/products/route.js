// app/api/Products/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../lib/dbConnect';
import Product from '../../models/Product';

/**
 * GET /api/Products
 * Return a list of all Products.
 */
export async function GET() {
  try {
    await dbConnect();
    const Products = await Product.find({});
    return NextResponse.json({ success: true, data: Products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

/**
 * POST /api/Products
 * Create a new Product with the data in the request body.
 */
export async function POST(request) {
  try {
    // Parse JSON from the request body
    const body = await request.json();

    await dbConnect();
    const newProduct = await Product.create(body);
    return NextResponse.json({ success: true, data: newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
