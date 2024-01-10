'use client';
import { useEffect, useState } from 'react';

export default function PostDetail({ params }) {
	// 해당 다이나믹 라우팅 페이지 컴포넌트가 호출된 조건이 Link 컴포넌트에 의해서 호출된 경우라면 useParams 훅을 쓰지 않더라도 자동으로 props를 통해 params 객체가 받아짐
	// useParams를 쓰는 경우는 Link가 특정 핸들러함수를 통해서 동적으로 호출될때 직접 params 값을 활용할 때

	const { num } = params();
	const [Post, setPost] = useState(null);

	useEffect(() => {
		const fetchPostById = async (url) => {
			const data = await fetch(url);
			const result = await data.json();
			setPost(result);
		};

		fetchPostById(`https://jsonplaceholder.typicode.com/posts/${num}`);
	}, [num]);

	return (
		<div>
			<h2>{Post?.title}</h2>
			<p>{Post?.body}</p>
		</div>
	);
}
