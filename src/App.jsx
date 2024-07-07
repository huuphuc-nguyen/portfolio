import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from '../src/pages/Home'
import PageNotFound from './pages/PageNotFound'
import ProjecDetail from './pages/ProjectDetail'

import { Routes, Route } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'; 

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 500, // duration of the animation in milliseconds
      easing: 'ease-out-back', // easing for the animation
    });
  }, []);

  return (
    <div className='max-w-full overflow-hidden'>
      <Header />

      <Routes>
        <Route path='/:section?' element={<Home />} />
        <Route path='/project/:id' element={<ProjecDetail />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
