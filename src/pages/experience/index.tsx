import { motion } from 'framer-motion'
import React from 'react'
import Timeline from 'src/components/experience/Timeline'

export const ExperienceSection = ({ 
    setHoverState, 
}: 
{
    setHoverState(hov: string): void,
}) => {

    return (
        <motion.div
                whileInView={{opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 0.6,
                    type: "spring",
                    damping: 40,
                }}
                viewport={{ once: true }}
                className='w-screen h-min-[800px] flex flex-col items-center justify-center sm:pt-[80px] px-4 bg-my-blue pb-2'
                onMouseEnter={() => setHoverState("experience")}
                id='experience'
            >
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-full py-2"> 
                        <h1 className='text-white font-lato font-bold lg:text-[4rem] xs:text-xl text-center xs:block block relative pt-4'>
                            EXPERIENCE 
                        </h1>
                        <div className='w-full h-fit items-center justify-center xs:pb-4 sm:pb-8 flex pt-4'>
                            <div className='w-[32px] h-[4px] bg-black rounded-lg'>
                        </div>
                    </div>
                        <div className='w-full h-full flex items-center justify-center '> 
                            <Timeline/>
                        </div>
                    </div>
                </div>
            </motion.div>
    )
}

export default ExperienceSection