// app/api/users/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../lib/dbConnect';
import {User} from '@/models';

/**
 * GET /api/users
 * Return a list of all users.
 */
export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

/**
 * POST /api/users
 * Create a new user with the data in the request body.
 */
export async function POST(request) {
  try {
    // Parse JSON from the request body
    const body = await request.json();

    await dbConnect();
    const newUser = await User.create(body);
    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
