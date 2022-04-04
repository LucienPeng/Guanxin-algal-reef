import React from "react";

const FooterComponent = () => {
  return (
    <div>
      <footer className="bg-white pt-4 pb-8 dark:bg-gray-800 xl:pt-8">
        <div className="mx-auto max-w-screen-lg px-4 text-gray-400 dark:text-gray-300 sm:px-6 md:px-8 xl:max-w-screen-xl">
          <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-md mb-4 uppercase text-gray-500 dark:text-gray-200">
                  認識我們
                </h2>
                <ul>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">場館簡介</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">時光隧道</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">認識藻礁</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">特色產品</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-md mb-4 uppercase text-gray-500 dark:text-gray-200">
                  實用資訊
                </h2>
                <ul>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">場館訊息</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">活動快訊</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">交通方式</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">鄰近景點</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <h2 className="text-md mb-4 uppercase text-gray-500 dark:text-gray-200">
                  聯絡我們
                </h2>
                <ul>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">聯繫方式</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">Facebook</a>
                  </li>
                  <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                    <a href="#">Instagram</a>
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
