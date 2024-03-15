import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/firstpagehero/hero'
import Card from '../components/firstpagecard/card'
import Cardbottom from '../components/cardbottom/cardbottom'
import Pos from '../components/pos/pos'
import Footer from '../components/footer/footer'
import Loader from '../components/loader'


function Home() {
  const [loader, setLoader] = useState(true)
  setInterval(() => {
    setLoader(false)
  }, 2000);

  return (
 <>
    {loader? <Loader /> :
    <div>
      <div>
        <Navbar/>
      </div>
     <div>
        <Hero/>
     </div>
     <div>
      <Card/>
     </div>
     <div>
         <Cardbottom/>
     </div>
     <div>
        <Pos/>
     </div>  
     <div>
      <Footer/>
      </div>  
    </div>  
    }
    </>
  )
}

export default Home