
const ProjectCard = (props) => {
    const {project} = props;
  return (
    <div data-aos='flip-left'  data-aos-once='false' data-aos-anchor-placement='center-bottom' className='group flex flex-col rounded-xl shadow-xl bg-red-50 dark:bg-white
                     w-[18rem] h-[20rem] md:w-[20rem] md:h-[23rem] px-6 pt-6 hover:scale-105 transition-all duration-300
                    cursor-pointer'>
      <div className="w-full h-40 rounded-xl overflow-hidden"><img src={project.img} className="w-full h-full shadow-md group-hover:scale-120 transition-all duration-200"/></div>
      <h1 className="font-bold my-4 self-center text-text_secondary text-lg">{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard
