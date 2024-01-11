'use client';
import styles from './detail.module.scss';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

export default function PostDetail({ params }) {
	const { id } = params;
	const [PostEl, setPostEl] = useState(null);

	useEffect(() => {
		fetch(`/api/requestPost/${id}`)
			.then((data) => data.json())
			.then((json) => {
				setPostEl(json.result);
			});
	}, [id]);

	return (
		<section className={clsx(styles.detail)}>
			<article>
				<h2>{PostEl?.title}</h2>
				<p>{PostEl?.content}</p>
			</article>

			<nav>
				<button>Edit</button>
				<button>Delete</button>
			</nav>
		</section>
	);
}
