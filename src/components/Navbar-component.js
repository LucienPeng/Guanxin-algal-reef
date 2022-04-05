import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const menuCollapseRef = useRef("");
  // 如果 Scroll Y 軸 > 5 為 true；反之則為 false
	const [isScrolled, setIsScrolled] = useState(false);
  const [navShadow, setNavShadow] = useState("");

  const listenScrollEvent = () => {
    if (window.scrollY > 5) {
			setIsScrolled(true);
			setNavShadow('shadow-xl');
		} else {
			setIsScrolled(false);
			setNavShadow('');
		}
  };

  const menuHandler = () => {
    if (!menuCollapseRef.current.classList.contains("hidden")) {
      menuCollapseRef.current.classList.add("hidden");
    } else {
      menuCollapseRef.current.classList.remove("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, [isScrolled]);

  return (
    <div>
      <nav
        className={`navbar duration-400 fixed top-0 z-50 w-full transition ease-in-out ${navShadow} ${isScrolled ? 'lg:bg-sky-800' : 'lg:bg-transparent'} select-none justify-center bg-sky-800 lg:flex lg:items-stretch`}
      >
        <div className=" mx-9 flex h-12 text-3xl text-black ">
          <button
            onClick={menuHandler}
            className="relative ml-auto block h-12 w-12 cursor-pointer p-4 lg:hidden"
          >
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="font-馬路口圓體 lg:flex-no-shrink lg:flex lg:items-stretch">
          <div className="ml-auto hidden lg:flex" ref={menuCollapseRef}>
            <Link
              to="/guanxin-algal-reef"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              首頁
            </Link>
            <Link
              to="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              最新消息
            </Link>
            <Link
              to="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              場域介紹
            </Link>
            <Link
              to="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              認識藻礁
            </Link>
            <Link
              to="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              場域介紹
            </Link>
            <Link
              to="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              活動體驗
            </Link>
            <Link
              to="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              附近景點
            </Link>
            <Link
              to="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              特色產品
            </Link>
            <Link
              to="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              交通指南
            </Link>
            <Link
              to="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              聯絡我們
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
