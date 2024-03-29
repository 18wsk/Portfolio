import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Socials from '../../components/landing/socials'
import { AiOutlineDownload } from 'react-icons/ai';

const LandingSection = (
    { 
        setHoverState
    }: 
    {
        setHoverState(hov: string): void
    }) => {
    const pfp =  require("../../assets/will_pfp.jpg");
    const resume = require("../../assets/William_Kennedy_Resume.pdf");

    const [text, setText] = useState("Full Stack Developer");

    useEffect(() => {
        const timer = setTimeout(() => { setText(text); }, 2000);
        return () => {
            clearTimeout(timer);
        }
    }, [text]);


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
            className='w-screen h-[800px] flex flex-col items-center justify-center sm:pt-[80px] px-4 '
            onMouseEnter={() => setHoverState("home")}
            id="home"
        >
            <div className='w-fit h-full grid grid-rows-3 gap-x-12'>
                <div className='xs:h-4/5 lg:h-full row-span-3 lg:w-max xs:w-screen  grid place-items-center lg:grid-cols-2 lg:gap-x-[32px]'>
                    <div className='w-full h-full flex items-center justify-center rounded-full drop-shadow-2xl'>
                        <img src={pfp} alt="logo" className='shadow-xl shadow-my-blue/20 mx-auto flex shrink rounded-full border-solid border-[0px] border-my-blue xs:h-50 xs:w-60 lg:w-[480px] lg:h-[480px]'/>
                    </div>
                    <div className='w-full xs:h-full lg:h-3/4 flex flex-col items-center justify-center whitespace-pre-line '>
                        <div className='w-[440px] h-fit xs:hidden lg:flex items-end justify-start'>
                            <h1 className='font-lato lg:text-2xl font-bold text-black pb-12 '>Hi, I'm</h1>
                        </div>
                        <h1 className='font-lato xs:pt-4 sm:pt-12 lg:pt-0 sm:text-6xl xs:text-3xl font-extrabold text-black underline decoration-my-blue'> William Kennedy</h1>
                        <div className='h-full w-full flex flex-col items-center justify-around '>
                            <div className='w-max'>
                                <h1 className="typing-text">
                                    {text}
                                </h1>
                            </div>
                            <div className='w-[160px] flex items-center justify-center '>
                                <a 
                                    className='w-full shadow-md shadow-black font-lato bg-my-blue text-white 
                                                rounded-lg py-2 px-4 flex items-center justify-center gap-x-4 font-bold 
                                                hover:bg-blue-200 hover:text-my-blue' 
                                    target="_blank" 
                                    href={resume} 
                                    download={resume.name} 
                                    rel="noreferrer"
                                >
                                    {<AiOutlineDownload className='w-[28px] h-[28px]'/>} RESUME
                                </a>
                            </div>
                            <Socials/>
                        </div>
                    </div>
                </div>
                {/* <div className='w-full h-[32px] flex items-start justify-center'>
                    <a className="animate-bounce w-[24px] h-[24px] bg-white border-[1px] border-my-blue rounded-full block mx-auto text-center" href="#about">
                        <AiOutlineArrowDown size={"22px"} className='text-my-blue hover:text-white hover:bg-my-blue rounded-full' onClick={() => setHoverState("")}/>
                    </a>
                </div> */}
            </div>
        </motion.div>
    )
}

export default LandingSection