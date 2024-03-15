import React from 'react'

function Pmain() {
  return (
    <div className='flex flex-col items-center gap-20'>
        <h1 className='text-[60px] text-[#435766] mt-20'>Call of Duty: WWII</h1>
        <div className='flex items-center gap-10 mt-20'>
            <button className='w-[170px] h-[52px] bg-[#8DD83D] text-[white] rounded-[4px]'>Order Now</button>
            <button className='text-[white] w-[235px] h-[52px] rounded-[4px] bg-[gray]'>Technical Specifications</button>
        </div>
        <iframe width="1060" height="615" src="https://www.youtube.com/embed/XV8vBqNu9nI?si=rnWFfWOQ0Wr-AezB"  ></iframe>
    </div>
  )
}

export default Pmain