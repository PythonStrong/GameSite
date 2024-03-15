import React from 'react'
import { card, card1 } from '../../assets'

function Mcard() {
  return (
    <div className='flex flex-col items-center justify-center mt-44'>
        <div className='flex  items-center justify-center gap-96'>
            <h1 className='text-[#435766] text-[36px]'>Life Advice Looking <br /> Through A Window</h1>
            <img src={card1} alt="" />
        </div>
        <div className='flex items-center  gap-96 mt-20'>
            <img src={card} alt="" />
            <h1 className='text-[#435766] text-[36px]'>The Best Answer</h1>
        </div>
    </div>
  )
}

export default Mcard