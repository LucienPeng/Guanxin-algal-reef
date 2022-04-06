import BannerComponent from "../components/Banner-component";
import TideForecastComponent from "../components/TideForecast-component";
const HomePage = () => {
  return (
    <div className="Home-Page">
      <BannerComponent />
      <div className="flex justify-between">
        <TideForecastComponent />
        <div className=" flex w-full items-center justify-center">最新消息</div>
      </div>
    </div>
  );
};

export default HomePage;
