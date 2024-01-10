import clsx from 'clsx';
import styles from './main.module.scss';
import Image from 'next/image';
import pic from './pic.jpg';
import pic2 from '@/public/pic.jpg';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Main Page</h1>
			<div className={clsx(styles.pic)}>
				<img src={pic.src} alt='image' />
			</div>

			<div className={clsx(styles.pic)}>
				<Image src={pic2} alt='image' fill quality={100} priority />
			</div>
		</main>
	);
}

/*
	NEXT에서 Image 컴포넌트를 사용해야 하는 이유
	1. 원본 빌드시 Import 한 다음 브라우저 크기에 따른 이미지 용량을 자동 최적화 시켜줌
	2. 클라이언트 요청이 들어올 때 미리 최적화 시킨 이미지를 랜더링
	3. quality 속성으로 직접 최적화 가능 0~100(default:75)
	4. priority 속성을 이용해 빨리 출력해야 하는 이미지에 우선순위 부여 가능
	4-1. 기본적으로 Image 컴포넌트는 lazy 로딩기능을 적용하는데 Priority 기능 적용시 lazy loading 기능은 강제 해제됨(주의)
*/
