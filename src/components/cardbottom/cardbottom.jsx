import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { card, card1, card2, card3 } from '../../assets';

function Cardbottom() {
  return (
    <div className='bgg '>
      <h1 className='text-[36px] text-[white] text-center mb-20 translate-y-10 ml-[100px]' >Exculisve games on XBOX</h1>
      <div>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={50}

        >
          <SwiperSlide><div className='w-[320px] h-[380px] gap-5 flex flex-col items-center ml-24 bg-[white]'>
            <img src={card3} alt="" />
            <h3 className='text-[18px] text-[#435766]'>Call of Duty: WWII</h3>
            <h2 className='text-[21px] text-[#435766]'>The C.O.D.E. Bravery Pack <br />is now available in WWII</h2>
            <button className='bg-[#8DD83D] w-[300px] p-3 text-[white]'>See datels</button>
          </div>
          </SwiperSlide>
          {/* 2 */}
          <SwiperSlide><div className='w-[320px] h-[380px] gap-5 flex flex-col items-center bg-[white]'>
            <img src={card} alt="" />
            <h3 className='text-[18px] text-[#435766]'>Call of Duty: WWII</h3>
            <h2 className='text-[21px] text-[#435766]'>The C.O.D.E. Bravery Pack <br />is now available in WWII</h2>
            <button className='bg-[#8DD83D] w-[300px] p-3 text-[white]'>See datels</button>
          </div>
          </SwiperSlide>
          {/* 3 */}
          <SwiperSlide><div className='w-[320px] h-[380px] gap-5 flex flex-col items-center bg-[white]'>
            <img src={card1} alt="" />
            <h3 className='text-[18px] text-[#435766]'>Call of Duty: WWII</h3>
            <h2 className='text-[21px] text-[#435766]'>The C.O.D.E. Bravery Pack <br />is now available in WWII</h2>
            <button className='bg-[#8DD83D] w-[300px] p-3 text-[white]'>See datels</button>
          </div>
          </SwiperSlide>
          {/* 4 */}
          <SwiperSlide><div className='w-[320px] h-[380px] gap-3 flex flex-col items-center bg-[white]'>
            <img className='w-[100%]' src={card2} alt="" />
            <h3 className='text-[18px] text-[#435766]'>Call of Duty: WWII</h3>
            <h2 className='text-[21px] text-[#435766]'>The C.O.D.E. Bravery Pack <br />is now available in WWII</h2>
            <button className='bg-[#8DD83D] w-[300px] p-3 text-[white]'>See datels</button>
          </div>
          </SwiperSlide>
          <button className='bg-[gray] p-3 text-[white] ml-[900px] mt-16' >XBOX STORE</button>
        </Swiper>
      </div>
    </div>
  )
}

export default Cardbottom