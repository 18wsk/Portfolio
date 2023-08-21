import { motion } from 'framer-motion'
import React from 'react'
import Timeline from 'src/components/experience/Timeline'

export const ExperienceSection = () => {


    return (
        <div className='w-full h-full relative z-0 xs:pt-[32px] sm:pt-[80px] md:pt-[80px] lg:pt-[80px] pb-12' id="experience" >
            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                transition={{
                    duration: 0.6,
                    type: "spring",
                    damping: 40,
                }}
                viewport={{ once: true }}
                className='w-full h-full items-center justify-center lg:pt-10 xs:pt-0 relative'
            >
                <div className='w-full h-full p-4 relative'>
                    <div className="w-full h-full z-0"/>
                        <div className="w-full h-full absolute xs:top-0 right-0 flex items-center justify-center xs:px-[1rem] sm:px-[2rem]">
                            <div className="w-full h-full pb-8"> 
                                <h1 className='h-fit w-full text-my-blue font-lato font-bold lg:text-[4rem] xs:text-xl text-center xs:block sm:hidden lg:block'>
                                    EXPERIENCE 
                                </h1>
                                <div className='w-full h-fit items-center justify-center xs:pb-4 sm:pb-8 xs:flex sm:hidden lg:flex pt-4'>
                                    <div className='w-[32px] h-[4px] bg-black rounded-lg'>
                                </div>
                            </div>
                            <div className='w-full h-full flex items-center justify-center xs:py-8 md:py-4'>
                                <Timeline/>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ExperienceSection