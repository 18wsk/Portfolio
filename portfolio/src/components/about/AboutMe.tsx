import { motion } from 'framer-motion';
import React from 'react'

const AboutMe = () => {
    const dev = require("../../assets/dev.png");

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='xs:w-full lg:w-[320px] h-fit flex xs:flex-cols-2 lg:flex-col lg:items-start lg:justify-start xs:items-center xs:justify-center 
                        rounded-lg shadow-md shadow-my-blue/70'
        >
            <div className='w-full h-full flex-col items-center justify-center xs:hidden sm:flex bg-[#f6f6f6] xs:rounded-lg sm:rounded-none sm:rounded-l-lg lg:rounded-none
                    lg:rounded-t-lg'>
                <img 
                    src={dev} 
                    alt={""} 
                    className="lg:w-full lg:h-full xs:h-[180px] xs:w-[180px] sm:h-[240px] sm:w-[240px] xs:rounded-lg sm:rounded-none sm:rounded-l-lg lg:rounded-none
                    lg:rounded-t-lg"
                />
            </div>
            <div className='w-full h-fit xs:h-[180px] sm:min-h-[240px] bg-blue-300 p-4 xs:rounded-lg sm:rounded-none sm:rounded-r-lg lg:rounded-none
                            lg:rounded-b-lg shadow-md shadow-my-blue/70 xs:flex xs:flex-col xs:items-center xs:justify-center'
                >
                <h1 className='text-white text-xl font-extrabold whitespace-new-line xs:w-fit lg:w-[300px] lg:py-2'>
                    Who Am I?
                </h1>
                <p className='text-white xs:text-xs lg:text-sm font-bold whitespace-new-line xs:w-fit lg:w-[300px] p-2'> 
                    I'm William Kennedy, a skilled full-stack developer passionate about creating innovative solutions. 
                    Proficient in AWS, React, and backend development.
                    With a strong track record and a B.A.Sc in Computer Engineering, I'm ready to make a difference in software development. 
                    Let's build something amazing together!
                </p>
            </div>
        </motion.div>
    )
}

export default AboutMe