'use client';
import React, { useState, useEffect } from 'react';

export default function PostDetail({ params }) {
	const { num } = params;
	const [Post, setPost] = useState(null);

	useEffect(() => {
		const fetchPostById = async (url) => {
			const data = await fetch(url);
			const result = await data.json();
			console.log(result);
			setPost(result);
		};
		fetchPostById(`https://jsonplaceholder.typicode.com/posts/${num}`);
	}, [num]);
	return (
		<div>
			<h2>{Post?.title}</h2>
			<div>
				{Post?.body.split('\n').map((txt) => {
					return (
						<React.Fragment key={txt}>
							{txt}
							<br />
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
}
