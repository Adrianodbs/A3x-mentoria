import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Budget from '../pages/Budget'
import Header from '../components/Header'

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </BrowserRouter>
  )
}
