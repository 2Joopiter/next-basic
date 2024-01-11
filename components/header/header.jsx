import styles from './header.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

export default function Header() {
	return (
		<header className={clsx(styles.header)}>
			<h1>
				<Link href='/'>Logo</Link>
			</h1>

			<nav>
				<Link href='/about'>About</Link>
				<Link href='/post'>Post</Link>
			</nav>
		</header>
	);
}
