import { motion } from 'framer-motion';
import React from 'react'

const AboutMe = () => {
    const dev = require("../../assets/dev.png");

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='xs:w-full lg:w-[320px] h-fit flex xs:flex-cols-2 lg:flex-col lg:items-start lg:justify-start xs:items-center xs:justify-center 
                        rounded-lg shadow-lg shadow-black'
        >
            <div className='w-full h-full flex-col items-center justify-center xs:hidden sm:flex bg-[#f6f6f6] xs:rounded-lg sm:rounded-none sm:rounded-l-lg lg:rounded-none
                    lg:rounded-t-lg'>
                <img 
                    src={dev} 
                    alt={""} 
                    className="lg:w-full lg:h-full xs:h-[180px] xs:w-[180px] sm:h-[200px] sm:w-[200px] xs:rounded-lg sm:rounded-none sm:rounded-l-lg lg:rounded-none
                    lg:rounded-t-lg"
                />
            </div>
            <div className='w-full h-fit xs:h-[180px] sm:min-h-[200px] bg-blue-300 p-4 xs:rounded-lg sm:rounded-none sm:rounded-r-lg lg:rounded-none
                            lg:rounded-b-lg shadow-md shadow-my-blue/70 xs:flex xs:flex-col xs:items-center xs:justify-center'
                >
                <h1 className='text-white text-md font-extrabold whitespace-new-line xs:w-fit lg:w-[300px] xs:pt-2 lg:py-2'>
                    Who Am I?
                </h1>
                <p className='text-white text-xs font-bold whitespace-new-line xs:w-fit lg:w-[300px] p-2'> 
                    I am a proficient full-stack developer with a fervor for crafting innovative solutions. Skilled in cloud-based web and 
                    backend development, backed by a strong track record and holding a BASc in Computer Engineering from Queen's University. 
                    I'm ready to convert my passion for full-stack development into a career.
                </p>
            </div>
        </motion.div>
    )
}

export default AboutMe