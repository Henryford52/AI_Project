import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
         
          {/* <Route path="/Cart" element={<Cart />} /> */}
          <Route index element={<Home />} />
          {/* <Route path="/Detail_page" element={<Detail_page />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} /> */}
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
