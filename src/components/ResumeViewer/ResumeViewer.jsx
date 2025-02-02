import React from 'react'

const ResumeViewer = ({isShow, setShowResume}) => {

    const handleOnClick = () => {
        setShowResume(false)
    }
    
  return (
    <section className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/80 z-50">
      <button className="absolute top-4 right-4 p-2 text-white bg-red-500/80 rounded-md" onClick={handleOnClick}>
        Close
      </button>
      <iframe
              src="../../../../public/HuuPhucNguyen_Resume.pdf"
              title="Resume"
              className="border-0 rounded-lg w-full h-[80%] md:w-3/4 md:h-screen"
      />
  
       
    </section>
  )
}

export default ResumeViewer
