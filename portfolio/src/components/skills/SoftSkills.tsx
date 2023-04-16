import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const SoftSkills = () => {
    
    const BarStat = ({ name, val }: { name: string; val: number }) => {
        const [progress, setProgress] = useState(0);
        useEffect(() => {
            let intervalId: any;
            if (progress < val) {
                intervalId = setInterval(() => {
                    setProgress((prevProgress) => {
                        if (prevProgress < val) {
                            return prevProgress + 1;
                        } else {
                        clearInterval(intervalId);
                            return prevProgress;
                        }
                    });
                }, 10);
            }
            return () => clearInterval(intervalId);
        }, [progress, val]);
        
        return (
            <div className='lg:py-4 xs:pb-2'>
                <h1 className="xs:text-sm lg:text-xl font-poppins text-left">{name}</h1>
                <div className="w-full bg-gray-200 rounded-full">
                    <div
                        className="bg-my-blue text-xs font-medium text-blue-100 text-center md:p-2 lg:p-4 leading-none rounded-full"
                        style={{ width: `${progress.toString()}%` }}
                    >
                        {val}%
                    </div>
                </div>
            </div>
        );
    };

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
        className='w-full flex justify-center items-start'
    >
        <div className='w-full flex flex-col items-start'>
            <div className='w-full'>
                <p className='font-poppins font-bold lg:text-[2rem] xs:text-lg text-center lg:pb-4'>Soft Skills</p>
                <BarStat name="Communication" val={90}/>
                <BarStat name="Adaptability" val={80}/>
                <BarStat name="Teamwork" val={75}/>
                <BarStat name="Problem-Solving" val={70}/>
                <BarStat name="Leadership" val={70}/>
            </div>
        </div>
    </motion.div>
    )
}

export default SoftSkills