import { Route, Routes, Router } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Games from './pages/Games'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { useState } from 'react'
import Loader from './components/loader'


function App() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false)
  }, 3000);
  return (
    <>
    {loader ? <Loader /> : 
 <div className='contanier'>

   <Routes>
    <Route path='/' element={<Home /> }></Route>
    <Route path='/games' element={<Games /> }></Route>
    <Route path='/home' element={<Home /> }></Route>
   </Routes>  

 </div>
  }
    </>

  )
}

export default App
