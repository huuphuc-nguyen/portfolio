import React from 'react'
import Bg from '../../assets/images/bg_hero.png'
import Avatar from '../../assets/images/avatar.png'
import { scroller } from 'react-scroll'

const Hero = () => {

  const scrollToAbout = () => {
    // Scroll to the 'about' element using react-scroll
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
        <img name="home" src={Bg} className='w-full h-dvh relative'/>
        <div className='absolute inset-0 h-dvh w-full bg-black opacity-60'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center w-full mt-28'>
            <img src={Avatar} className='shadow-2xl animate-popup opacity-0 w-[10rem] p-1 mb-10 bg-white/40 dark:bg-black/60 border-4 rounded-full'/>

            <h1 className='text-3xl md:text-5xl text-white font-bold mb-4'>Hi, I am Felix Nguyen</h1>
            <p className='text-white mb-4'>Full Stack Web Developer</p>

            <div className='flex justify-between w-[10rem]'>
                <a href="https://www.linkedin.com/in/huuphuc-nguyen" target='_blank'><i className="animate-slide_bot_in fa-brands fa-linkedin text-white text-center text-3xl md:text-4xl cursor-pointer hover-scale"></i></a>
                <a href="https://github.com/huuphuc-nguyen" target='_blank'><i className="animate-slide_bot_in fa-brands fa-github text-white text-center text-3xl md:text-4xl cursor-pointer hover-scale"></i></a>
                <a href="https://stackoverflow.com/users/21582538/felix-nguyen" target='_blank'><i className="animate-slide_bot_in fa-brands fa-stack-overflow text-white text-center text-3xl md:text-4xl cursor-pointer hover-scale"></i></a>
            </div>

            <a href="https://drive.google.com/drive/folders/1NwSkI83ZxFFF0EhZ_g1pYaVojNutpp1v?usp=sharing" target='_blank'><button className='animate-slide_bot_in bg-white/40 dark:bg-black/60 text-white px-5 py-3 rounded-lg mt-10 hover-scale'>Resume</button></a>
            <i onClick={scrollToAbout} className="cursor-pointer dark:bg-black/60 text-white mt-8 rounded-full w-10 h-10 flex justify-center items-center text-lg animate-bounce bg-white/40 fa-solid fa-arrow-down"></i>
        </div>
    </>
  )
}

export default Hero
