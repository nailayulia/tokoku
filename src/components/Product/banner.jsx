import React from 'react';
import Banner1 from "../../../public/img/banner.png"

const Banner = () => {
 return(
    <>
    <div className='w-full h-200 bg-gray-300 flex items-center justify-center'>
        <img src={Banner1} alt="" className='w-full h-full object-cover'/>
    </div>
    </>

 );
};
export default Banner;