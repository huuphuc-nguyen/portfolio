import React from 'react';
import { useParams } from 'react-router-dom'
import { projectData } from '../assets/constances/projectData'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import circlebg from '../assets/images/circlebg.png';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectDetail = () => {

    const { id } = useParams();
    const project = projectData.find((project) => project.id === parseInt(id));

    React.useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
  return (
    <div className='w-full bg-bg_secondary grid place-items-center relative overflow-hidden'>
      <img src={circlebg} className='absolute top-0 left-0 w-96 h-96 opacity-30' alt='circlebg'/>
      <img src={circlebg} className='absolute bottom-0 right-0 w-96 h-96 opacity-30' alt='circlebg'/>
      <div className='z-10 rounded-xl shadow-xl bg-bg_primary w-3/4 mb-10 py-6 mt-24'>
        <h1 className='w-full text-center font-bold text-xl md:text-2xl text-text_secondary'>{project.title}</h1>
        <div className='flex justify-center w-full mt-12'>
            <div className='grid grid-cols-1 w-3/4 lg:w-1/2 gap-4'>
                <div className='flex lg:gap-20 gap-5 md:pl-8'>
                    <p className='w-20 font-bold text-sm md:text-md lg:text-lg text-text_secondary'>Technologies:</p>
                    <p className='text-sm lg:text-lg dark:text-white'>{project.techStack}</p>
                </div>
                <div className='flex lg:gap-20 gap-5 md:pl-8'>
                    <p className='w-20 font-bold text-sm md:text-md lg:text-lg text-text_secondary'>Platform:</p>
                    <p className='text-sm lg:text-lg dark:text-white'>{project.platform}</p>
                </div>
                <div className='flex lg:gap-20 gap-5 md:pl-8'>
                    <p className='w-20 font-bold text-sm md:text-md lg:text-lg text-text_secondary'>Desciption:</p>
                    <p className='text-sm lg:text-lg dark:text-white'>{project.description}</p>
                </div>
                <div className='flex lg:gap-20 gap-5 justify-around mt-5 flex-wrap'>
                    <a href={project.github} target='_blank'><button className='rounded-md bg-text_primary px-3 py-1 w-[8rem] md:w-26 hover:opacity-70 focus:bg-sky-500 focus:ring focus:ring-violet-200 dark:focus:bg-gray-300'><i className='fa-brands fa-github pr-3'></i>Github</button></a>
                    <a href={project.demo} target='_blank'><button className='rounded-md bg-text_primary px-3 py-1 w-[8rem] md:w-26 hover:opacity-70 focus:bg-sky-500 focus:ring focus:ring-violet-200 dark:focus:bg-gray-300'><i className="fa-solid fa-tower-broadcast pr-3"></i>Demo</button></a>
                </div>

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="h-full md:h-[20rem] w-full md:w-[35rem] rounded-xl mt-5 mb-5"
                >
                  {project.img.map((img, index) => {
                      return  <SwiperSlide key={index}><img className='h-full w-full object-cover' src={img}/></SwiperSlide>
                  })}
                </Swiper>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default ProjectDetail
