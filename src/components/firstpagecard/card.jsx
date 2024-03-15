import React from 'react'
import { img1, img2, img3, img4 } from '../../assets'

function Card() {
  return (
    <div className='bg-[gray] h-[800px] justify-center text-center '>
      <div className='translate-y-14'>
        <div className='flex flex-col  justify-center items-center'>
          <img src={img1} alt="" />
          <h1 className='text-[48px] text-[white]'>The best value</h1>
          <h2 className='text-[36px] text-[white]'>In games and entertiemnt</h2>
        </div>
        {/* cards parent  */}
        <div className='flex items-center justify-center gap-32 mt-14'>
          {/* 1 */}
          <div className='w-[328px] h-[320px] flex flex-col  mb-7 gap-5 bg-[white]'>
            <img src={img2} alt="" />
            <h3>XBOX ONE X</h3>
            <h2>Faster Processing <br />Smoother Gameplay</h2>
            <button className='text-[white] bg-[#8DD83D] rounded-[5px] p-3'>Explore Consoles & Accessories</button>
          </div>
          {/* 2 */}
          <div className='w-[328px] h-[370px] flex flex-col items-center gap-10 bg-[white]'>
            <img className='mt-3' src={img3} alt="" />
            <div className='flex flex-col gap-9 translate-y-14'>
              <h3 className='mt-5'>mixer Streaming</h3>
              <h2>The Next Generation <br />f Life Game Streaming</h2>
            </div>
            <button className='text-[white] bg-[#8DD83D] w-[100%] mt-16 rounded-[5px] p-3'>Start Watching mixer</button>
          </div>
          {/* 3 */}
          <div className='w-[328px] h-[350px] flex flex-col items-center  gap-7 bg-[white]'>
            <img src={img4} alt="" />
            <div className='flex flex-col mt-10'>
              <h3 className='mt-5'>Free Games Every Month</h3>
              <h2>Get up to $700 in  <br />free games</h2>
            </div>
            <button className='text-[white] bg-[#8DD83D] w-[100%] mt-8 rounded-[5px] p-3'>Get Free Games</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card