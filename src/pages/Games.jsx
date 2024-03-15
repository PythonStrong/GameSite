import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Phero from '../components/pagehero/phero'
import Pmain from '../components/pagemain/pmain'
import Mcard from '../components/maincard/mcard'
import Ptext from '../components/pagetext/ptext'
import Footer from '../components/footer/footer'
import Loader from '../components/loader'


function Games() {
  const [loader, setLoader] = useState(true)
  setInterval(() => {
    setLoader(false)
  }, 2000);
  return (    
<>
{loader ? <Loader /> : 
    <div>
      <div>
        <Navbar/>
      </div>
        <div>
            <Phero/>
        </div>
        <div>
            <Pmain/>
        </div>
        <div>
      <Mcard/>
    </div>
    <div>
      <Ptext/>
    </div>
    <div className='mt-[170px]'>
      <Footer/>
    </div>
    </div>
}
</>
  )
}

export default Games