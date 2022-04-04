import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const NavbarComponent = () => {
  const menuRef = useRef("");

  const menuHandler = () => {
    if (!menuRef.current.classList.contains("hidden")) {
      menuRef.current.classList.add("hidden");
    } else {
      menuRef.current.classList.remove("hidden");
    }
  };

  return (
    <div>
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <Link className="flex-shrink-0" to="/">
                <img className="h-9" src={logo} alt="logo" />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    to="/#"
                  >
                    首頁
                  </Link>
                  <Link
                    className="rounded-md px-3  py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    to="/#"
                  >
                    最新消息
                  </Link>
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    to="/#"
                  >
                    場域介紹
                  </Link>
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    to="/#"
                  >
                    認識藻礁
                  </Link>
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    to="/#"
                  >
                    活動體驗
                  </Link>
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    to="/#"
                  >
                    附近景點
                  </Link>
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    to="/#"
                  >
                    特色產品
                  </Link>
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    to="/#"
                  >
                    交通指南
                  </Link>
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    to="/#"
                  >
                    聯絡我們
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-gray-300 focus:outline-none dark:text-white"
                onClick={menuHandler}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden" ref={menuRef}>
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
              to="/#"
            >
              首頁
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 dark:text-white"
              to="/#"
            >
              認識我們
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
              to="/#"
            >
              Content
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
              to="/#"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <nav className="relative w-full select-none bg-gray-500 lg:flex lg:items-stretch">
        <div className="flex-no-shrink flex h-12 items-stretch">
          <a
            href="#"
            className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
          >
            Tailwind
          </a>
          <a
            href="#"
            className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
          >
            Css
          </a>
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
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className="lg:flex-no-shrink lg:flex lg:flex-grow lg:items-stretch">
          <div
            className="ml-auto hidden lg:flex lg:items-stretch lg:justify-end"
            ref={menuRef}
          >
            <a
              href="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              Item 1
            </a>
            <a
              href="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              Item 2
            </a>
            <a
              href="#"
              className="flex-no-grow flex-no-shrink hover:bg-grey-dark relative flex items-center py-2 px-4 leading-normal text-white no-underline"
            >
              Item 3
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
