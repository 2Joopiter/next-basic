import Link from 'next/link';

export default function AboutMenu() {
	return (
		<nav>
			<ul>
				<li>
					<Link href='/about/president'>President</Link>
				</li>
				<li>
					<Link href='/about/company'>Company</Link>
				</li>
			</ul>
		</nav>
	);
}
