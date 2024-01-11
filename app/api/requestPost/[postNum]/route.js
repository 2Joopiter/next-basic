import { postDB } from '@/app/DB/postData';
import { NextResponse } from 'next/server';

export function GET(req, res) {
	const { postNum } = res.params;
	return NextResponse.json({ result: postDB[parseInt(postNum)] });
}
