import React from 'react';
import News from './News'
import TideForecast from './TideForecast'

const FieldInfo = (props) => {
  return (
    <div className='container mt-10 w-full mx-auto'>
      <h2 className='mb-6 text-4xl'>遊憩資訊</h2>
      <div className='h-full justify-between gap-5 sm:flex'>
        <TideForecast />
        <News newsRef={props.newsRef} />
      </div>
    </div>
  );
};

export default FieldInfo;
