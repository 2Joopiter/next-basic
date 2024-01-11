'use client';
import { useState } from 'react';
import styles from './write.module.scss';
import clsx from 'clsx';

export default function Write() {
	const [Post, setPost] = useState({ title: '', content: '' });
	console.log(Post);

	const handleChange = (e) => {
		const { name, value } = e.target; //{'title','제목값'}
		setPost({ ...Post, [name]: value });
	};

	return (
		<section className={clsx(styles.write)}>
			<h1>Write Post</h1>

			<form>
				<input type='text' placeholder='title' name='title' value={Post.title} onChange={handleChange} />
				<textarea name='content' cols='30' rows='3' value={Post.content} onChange={handleChange}></textarea>
			</form>
		</section>
	);
}
