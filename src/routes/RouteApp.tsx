import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Budget from '../pages/Budget'

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </BrowserRouter>
  )
}
