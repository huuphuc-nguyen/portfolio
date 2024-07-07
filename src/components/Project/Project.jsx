import {projectData} from '../../assets/constances/projectData'
import ProjectCard from '../ProjectCard/ProjectCard'
import subwave2 from '../../assets/images/subwave2.png'
import circlebg from '../../assets/images/circlebg.png'
import subwave1 from '../../assets/images/subwave1.png'

const Project = () => {
  return (
    <div name='projects' className='bg-bg_secondary w-full py-4 md:pt-16 px-10 lg:px-36 md:px-20 relative overflow-hidden'>
        <img src={subwave2} className='rotate-90 absolute -top-[15rem] opacity-20 -left-[19rem] scale-[50%]'/>
        <img className='w-[20rem] absolute -right-24 bottom-[19rem] opacity-20 ' src={circlebg}/>
        <img className='absolute opacity-50 scale-[70%] -bottom-[11rem] -left-[22rem]' src={subwave1}/>
        <h1 className='text-3xl md:text-5xl font-bold text-text_primary dark:text-white w-full text-center'>Projects</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-20 gap-10 pt-8 md:pt-14 pb-10 place-items-center'>
            {projectData.map((project) => {
            return <ProjectCard key={project.id} project={project}/>
            })}
        </div>
    </div>  
  )
}

export default Project
