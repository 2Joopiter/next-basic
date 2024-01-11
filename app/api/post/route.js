// app > api > post > route.js (GET, POST, PUT, DELETE) Server Router
// Client (GET): fetch('/api/post/1',{method:'GET'}) //
// Client (POST방식): fetch('/api/post', {method:'POST', body:{data}})

import { NextResponse } from 'next/server';

const posts = [
	{ name: 'david', age: 20 },
	{ name: 'Emily', age: 22 },
	{ name: 'michael', age: 30 },
];

export function GET() {
	return NextResponse.json({ result: posts });
}
