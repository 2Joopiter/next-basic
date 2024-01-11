import styles from './post.module.scss';
import clsx from 'clsx';

export default function Post() {
	return (
		<section className={clsx(styles.post)}>
			<h1>Post List</h1>
		</section>
	);
}

/*
	Front
	-사용자가 URL 요청시 출력될 UI 컴포넌트들을 미리 설정한 라우터에 따라 출력처리하는 로직을 개발하는 일(URL에 따라 어떤 컴포넌트가 보이게 할지)
	-사용자 이벤트 발생시 비동기 데이터를 요청(request)해서 서버로부터 응답(resopnse)받은 데이터를 다시 UI로 변환하여 화면에 출력
	-서버에 RESTful방식으로 요청을 보내기 위해서는 fetch로 method 방식을 구분하여 보냄
		+ fetch(url,{method: 'POST',body:저장할 데이터}) ; POST 방식으로 요청을 보내는 방식
		+ fetch(url+QueryString(쿼리 문자),{method: 'GET'}) ; GET 방식으로 요청을 보내는 방식
		+ fetch(url,{method: 'PUT', body:수정할 데이터}) ; PUT 방식 요청
		+ fetch(url+QueryString,{method: 'DELETE'}) ; DELETE 방식 요청

	back
	-클라이언트로부터 넘어오는 요청을 형식에 맞게 분류하여 응답하는 분기처리 로직을 구축(Server routing)
	-백앤드가 전달받는 요청은 크게 4가지로 분류 가능 (CRUD) -> RESTFul API(CRUD를 구조적으로 처리하기 위한 개발 방법론)
		+ Create (POST): 중요한 데이터 전달 목적(쉽게 노출되면 안되기에 브라우저의 body 객체를 통해 전달)
		+ Read (GET): 쿼리문, parameter같이 덜 중요한 데이터를 전달 (URL-queryString(Params)을 통해 보냄)
		+ Update (PUT): 중요한 데이터 전달 목적(쉽게 노출되면 안되기에 브라우저의 body 객체를 통해 전달)
		+ Delete (Delete): 쿼리문, parameter같이 덜 중요한 데이터를 전달 (URL-queryString(Params)을 통해 보냄)

		=> POST (클라이언트로부터 받아서 추가), PUT (뭔가를 받아서 수정); 비슷한 유형.
*/
