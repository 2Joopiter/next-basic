'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PostDetail({ params }) {
	const { num } = useParams();
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
			<h2>{Post.title}</h2>
			<p>{Post.body}</p>
		</div>
	);
}
