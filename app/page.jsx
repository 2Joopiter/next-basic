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
				<Image
					src={pic}
					alt='image'
					width={300}
					height={300}
					quality={100}
					// 속성이 fill일 때 next가 크기 산정하기 어려우므로, 특정 크기 미만의 브라우저폭에 대한 사이즈 크기를 지정하기를 권장
					sizes='(min-width: 808px) 50vw, 100vw'
					placeholder='blur'
				/>
			</div>

			<div className={clsx(styles.pic)}>
				<Image src={pic2} alt='image' fill quality={100} />
			</div>
		</main>
	);
}

/*
	NEXT에서 Image 컴포넌트를 사용해야 하는 이유
	0. LCP(Largest Contentfull Paint): 웹페이지 로딩속도 측정시 컨텐츠에 있는 이미지나 영상같이 용량이 큰 소스용량까지 로딩속도 측정에 포함시키는 방식 (Image 컴포넌트는 LCP의 성능점수를 높이기 위한 방식)
	1. 원본 빌드시 Import 한 다음 브라우저 크기에 따른 이미지 용량을 자동 최적화 시켜줌
	2. 클라이언트 요청이 들어올 때 미리 최적화 시킨 이미지를 랜더링
	3. quality 속성으로 직접 최적화 가능 0~100(default:75)
	4. priority 속성을 이용해 빨리 출력해야 하는 이미지에 우선순위 부여 가능
	4-1. 기본적으로 Image 컴포넌트는 lazy 로딩기능을 적용하는데 Priority 기능 적용시 lazy loading 기능은 강제 해제됨(주의)
	5. Lazy loading이란 viewport에 보이는 이미지만 렌더링을 하고 문서에는 있지만 viewport에 보이지 않으면 로딩을 미루는 방식
	6. Image 컴포넌트 호출시 가급적 width, height 속성을 지정해야 next가 빌드시에 해당 사이즈에 맞는 최적화 작업을 함
	7. 이미지의 크기가 고정값이 아닐때는 fill 적용하기 (연결되어있는 style의 넓이, 높이를 판단해서 알아서 최적화함)
	8. fill속성 적용시 추가적으로 하면 좋은 속성 > sizes
	9. placeholder="blur"로 지정시 (로컬이미지일때) 미리 blur이미지를 먼저 출력하고 전체 이미지 렌더링이 완료되면 변경처리
	9-1. 주의점: Placeholder 지정시 lazy-loading기능 제거됨, priority 적용시에는 placeholder가 동작안됨
	10. 처음 마운트 화면에 보일 큰 이미지에 적용할 수 있는 2가지 옵션 (1. Priority / 2. placeholder)
*/
