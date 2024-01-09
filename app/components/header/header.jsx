import styles from './header.module.scss';
import Link from 'next/link';

export default function Header() {
	return (
		<header className={styles.header}>
			<ul>
				<li>
					<Link href='/'>Main</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/gallery'>Gallery</Link>
				</li>
			</ul>
		</header>
	);
}
