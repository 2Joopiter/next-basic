'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function PostList() {
	const [Posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async (url) => {
			const data = await fetch(url);
			const result = await data.json();
			setPosts(result);
		};

		fetchPosts('https://jsonplaceholder.typicode.com/posts');
	}, []);

	return (
		<ul>
			{Posts.map((post, idx) => {
				if (idx >= 10) return null;
				return (
					<li key={post.id}>
						<Link href={`/post/${post.id}`} prefetch={true}>
							{post.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

/*
Next에서는 Link컴포넌트를 이용해서 Router연결시 PreFetch기능 적용
해당 Router에 mapping되어 있는 컴포넌트 데이터를 해당 컴포넌트 페이지에서 쓰이지 않더라도 미리 백단에서 prefetch처리함으로 추후 라우터를 클릭했을때 빠른페이지전환이 가능하도록 처리
Prefetch기능은 개발버전에서는 확인이 불가하고 npm run build로 빌드한 뒤, npm run start로
production모드로 구동해야지만 확인 가능
Next14에서 달라진 prefetching동작 방식
-기존 Next13에서는 실제 Link컴포넌트 위에 마우스 호버를 해야지 prefetching일어난 반면
-새로운 Next14버전에서는 hover하지 않더라도 Link컴포넌트에서 중요한 데이터는 모두 prefetch처리
-Link prefetch={true} 기능활성화 / prefetch={false}
*/
