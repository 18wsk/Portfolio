import { motion } from 'framer-motion'
import React from 'react'
import Socials from '../../components/landing/socials'
import { AiOutlineDownload } from 'react-icons/ai';

const LandingSection = () => {
    const pfp =  require("../../assets/will_pfp.jpg");
    const resume = require("../../assets/William_Kennedy_Resume.pdf");
    return (
        <div className='w-full h-full relative z-0 flex items-center justify-center xs:pt-[40px] sm:pt-[80px]' id="home" >
            <div className='w-full h-full flex items-center justify-center'>
                <motion.div
                    whileInView={{ y: 0, opacity: 1 }}
                    initial={{ y: 100, opacity: 0 }}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        damping: 40,
                    }}
                    viewport={{ once: true }}
                    className='w-full h-full flex items-center justify-center relative bg-white'
                >
                    <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4'>
                        <div className='w-full h-full grid grid-rows-4 gap-x-12 '>
                            <div className='row-span-3 lg:w-max xs:w-screen h-full grid place-items-center lg:grid-cols-2 lg:gap-x-[32px]'>
                                <div className='w-full h-full lg:pt-0 mx-auto rounded-full drop-shadow-2xl'>
                                    <img src={pfp} alt="logo" className='shadow-xl shadow-my-blue/20 mx-auto flex shrink rounded-full border-solid border-[0px] border-my-blue xs:h-50 xs:w-60 lg:w-[480px] lg:h-[480px]'/>
                                </div>
                                <div className='w-max h-max whitespace-pre-line '> 
                                    <h1 className='font-lato lg:text-2xl font-bold text-black pb-12 xs:hidden lg:block'>Hi, I'm</h1>
                                    <h1 className='font-lato xs:pt-4 sm:pt-12 lg:pt-0 sm:text-6xl xs:text-3xl font-extrabold text-black underline decoration-my-blue'> William Kennedy</h1>
                                    <div className='flex flex-col items-center pt-4'>
                                        <div className='w-max'>
                                            <h1 className=" font-lato animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-xl text-black font-bold">
                                                Full Stack Developer
                                            </h1>
                                        </div>
                                        <div className='w-max xs:h-20 sm:h-40 flex items-center justify-center '>
                                            <a 
                                                className='shadow-md  drop-shadow-2xl shadow-my-blue/20 font-lato w-max h-10 bg-my-blue text-white 
                                                            rounded-lg m-4 px-4 flex items-center justify-center gap-x-2 font-bold hover:bg-blue-600' 
                                                target="_blank" 
                                                href={resume} 
                                                download={resume.name} 
                                                rel="noreferrer"
                                            >
                                                {<AiOutlineDownload/>} Resume
                                            </a>
                                        </div>
                                        <Socials/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>     
            </div>
        </div>
    )
}

export default LandingSection