const TechCard = (props) => {
  return (
    <div className='hover:scale-110 transition-all duration-300'> {/* This is the parent div that will be animated when hovered . AOS prevent hover*/  }
        <div data-aos='fade-up' data-aos-anchor-placement='bottom-bottom' className='flex bg-gray-50 shadow-md rounded-2xl md:w-48 w-40 mb-10 md:mx-4 mx-1 h-16 items-center'>
            <img src={props.img} alt={props.alt} className='w-9 h-9 ml-4 mr-6'/>
            <span>{props.name}</span>
        </div>
    </div>

  )
}

export default TechCard
