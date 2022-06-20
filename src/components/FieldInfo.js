import React from 'react';
import News from './News';
import TideForecast from './TideForecast';

const FieldInfo = (props) => {
  return (
    <div className='container mx-auto mt-10 w-full'>
      <h2 className='mb-6 text-center text-4xl sm:text-left'>遊憩資訊</h2>
      <div className='h-full justify-between gap-10 px-2 sm:flex'>
        <TideForecast />
        <News newsRef={props.newsRef} />
      </div>
    </div>
  );
};

export default FieldInfo;
