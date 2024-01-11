import { postDB } from '@/DB/postData';
import { NextResponse } from 'next/server';

// 모든 데이터 가져오는 서버 라우터
export function GET() {
	return NextResponse.json({ result: postDB });
}

// 클라이언트로부터 POST 방식으로 특정 데이터를 전달받아서 저장해주는 서버 라우터
export async function POST(req, res) {
	const payload = await req.json();
	if (payload) return NextResponse.json({ result: 'data posted' }, { status: 200 }); // status: 200이 성공 400이 실패
	else return NextResponse.json({ result: 'fail to Post' }, { status: 400 });
}
