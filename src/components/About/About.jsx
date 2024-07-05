import TechCard from '../TechCard/TechCard'
import { techStackData } from '../../assets/constances/techStackData'
import circlebg from '../../assets/images/circlebg.png'
import subwave1 from '../../assets/images/subwave1.png'

const About = () => {

  return (
    <div name="about" className='bg-bg_primary w-full pt-4 pb-3 md:pt-16 px-10 lg:px-36 md:px-20 relative overflow-hidden'>
        <img className='absolute opacity-70 dark:opacity-50 rotate-180 scale-[70%] -right-[17rem] -top-[9rem]' src={'https://media-public.canva.com/NFVXc/MAFiPENFVXc/1/s.svg'}/>
        <img className='absolute opacity-80 rotate-180 scale-[70%] -right-[26rem] -top-[13rem]' src={subwave1}/>
        <img className='w-[20rem] absolute -left-20 top-[13rem] opacity-15' src={circlebg}/>
        <img className='w-[20rem] absolute -right-24 bottom-[5rem] opacity-15 ' src={circlebg}/>
        <h1 className='text-3xl md:text-5xl font-bold text-text_primary dark:text-white w-full text-center'>About Me</h1>
        <section>
            <h2 className='mb-4 text-text_secondary mt-10 text-2xl md:text-3xl font-bold'>Something about me</h2>
            <p className='text-lg text-gray-500 dark:text-white'>I am currently pursuing a Bachelor of Science in Computer Science at the University of Texas at San Antonio (UTSA). In addition to my foundational coding knowledge, I have developed a wide range of skills, including UI/UX brainstorming, database design, diagram analysis and creation, and documentation.</p>
            <br></br>
            <p className='text-lg text-gray-500 dark:text-white'>My experience spans developing applications for various platforms, such as: </p>

            <ul className='list-disc'>
                <li className='text-lg text-gray-500 dark:text-white ml-10 mt-5 mb-1'><strong>Desktop:</strong> Using WPF and Java Swing</li>
                <li className='text-lg text-gray-500 dark:text-white ml-10 mb-1'><strong>Mobile:</strong> Focusing on Android development with Java</li>
                <li className='text-lg text-gray-500 dark:text-white ml-10 mb-1'><strong>Web:</strong> Building websites using vanilla HTML/CSS and ReactJS</li>
            </ul>
            <br/>
            <p className='text-lg text-gray-500 dark:text-white'>Recently, my focus has shifted towards full-stack web development. I specialize in using ReactJS and TailwindCSS for front-end development, .NET technologies for the back end, and SQL Server for database management.</p>
        </section>
        <section>
            <h2 className='mb-8 text-text_secondary mt-10 text-2xl md:text-3xl font-bold'>Tech-stack and Tools</h2>
            <div className='flex flex-wrap justify-between'>
                {techStackData.map((tech, index) => {
                    return <TechCard key={index} img={tech.img} name={tech.name}/>
                })}
            </div>
        </section>
        
    </div>
  )
}

export default About

