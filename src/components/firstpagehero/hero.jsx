import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { img } from '../../assets';
function Hero() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper relative z-10">
        {/* 1 */}
        <SwiperSlide><div className='bg'>
          <div className='translate-y-[300px] ml-[550px]'>
            <div className='ml-[500px]'>
              <h1 className='text-[white]  text-[56px]'>Star Wars</h1>
              <h2 className='text-[white] text-[44px]'>Battlefront 11</h2>
            </div>
            <div className='flex items-center gap-5 justify-center translate-y-[300px]'>
              <button className='p-3 bg-[#8DD83D] text-[white] rounded-[5px]  w-[200px]'>Watch Triller</button>
              <button className='p-3 bg-[gray] text-[white] rounded-[5px]  w-[200px]'>Explore Games</button>
            </div>
          </div>
        </div></SwiperSlide>
        {/* 2      */}
        <SwiperSlide><div className='bg'>
          <div className='translate-y-[300px] ml-[550px]'>
            <div className='flex flex-col ml-[500px]'>
              <h1 className='text-[white] text-[56px] '>Star Wars</h1>
              <h2 className='text-[white] text-[44px]'>Battlefront 11</h2>
            </div>
            <div className='flex items-center gap-5 justify-center translate-y-[300px]'>
              <button className='p-3 bg-[#8DD83D] text-[white] rounded-[5px]  w-[200px]'>Watch Triller</button>
              <button className='p-3 bg-[gray] text-[white] rounded-[5px]  w-[200px]'>Explore Games</button>
            </div>
          </div>
        </div></SwiperSlide>
        {/* 3      */}
        <SwiperSlide><div className='bg'>
          <div className='translate-y-[300px] ml-[700px]'>
            <div className='flex flex-col ml-[500px]'>
              <h1 className='text-[white] text-[56px] '>Star Wars</h1>
              <h2 className='text-[white] text-[44px]'>Battlefront 11</h2>
            </div>
            <div className='flex items-center gap-5 justify-center translate-y-[300px]'>
              <button className='p-3 bg-[#8DD83D] text-[white] rounded-[5px]  w-[200px]'>Watch Triller</button>
              <button className='p-3 bg-[gray] text-[white] rounded-[5px]  w-[200px]' >Explore Games</button>
            </div>
          </div>
        </div></SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Hero