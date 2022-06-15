import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  //Refs
  const homeRef = props.homeRef;
  const aboutRef = props.aboutRef;
  const newsRef = props.newsRef;
  const activityRef = props.activityRef;
  const touristicInfoRef = props.touristicInfoRef;
  const neighborhoodRef = props.neighborhoodRef;
  const trafficRef = props.trafficRef;
  const menuCollapseRef = useRef('');
  // 如果 Scroll Y 軸 > 5 為 true；反之則為 false
  const [isScrolled, setIsScrolled] = useState(false);
  const [navShadow, setNavShadow] = useState('');

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
    if (!menuCollapseRef.current.classList.contains('hidden')) {
      menuCollapseRef.current.classList.add('hidden');
    } else {
      menuCollapseRef.current.classList.remove('hidden');
    }
  };

  const scrollToHandle = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 200,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, [isScrolled]);

  const navitems = [
    { id: '1', item: '首頁', ref: homeRef },
    { id: '2', item: '認識我們', ref: aboutRef },
    { id: '3', item: '最新消息', ref: newsRef },
    { id: '4', item: '活動體驗', ref: activityRef },
    { id: '5', item: '附近景點', ref: neighborhoodRef },
    { id: '6', item: '特色產品', ref: null },
    { id: '7', item: '交通指南', ref: trafficRef },
    { id: '8', item: '遊憩資訊', ref: touristicInfoRef },
  ];

  return (
    <div ref={homeRef}>
      <nav
        className={`navbar fixed top-0 z-50 w-full text-center transition duration-500 ease-in-out ${navShadow} ${
          isScrolled ? 'lg:bg-sky-800' : 'lg:bg-transparent'
        }  select-none justify-center bg-sky-800 lg:flex lg:items-stretch`}
      >
        <div className=' mx-9 flex h-12 text-3xl text-black '>
          <button
            onClick={menuHandler}
            className='relative ml-auto block h-12 w-12 cursor-pointer p-4 lg:hidden'
          >
            <svg
              className='fill-current text-white'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='lg:flex-no-shrink lg:flex lg:items-stretch'>
          <div className='ml-auto hidden lg:flex' ref={menuCollapseRef}>
            {navitems.map((menu) => (
              <Link
                key={menu.id}
                onClick={() => scrollToHandle(menu.ref)}
                to='#'
                className='flex-no-grow flex-no-shrink
                relative flex items-center py-2 px-4 leading-normal text-white
                no-underline transition-all ease-out hover:scale-110
                hover:text-amber-300'
              >
                {menu.item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
