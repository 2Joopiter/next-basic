'use client';
import { useEffect, useState } from 'react';

export default function PostList() {
	const [Post, setPost] = useState('');
	useEffect(() => {
		const fetchPost = async (url) => {
			const data = await fetch(url, { method: 'GET' });
			const json = await data.json();
			setPost(json);
		};

		fetchPost('/api/post');
	}, []);

	return <div className='postList'>postList</div>;
}
