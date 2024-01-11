// app > api > post > route.js (GET, POST, PUT, DELETE) Server Router
// Client (GET): fetch('/api/post/1',{method:'GET'}) //
// Client (POST방식): fetch('/api/post', {method:'POST', body:{data}})

import { NextResponse } from 'next/server';

export function GET() {
	return NextResponse.json({data: '클라이언트 요청에 대한 Post 응답'})
}

