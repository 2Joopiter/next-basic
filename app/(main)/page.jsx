import styles from './main.module.scss';
import clsx from 'clsx';

export default function MainPage() {
	return (
		<div className={clsx(styles.mainPage)}>
			<h2>Main Page</h2>
		</div>
	);
}
