import { NextResponse } from 'next/server';

const posts = [
	{ id: 1, name: 'david', age: 20 },
	{ id: 2, name: 'Emily', age: 22 },
	{ id: 3, name: 'michael', age: 30 },
];

export function GET() {
	return NextResponse.json({ result: posts });
}
