import { postDB } from '@/app/DB/postData';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
	const { PostNum } = await req.params;
	return NextResponse.json({ result: postDB[parseInt(PostNum)] });
}
