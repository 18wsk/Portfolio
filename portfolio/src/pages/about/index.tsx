import { motion } from 'framer-motion'
import React from 'react'
import Tools from '../../components/about/Tools'
import Skills from '../../components/about/Skills'
import AboutMe from '../../components/about/AboutMe'

const AboutMeSection = () => {
    return (
        <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{
                duration: 0.6,
                type: "spring",
                damping: 40,
            }}
            viewport={{ once: true }}
            className='w-screen h-min-[800px] flex flex-col items-center justify-center sm:pt-[80px] px-4 bg-my-blue'
            id='about'
        >
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full py-2"> 
                    <h1 className='text-white font-lato font-bold lg:text-[4rem] xs:text-xl text-center xs:block sm:hidden lg:block relative pt-4'>
                        ABOUT 
                    </h1>
                    <div className='w-full h-fit items-center justify-center xs:pb-4 sm:pb-8 xs:flex sm:hidden lg:flex pt-4'>
                        <div className='w-[32px] h-[4px] bg-black rounded-lg'></div>
                    </div>
                <div className='xs:flex lg:hidden w-full h-min-[700px] flex-col items-center justify-around gap-y-4'>
                    <AboutMe/>
                    <Skills/>
                    <Tools/>
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
        </motion.div>
    )
}

export default AboutMeSection