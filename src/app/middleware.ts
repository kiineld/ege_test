// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // Handle CORS
    const response = NextResponse.next();

    const allowedOrigins = [
        'https://ege-og6fysh00-kiinelds-projects.vercel.app',
        'https://ege-five.vercel.app',
        'http://localhost:3000',
    ];

    const origin = request.headers.get('origin');

    if (origin && allowedOrigins.includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
    }

    response.headers.set('Access-Control-Allow-Credentials', 'true');
    response.headers.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT,OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
        return new NextResponse(null, { status: 200, headers: response.headers });
    }

    return response;
}

export const config = {
    matcher: '/api/:path*',
};