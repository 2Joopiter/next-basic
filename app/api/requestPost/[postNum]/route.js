import { postDB } from '@/app/DB/postData';
import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET(req, res) {
	const { postNum } = await res.params;
	return NextResponse.json({ result: postDB[parseInt(postNum)] });
}

export async function DELETE(req, res) {
	const { postNum } = await res.params;
	const deletedData = postDB.filter((post) => post.id != postNum);
	const resultData = JSON.stringify(deletedData);

	fs.writeFileSync('./app/DB/postData.js', `export const postDB=${resultData};`, 'utf-8');
	return NextResponse.json({ result: 'data deleted' }, { status: 200 });
}
