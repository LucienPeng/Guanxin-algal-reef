import React from 'react';
import MapIcon from '@mui/icons-material/Map';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';

const Contact = (props) => {
  return (
    <div
      ref={props.contactRef}
      className='container mx-auto mt-10 mb-20 w-full'
    >
      <h2 className='mb-6 text-4xl'>遊憩資訊</h2>

      <div className='grid grid-cols-3 gap-10'>
        <ul className='leading-10'>
          <ul>
            <li>【藻礁】</li>
            <li>
              <AttachMoneyIcon />
              門票資訊：免費
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
          <ul>
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
          <li>【藻礁生態環境教室】</li>
          <li>
            開館：星期三~星期日 9 : 00 - 17：00 （免費參觀，採線上報名付費導覽）
          </li>
          <li>休 館 ：星期一、星期二</li>
          <li>地址：桃園市新屋區東興路二段1800巷160號</li>
          <li>免費服務專線 : 0800-520-526</li>
        </ul>

        <ul className='leading-10'>
          <li>
            <InfoIcon />
            旅遊叮嚀
          </li>
          <li>
            本保護區採分區管制，核心區不開放申請進入，緩衝區(南區)及緩衝區(北區)每日各開放200名申請進入、永續利用區無需申請即可進入，如欲申請進入緩衝區內，請預先線上申請。
          </li>
          <li>
            全區開放時間為上午7時至下午5時，所有人員請於下午5時前離開保護區。
          </li>
          <li>潮汐預報請參考上方</li>
          <li>請勿踩踏礁石與藻類</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
