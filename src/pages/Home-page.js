import BannerComponent from "../components/Banner-component";
import TideForecastComponent from "../components/TideForecast-component";
import SwiperComponent from "../components/Swiper-component";

const HomePage = () => {
  return (
    <div className="Home-Page">
      <BannerComponent />
      <div className="mx-5 items-center justify-between sm:mx-10 sm:flex">
        <TideForecastComponent />
        <div className=" flex w-full items-center justify-center">最新消息</div>
      </div>
      <SwiperComponent />
    </div>
  );
};

export default HomePage;
