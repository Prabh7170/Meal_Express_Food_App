import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
import Verify from './pages/verify/verify'
import MyOrders from './pages/myOrders/MyOrders'
const App = () => {

  const [showLogin , setShowLogin] = useState(false);
  return (
  <>
  {showLogin?<Loginpopup setShowLogin= {setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element= {<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
