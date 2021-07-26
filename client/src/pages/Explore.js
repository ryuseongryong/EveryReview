import { useEffect } from "react";
import Reviews from "../components/Reviews";
import './Explore.css';

function Explore({ handleTitle, sortByLikes, setSort }) {
  
  useEffect(() => {
    // 헤더 타이틀 설정
    handleTitle('#Explore');
  }, []);
  
  return (
    <div className="explore">
      <div>
        {/* 
         해당 Hashtag를 렌더링해야한다 
         해당 Hashtag가 선택되지 않은 상태에선 뭘 렌더링해야하나..?
         */}
        <div>#Hashtag</div>
      </div>
      <Reviews sortByLikes={sortByLikes} setSort={setSort} />
    </div>
  );
}
  
export default Explore;  

// 해시태그 모아보기입니다.