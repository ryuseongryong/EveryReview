import { Link } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  return (
    <section id="sideBar">
      <div id="sideBarLogoWrap">
        <div id="sideBarLogo">
          <img src="#" alt="BI" />
        </div>
      </div>
      <ul id="sideBarMenu">
        <li>
          <Link to='/main/home'>Home</Link>
        </li>
        <li>
          <Link to='/main/explore'>#Explore</Link>
        </li>
        <li>
          <Link to='/main/mypage'>My Page</Link>
        </li>
      </ul>
      <div id="logoutBtnWrap">
        <button>로그아웃</button>
      </div>
    </section>
  );
}
    
export default SideBar;  
  
// Side bar입니다.