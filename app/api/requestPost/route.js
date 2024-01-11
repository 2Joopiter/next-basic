import { postDB } from '@/app/DB/postData';
import { NextResponse } from 'next/server';

export function GET() {
	return NextResponse.json({ result: postDB });
}
