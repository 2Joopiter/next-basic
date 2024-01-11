import { postDB } from '@/DB/postData';
import { NextResponse } from 'next/server';

export async function GET(req, res) {
	const { postNum } = res.params;
	return NextResponse.json({ result: postDB[parseInt(postNum)] });
}
