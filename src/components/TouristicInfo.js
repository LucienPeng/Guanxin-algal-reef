import React from 'react';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

const TouristicInfo = (props) => {
  const scrollToHandle = () => {
    console.log(props.newsRef);
    window.scrollTo({
      top: props.newsRef.current.offsetTop - 200,
      behavior: 'smooth',
    });
  };
  return (
    <div
      ref={props.touristicInfoRef}
      className='container mx-auto mt-20 mb-20 w-full'
    >
      <h2 className='mb-6 text-4xl'>遊憩資訊</h2>

      <div className='grid grid-cols-3 gap-10 '>
        
        <ul className='leading-10'>
          <ul>
            <li>
              <strong>【藻礁保護區】</strong>
            </li>
            <li>
              <AttachMoneyIcon />
              門票：免費
            </li>
            <li>
              <LocalPhoneIcon />
              電話：03-3865711
            </li>
            <li>
              <LocationOnIcon />
              地址：桃園市觀音區保生里、新屋區永興里
            </li>
          </ul>
          <ul className='leading-8'>
            <li>
              <MapIcon />
              開放時間：
            </li>
            <li>星期日：07:00 – 17:00</li>
            <li>星期一：07:00 – 17:00</li>
            <li>星期二：07:00 – 17:00</li>
            <li>星期三：07:00 – 17:00</li>
            <li>星期四：07:00 – 17:00</li>
            <li>星期五：07:00 – 17:00</li>
            <li>星期六：07:00 – 17:00 </li>
          </ul>
        </ul>

        <ul className='leading-10'>
          <li>
            <strong>【藻礁生態環境教室】</strong>
          </li>
          <li>
            <AttachMoneyIcon />
            門票：免費參觀，採線上報名付費導覽
          </li>
          <li>
            <LocalPhoneIcon />
            免費服務專線：0800-520-526
          </li>
          <li>
            <LocationOnIcon />
            地址：桃園市新屋區東興路二段1800巷160號
          </li>
          <li>開館：星期三～星期日：09:00 – 17:00</li>
          <li>休館：星期一、星期二</li>
        </ul>

        <ul className='leading-10'>
          <li>
            <strong>【旅遊叮嚀】</strong>
          </li>
          <li>
            一、本保護區採分區管制，核心區不開放申請進入。
            <br />
            緩衝區(南區)及緩衝區(北區)每日各開放200名申請進入、永續利用區無需申請即可進入，如欲申請進入緩衝區內，請預先線上申請。
          </li>
          <li>
            二、全區開放時間為上午7時至下午5時，所有人員請於下午5時前離開保護區。
          </li>
          <li>
            三、最佳生態觀賞時間為每日退潮前後2個小時。
            <br />
            潮汐預報請參考
            <Link onClick={scrollToHandle} to='#'>
              <span className='text-blue-500 underline'>這裡</span>
            </Link>
          </li>
          <li>四、請勿踩踏礁石與藻類</li>
        </ul>

      </div>
    </div>
  );
};

export default TouristicInfo;
