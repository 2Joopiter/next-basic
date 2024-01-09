import AboutMenu from '@/components/aboutMenu/aboutMenu';

export default function Layout({ children }) {
	return (
		<div className='layout'>
			<AboutMenu />
			{children}
		</div>
	);
}
