import React from 'react'
import './App.css'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import ProductTab from './components/ProductTab'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
<Slider/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
      </Routes>
<ProductTab/>
    </BrowserRouter>
  )
}

export default App
