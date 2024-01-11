import { postDB } from '@/app/DB/postData';
import { NextResponse } from 'next/server';
import fs from 'fs';

// 모든 데이터 가져오는 서버 라우터
export function GET() {
	return NextResponse.json({ result: postDB });
}

// 클라이언트로부터 POST 방식으로 특정 데이터를 전달받아서 저장해주는 서버 라우터
export async function POST(req, res) {
	const payload = await req.json();
	if (payload) {
		// 클라이언트에서 전달받은 값에 id값을 새로 생성해서 기존 배열에 추가
		payload.id = postDB.length;
		postDB.push(payload);
		const updatedPostDB = postDB;
		const combinedData = JSON.stringify(updatedPostDB);

		// fs 모듈로 기존 postData.js의 파일내용을 변경해서 저장
		fs.writeFileSync('./app/DB/postData.js', `export const postDB=${combinedData}`, 'utf-8');

		// 파일 저장완료후 성공 응답객체 전솔
		return NextResponse.json({ result: 'data posted' }, { status: 200 });
	} else {
		return NextResponse.json({ result: 'fail to Post' }, { status: 400 });
	}
}
