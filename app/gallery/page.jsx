import styles from './gallery.module.scss';

export const generateMetadata = () => {
	return {
		title: 'Gallery Page',
		description: "ABC Company's Gallery",
	};
};

export default function Gallery() {
	return (
		<main className={styles.gallery}>
			<h1>갤러리 목록 페이지</h1>
		</main>
	);
}
