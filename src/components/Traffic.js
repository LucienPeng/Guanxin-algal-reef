import React from 'react';

const Traffic = (props) => {
  return (
    <div ref={props.trafficRef} className='container mx-auto mt-10 w-full px-2'>
      <h2 className='mb-6 text-center text-4xl sm:text-left'>交通指南</h2>
      <div className='grid gap-10 sm:flex sm:grid-cols-2'>
        <div style={{ height: '50vh' }} className='w-full md:w-2/4'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.456913488145!2d121.03090961744387!3d25.018563500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34682ed82da76479%3A0x5f8d11ef0e04a89!2z5qGD5ZyS6KeA5paw6Je756SB55Sf5oWL57O76YeO55Sf5YuV54mp5L-d6K235Y2A!5e0!3m2!1szh-TW!2stw!4v1654524447083!5m2!1szh-TW!2stw'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>

        <ul className='leading-10	'>
          <li>
            <strong>【周遭停車場】</strong>
          </li>
          <li>觀音鄉第一停車場 (全時段費率未知)</li>
          <li>第一公有零售市場停車場 (全時段每小時 15 元)</li>
          <li>
            新屋區停一立體停車場 (全時段每小時 30 元／進場 15分鐘內出場免費)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Traffic;
