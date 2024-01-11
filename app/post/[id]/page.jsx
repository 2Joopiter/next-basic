'use client';
import styles from './detail.module.scss';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function PostDetail({ params }) {
	const { id } = params;
	const router = useRouter();

	const [PostEl, setPostEl] = useState(null);

	const handleDelete = (id) => {
		if (!window.confirm('정말 글을 삭제하겠습니까?')) return;

		fetch(`/api/requestPost/${id}`, { method: 'DELETE' })
			.then((res) => {
				if (res.ok) {
					alert('글삭제 성공');
					router.push('/post');
				} else {
					alert('글삭제 실패');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetch(`/api/requestPost/${id}`)
			.then((data) => data.json())
			.then((json) => {
				console.log(json);
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
				<button onClick={() => handleDelete(id)}>Delete</button>
			</nav>
		</section>
	);
}
