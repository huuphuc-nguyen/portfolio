import React from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from 'emailjs-com'
import subwave1 from '../../assets/images/subwave1.png'
import circlebg from '../../assets/images/circlebg.png'

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        message: yup.string().required(),
    })

    const {register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {

        try {
            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                message: data.message,
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitSuccess(true);
            reset();
        } catch (error) {
            console.error('Error sending email:', error);
        }

        // Reset submit success message after 3 seconds
        setTimeout(() => {
            setSubmitSuccess(false);
        }, 3000);
    };

    const [submitSuccess, setSubmitSuccess] = React.useState(false);

  return (
    <div name='contact' className='w-full bg-bg_primary py-4 md:pt-16 px-10 lg:px-36 md:px-20 relative overflow-hidden'>
        <h1 className='text-3xl md:text-5xl font-bold text-text_primary dark:text-white w-full text-center mb-10'>Contact Me</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full'>
            <img className='w-[20rem] absolute -left-20 top-[13rem] opacity-40' src={circlebg}/>
            
            <form data-aos='zoom-in' data-aos-once='true' data-aos-anchor-placement='center-bottom' onSubmit={handleSubmit(onSubmit)} className='z-10  h-[42rem] bg-white dark:bg-slate-600 flex flex-col justify-around px-10 py-10 gap-10 w-full rounded-xl shadow-xl'>
                <div>
                    <label htmlFor='name' className=' text-black dark:text-white text-bold text-lg'>Name</label>
                    <br/>
                    <i className="dark:text-white  fa-solid fa-user translate-y-6 translate-x-3"></i>
                    <input
                        id='name'
                        type='text'
                        placeholder='Enter your name'
                        className='dark:text-white  dark:bg-black/60 -mt-2 pl-8 pr-3 py-1 border-2 border-black rounded-md w-full shadow-sm h-10'
                        {...register('name')}
                    />
                    {errors.name && <p className='text-red-500 text-sm mt-2'>{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor='email' className=' text-black dark:text-white text-bold text-lg'>Email</label>
                    <br/>
                    <i className="dark:text-white  dark:bg-black/60 fa-solid fa-envelope translate-y-6 translate-x-3"></i>
                    <input
                        id='email'
                        type='email'
                        placeholder='Enter your email'
                        className='dark:text-white  dark:bg-black/60 -mt-2 pl-8 pr-3 py-1 border-2 border-black rounded-md w-full shadow-sm h-10'
                        {...register('email')}
                    />
                    {errors.email && <p className='text-red-500 text-sm mt-2'>{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor='message' className='text-black dark:text-white text-bold text-lg'>Message</label>
                    <br/>
                    <textarea
                        id='message'
                        placeholder='Send me a message...'
                        className='dark:text-white  dark:bg-black/60 mt-4 pl-4 pr-3 py-1 border-2 border-black rounded-md w-full shadow-sm min-h-36 max-h-60 overflow-y-auto'
                        {...register('message')}
                    />
                    {errors.message && <p className='text-red-500 text-sm mt-2'>{errors.message.message}</p>} 
                </div>

                {submitSuccess && (
                        <p className='self-center text-green-500 text-sm mt-2'>Form submitted successfully!</p>
                    )}
                <button className='bg-text_primary dark:bg-black/60 text-white cursor-pointer w-1/3 md:w-1/5 hover:opacity-70 hover:scale-110 transition-all duration-200 self-center rounded-xl py-2' 
                        type='submit' 
                        disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
            </form>

            <div className='w-full flex flex-col justify-center gap-4 items-center h-dvh'>
                <h1 data-aos='zoom-in' className='z-10 dark:text-white text-black text-bold text-2xl md:text-3xl font-bold'>VISIT AND FOLLOW ME</h1>
                <div data-aos='zoom-in' className='z-10 flex gap-8 mt-8'>
                    <a href="https://www.linkedin.com/in/huuphuc-nguyen" target='_blank'><i className="fa-brands fa-linkedin text-black dark:text-white text-4xl cursor-pointer hover-scale"></i></a>
                    <a href="https://github.com/huuphuc-nguyen" target='_blank'><i className="fa-brands fa-github text-black dark:text-white text-4xl cursor-pointer hover-scale"></i></a>
                    <a href="https://stackoverflow.com/users/21582538/felix-nguyen" target='_blank'><i className="fa-brands fa-stack-overflow text-black dark:text-white text-4xl cursor-pointer hover-scale"></i></a>
                </div>
                <img className='absolute -right-[12rem] -bottom-20 md:-bottom-[9rem] opacity-70 scale-x-[-1]' src={'https://media-public.canva.com/NFVXc/MAFiPENFVXc/1/s.svg'}/>
                <img className='absolute -right-[27rem] -bottom-[8rem] md:-bottom-[10rem] opacity-70 scale-x-[-1]' src={subwave1}/>
                <img className='absolute md:top-[13rem] opacity-40' src={circlebg}/>
            </div>
        </div>
    </div>
  )
}

export default Contact
