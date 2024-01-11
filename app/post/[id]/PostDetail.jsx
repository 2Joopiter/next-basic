export default function PostDetail() {
	const { id } = params;
	return (
		<div className='PostDetail'>
			<h2>{id}번째 게시글 상세페이지</h2>
		</div>
	);
}
