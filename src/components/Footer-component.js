import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div>
      <footer className=" bg-sky-800 pt-4 pb-8 dark:bg-gray-800 xl:pt-8">
        <div className="mx-auto max-w-screen-lg text-gray-400 dark:text-gray-300 sm:px-6 md:px-8 xl:max-w-screen-xl">
          <ul className="flex flex-nowrap justify-center pb-8 text-lg font-light">
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-md mb-4 uppercase text-white dark:text-gray-200">
                  認識我們
                </h2>
                <ul>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">場館簡介</Link>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">時光隧道</Link>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">認識藻礁</Link>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">特色產品</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-md mb-4 uppercase text-white dark:text-gray-200">
                  實用資訊
                </h2>
                <ul>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">場館訊息</Link>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">活動快訊</Link>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">交通方式</Link>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">鄰近景點</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-md mb-4 uppercase text-white dark:text-gray-200">
                  聯絡我們
                </h2>
                <ul>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">聯繫方式</Link>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">Facebook</Link>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <Link to="#">Instagram</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </footer>
      ;
    </div>
  );
};

export default FooterComponent;
