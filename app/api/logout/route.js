import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';


export async function GET(req) {
    const res = NextResponse.json({message:'loged',})
    res.cookies.set('token', '', { httpOnly: true, secure: true, maxAge: 0, path: '/' });
    return res;
}