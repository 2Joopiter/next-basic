'use client'; // 사용자에 따라 Router가 바뀌므로 입력해줘야 Params 기능이 동작함. 서버에서는 저런 기능을 인지하지 못하기 때문

//Dynamic Routing
//중첩폴더 안쪽에 [변수명] 형식으로 폴더를 만들고 그 안쪽에 page.jsx를 생성
//해당 페이지 컴포넌트에서는 params객체가 props로 전달되고
//props객체 안에 변수명 property로 url에 전달 params값을 전달 가능
export default function GalleryDetail({ params }) {
	return (
		<div className='detail'>
			<h3>{params.id + '번째 갤러리 상세페이지'}</h3>
		</div>
	);
}
