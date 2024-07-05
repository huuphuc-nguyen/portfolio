
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Project from './components/Project/Project'
import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Contact from './components/Contact/Contact'

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
      <Hero />
      <About />
      <Project />
      <Contact />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
