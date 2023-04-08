import { motion } from 'framer-motion';
import React from 'react'
import NavBar from 'src/components/navBar';
import PageSection from 'src/components/pageSection';
import { AiOutlineDownload } from 'react-icons/ai';
import Socials from 'src/components/socials';

const LandingPage = () => {
    const pfp =  require("../assets/will_pfp.jpg")
    return (
        <div className='bg-white fixed w-screen h-screen overflow-scroll scrollbar-hide scroll-smooth md:scrollbar-default snap-mandatory snap-y'>
            <NavBar/>
            <PageSection>
                <div className='w-full h-full relative z-0' id="home">
                    <div className='w-full h-full'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.75 }}
                        >
                        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4'>
                            <div className='w-full h-full grid grid-rows-2 gap-x-12'>
                                <div className='w-max h-full grid lg:grid-cols-2 lg:gap-x-12 place-items-center'>
                                    <div className='w-max h-max xs:pt-20 lg:pt-0'>
                                        <img src={pfp} alt="logo" className='flex rounded-full border-solid border-4 border-my-blue xs:h-50 xs:w-60 lg:w-[480px] lg:h-[480px]'/>
                                    </div>
                                    <div className='w-max h-max whitespace-pre-line'> 
                                        <h1 className='lg:text-xl font-bold text-black pb-12 xs:hidden lg:block'>Hi, I'm</h1>
                                        <h1 className='xs:pt-12 lg:pt-0 sm:text-5xl xs:text-3xl font-bold font-serif text-black underline decoration-my-blue'> William Kennedy</h1>
                                        <div className='flex flex-col items-center pt-4'>
                                            <div className='w-max'>
                                                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-xl text-black font-bold">
                                                    Full Stack Developer
                                                </h1>
                                            </div>
                                            <div className='w-max xs:h-20 sm:h-40 flex items-center justify-center'>
                                                <button className='w-max h-10 bg-my-blue text-white rounded-lg m-4 px-4 flex items-center justify-center gap-x-2 font-bold hover:bg-blue-400'>{<AiOutlineDownload/>} Resume</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full h-20 lg:pt-40'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <Socials/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </motion.div>     
                    </div>
                </div>
            </PageSection>
            <PageSection>
                <div className='w-full h-full relative z-0' id="about">
                    <p>hello</p>
                </div>
            </PageSection>
        </div>
    )
}

export default LandingPage;