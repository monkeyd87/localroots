import { NextResponse } from 'next/server';
import {verifyToken} from '@/utili'

export  async function middleware(req) {
    const token = req.cookies.get('token'); // Get the token from HTTP-only cookies


    if (!token) {
        console.log('no token')
        // return NextResponse.redirect(new URL('/login', req.url)); // Redirect if no token
        return NextResponse.json({message:'resticted'},{status:404})
    }

    try {
       const verified =  await verifyToken(token.value); // Verify token validity
       console.log('verified',verified)
        
        return NextResponse.next(); // Allow access
    } catch(err) {
        console.log(err)
        // return NextResponse.redirect(new URL('/login', req.url)); // Redirect if token is invalid
        return NextResponse.json({message:'missing resticted'},{status:404})

    }
}

// Protect specific routes
export const config = {
    matcher: ['/home/:path*','/api/me'] // Protect these routes
};
