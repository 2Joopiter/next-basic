// Skip Routing (특정 라우터 경로를 생략)
// 개발 여건상 부득이하게 폴더 중첩이 많은 경우(중첩된 페이지 컴포넌트 폴더가 많을 경우)
// URL이 복잡해지는 것을 방지하기 위해 중간단계의 폴더명을 괄호로 묶어놓으면 해당 Router 경로를 스킵 가능

export default function Page() {
	return (
		<div className='page'>
			<h3>productA</h3>
		</div>
	);
}
