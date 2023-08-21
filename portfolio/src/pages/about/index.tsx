import { motion } from 'framer-motion'
import React from 'react'
import Tools from '../../components/about/Tools'
import Skills from '../../components/about/Skills'
import AboutMe from '../../components/about/AboutMe'

const AboutMeSection = () => {
    return (
        <div className='w-full h-full relative z-0 xs:pt-[32px] sm:pt-[90px] md:pt-[90px] lg:pt-[120px]' id="about" >
            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                transition={{
                    duration: 0.6,
                    type: "spring",
                    damping: 40,
                }}
                viewport={{ once: true }}
                className='w-full h-full flex items-center justify-center relative bg-white lg:pt-10'
            >
                <div className='w-full h-full p-4 relative'>
                    <div className="w-full h-full z-0"/>
                        <div className="w-full h-full absolute xs:top-0 right-0 flex items-center justify-center xs:px-[1rem] sm:px-[2rem]">
                            <div className="w-full h-full pb-8"> 
                                <h1 className='h-fit w-full text-my-blue font-lato font-bold lg:text-[4rem] xs:text-xl text-center xs:block sm:hidden lg:block'>
                                    ABOUT 
                                </h1>
                                <div className='w-full h-fit items-center justify-center xs:pb-4 sm:pb-8 xs:flex sm:hidden lg:flex pt-4'>
                                    <div className='w-[32px] h-[4px] bg-black rounded-lg'>
                                </div>
                            </div>
                            <div className='w-full h-full xs:block lg:hidden md:py-8 flex flex-col '>
                                <div className='w-full h-full flex flex-col items-center xs:justify-start xs:pt-0 md:pt-0 md:justify-center gap-y-4'>
                                    <AboutMe/>
                                    <Skills/>
                                    <Tools/>
                                </div>
                                
                            </div>
                            <div className='w-full h-[540px] xs:flex-cols-1 md:flex-cols-2 items-center justify-center gap-x-8 xs:hidden lg:flex'>
                                <div className='w-fit h-[540px] gap-y-[8px] flex flex-col items-center justify-center'>
                                    <AboutMe/>
                                </div>
                                <div className='lg:w-3/4 xl:w-1/2 xl:min-w-[850px] h-[540px]'>
                                    <div className='w-full h-full flex flex-col items-start justify-start'>
                                        <div className='w-full h-[540px] flex flex-col items-start gap-y-8'>
                                            <Skills/>
                                            <Tools/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutMeSection