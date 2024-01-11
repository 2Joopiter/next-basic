'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Post() {
	const [Post, setPost] = useState([]);

	useEffect(() => {
		fetch('/api/requestPost')
			.then((data) => data.json())
			.then((json) => setPost(json.result));
	}, []);

	return (
		<section className='postList'>
			<h1>Post List</h1>
			{Post.map((post) => {
				return (
					<article key={post.id}>
						<h2>
							<Link href={`/post/${post.id}`}>{post.title}</Link>
						</h2>
					</article>
				);
			})}
		</section>
	);
}
