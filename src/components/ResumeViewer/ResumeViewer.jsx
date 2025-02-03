import React from 'react'

const ResumeViewer = ({isShow, setShowResume}) => {

    const handleOnClick = () => {
        setShowResume(false)
    }

    React.useEffect(() => {
        if (isShow) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isShow])
    
  return (
    <section className="fixed inset-0 flex items-center justify-center w-full h-full bg-black/80 z-50">
      <div className='fixed m-4 top-0 flex flex-row w-full justify-center md:justify-end md:px-60 md:top-4 gap-4'>
        <a
          href="https://drive.google.com/uc?id=1eSi65Go6jwQptNQv8QJzd9_YnRPwEZtU&export=download"
          download
          className= "text-white"
        >
          <i className="fa-solid fa-cloud-arrow-down text-3xl"></i>
        </a>
        
        <button className=" text-white" onClick={handleOnClick}>
          <i className="fa-solid fa-circle-xmark text-3xl"></i>
        </button>
      </div>
      
      <iframe
              src="https://drive.google.com/file/d/1eSi65Go6jwQptNQv8QJzd9_YnRPwEZtU/preview"
              title="Resume"
              className="border-0 rounded-lg w-full md:w-1/2 md:h-full h-[80%] py-4"
      />
  
       
    </section>
  )
}

export default ResumeViewer
