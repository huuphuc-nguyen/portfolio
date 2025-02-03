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
      <div className='fixed m-4 top-0 flex flex-row w-full justify-center md:justify-end md:px-20 gap-4'>
        <a
          href="https://drive.google.com/uc?id=1eSi65Go6jwQptNQv8QJzd9_YnRPwEZtU&export=download"
          download
          className=" p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          Download Resume
        </a>
        
        <button className=" p-2 text-white bg-red-500/80 rounded-md" onClick={handleOnClick}>
          Close
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
