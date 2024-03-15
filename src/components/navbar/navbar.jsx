import React from 'react'
import { arrow, logo } from '../../assets'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-between  bg-[#373A3C] p-7'>
      <img src={logo} alt="" />
      <ul className='flex items-center gap-10'>
        <Link className='text-[white]' to={'/Games'}>Games</Link>
        <div class="dropdown">
          <div className='flex items-center gap-2'>
            <button class="dropbtn">Console</button>
            <img className='w-[10px] ' src={arrow} alt="" />
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div class="dropdown">
          <div className='flex items-center gap-2'>
            <button class="dropbtn">Community</button>
            <img className='w-[10px] ' src={arrow} alt="" />
          </div>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <input className='p-2 rounded-[5px]' type="text" placeholder='Search' />
        <div className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6666 6.66668C16.6666 9.08334 15.4167 11.1666 13.5 12.3333C16.8334 13.5 19.3334 16.4167 20 20H18.3333C17.5 16.1666 14.0833 13.3333 10 13.3333C5.9167 13.3333 2.5 16.1667 1.66668 20H0C0.666641 16.5 3.16664 13.5833 6.49996 12.3333C4.5833 11.1667 3.33332 9.08334 3.33332 6.66668C3.33332 3 6.33336 0 10 0C13.6666 0 16.6667 3 16.6666 6.66668ZM10 1.66668C7.25002 1.66668 5 3.9167 5 6.66668C5 9.41666 7.25002 11.6667 10 11.6667C12.75 11.6667 15 9.41666 15 6.66668C15 3.9167 12.75 1.66668 10 1.66668Z" fill="#8DD83D" />
          </svg>
          <Link className='text-[gray]' to={'/home'}>My Box</Link>
        </div>
      </ul>


    </div>
  )
}

export default Navbar 