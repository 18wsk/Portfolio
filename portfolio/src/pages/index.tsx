import { motion } from 'framer-motion';
import { useState } from 'react'
import NavBar from 'src/components/navBar';
import PageSection from 'src/components/pageSection';
import { AiOutlineDownload } from 'react-icons/ai';
import Socials from 'src/components/landing/socials';
import { Tab } from '@headlessui/react';
import AboutMeMobile from 'src/components/about/aboutMe_mobile';
import AboutMeDesktop from 'src/components/about/aboutMe_desktop';
import HardSkills from 'src/components/skills/HardSkills';
import SoftSkills from 'src/components/skills/SoftSkills';
import Timeline from 'src/components/experience/Timeline';
import Contact from 'src/components/contact/contact';

const LandingPage = () => {
    const pfp =  require("../assets/will_pfp.jpg");
    const resume = require("../assets/William_Kennedy_Resume.pdf");
    const [active, setActive] = useState<string>("home");

    return (
        <div className='bg-white fixed w-screen h-screen overflow-scroll scrollbar-hide scroll-smooth md:scrollbar-default snap-mandatory snap-y'>
            <NavBar setActive={setActive} active={active}/>
            <PageSection>
                <div className='w-full h-full relative z-0 flex items-center justify-center' id="home" >
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
                            className='w-full h-full flex items-center justify-center relative'
                        >
                            <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4'>
                                <div className='w-full h-full grid grid-rows-4 gap-x-12'>
                                    <div className='row-span-3 lg:w-max xs:w-screen h-full grid place-items-center lg:grid-cols-2 lg:gap-x-12'>
                                        <div className='w-full h-full lg:pt-0 mx-auto'>
                                            <img src={pfp} alt="logo" className='mx-auto flex shrink rounded-full border-solid border-4 border-my-blue xs:h-50 xs:w-60 lg:w-[480px] lg:h-[480px]'/>
                                        </div>
                                        <div className='w-max h-max whitespace-pre-line'> 
                                            <h1 className='font-poppins lg:text-xl font-bold text-black pb-12 xs:hidden lg:block'>Hi, I'm</h1>
                                            <h1 className='font-poppins xs:pt-4 sm:pt-12 lg:pt-0 sm:text-5xl xs:text-3xl font-bold text-black underline decoration-my-blue'> William Kennedy</h1>
                                            <div className='flex flex-col items-center pt-4'>
                                                <div className='w-max'>
                                                    <h1 className="font-poppins animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-xl text-black font-bold">
                                                        Full Stack Developer
                                                    </h1>
                                                </div>
                                                <div className='w-max xs:h-20 sm:h-40 flex items-center justify-center'>
                                                    <a className='font-poppins w-max h-10 bg-my-blue text-white rounded-lg m-4 px-4 flex items-center justify-center gap-x-2 font-bold hover:bg-blue-600' target="_blank" href={resume} download={resume.name} rel="noreferrer">{<AiOutlineDownload/>} Resume</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full h-20 lg:pt-30'>
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
                <div className='w-full h-full relative z-0' id="about" >
                    <motion.div
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            damping: 40,
                        }}
                        viewport={{ once: true }}
                        className='w-full h-full items-center justify-center lg:pt-10 xs:pt-0 relative xs:hidden sm:hidden md:flex'
                    >
                        <div className='w-full h-full'>
                            <div className="w-full h-max xs:pt-4 lg:pt-0 justify-center ">
                                <h1 className='font-poppins font-bold lg:text-[4rem] xs:text-3xl text-center pb-4 decoration-my-blue underline underline-offset-8'>About me</h1>
                            </div>
                            <Tab.Group>
                                <Tab.List className="w-full h-max flex items-center justify-center space-x-4 lg:py-10 xs:py-4">
                                    <Tab key={0} className={({ selected }) => (`border-2 rounded-full md:text-lg xs:text-sm shadow-xl outline-none ${selected && "border-blue-700 bg-my-blue text-white"} hover:border-blue-700`)}>
                                        <h1 className='font-poppins text-center p-2'>Background</h1>
                                    </Tab>
                                    <Tab key={1} className={({ selected }) => (`border-2 rounded-full md:text-lg xs:text-sm shadow-xl outline-none ${selected && "border-blue-700 bg-my-blue text-white"} hover:border-blue-700`)}> 
                                        <h1 className='font-poppins text-center p-2'>Hobbies</h1>
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels className="h-full w-full flex">
                                    <Tab.Panel className='w-full h-full flex justify-center overflow-auto scrollbar-hide' key={0}>
                                        <motion.div
                                            whileInView={{ y: 0, x:0, opacity: 1 }}
                                            initial={{ y: 0, x: 400,  opacity: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                type: "spring",
                                                damping: 10,
                                            }}
                                            viewport={{ once: true }}
                                            className='lg:w-2/3 lg:h-max xs:w-3/4 xs:h-2/3 rounded-xl md:shadow-2xl xs:shadow-md font-poppins md:p-10 xs:p-4 bg-gray-50 md:text-2xl xs:text-md'
                                        > 
                                        <div className='w-full h-full overflow-auto scrollbar-hide'>
                                            Let me introduce myself, 
                                            <br/><br/>
                                            My name is William Kennedy, I am 22 years old from Kingston Ontario. I recently graduated from Queen's University
                                            where I recieved my bachelors degree in Computer Engineering. 
                                            Along with my education I have just under 2 years of professional experience working as a Full Stack developer at a startup based in Toronto, Ontario.
                                            <br/> <br/>
                                            I am currently looking for a full time position as a software developer!
                                        </div>
                                        </motion.div>
                                    </Tab.Panel>
                                    <Tab.Panel className='w-full h-3/4 grid grid-cols-3 gap-x-4 px-8' key={1}>
                                        <AboutMeDesktop/>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </motion.div>
                <AboutMeMobile/>
                </div>
            </PageSection>
            <PageSection>
                <div className='w-full h-full relative z-0' id="skills" >
                    <motion.div
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            damping: 40,
                        }}
                        viewport={{ once: true }}
                        className='w-full h-full items-center justify-center lg:pt-10 xs:pt-0 relative '
                    >
                        <div className='w-full h-full'>
                            <div className="w-full h-max xs:pt-4 lg:pt-0 xs:hidden lg:flex justify-center">
                                <h1 className='font-poppins font-bold lg:text-[4rem] xs:text-3xl text-center pb-4 decoration-my-blue underline underline-offset-8'>Skills</h1>
                            </div>
                            <div className='xs:hidden lg:grid w-full h-full grid grid-cols-2 gap-x-12 p-12'>
                                <SoftSkills/>
                                <HardSkills />
                            </div>
                            <div className='xs:grid lg:hidden w-full h-full grid-rows-2 p-4'>
                                <div className=''>
                                    <SoftSkills/>
                                </div>
                                <div className=''>
                                    <HardSkills />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </PageSection>
            <PageSection>
            <div className='w-full h-full relative z-0' id="experience" >
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
                        <div className='w-full h-full'>
                            <div className="w-full h-max xs:pt-4 lg:pt-0 justify-center ">
                                <h1 className='font-poppins font-bold lg:text-[4rem] xs:text-3xl text-center pb-4 decoration-my-blue underline underline-offset-8'>Experience</h1>
                            </div>
                            <Timeline/>
                        </div>
                    </motion.div>
                </div>
            </PageSection>
            <PageSection>
            <div className='w-full h-full relative z-0' id="contact" >
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
                        <div className='w-full h-full'>
                            <div className="w-full h-max xs:pt-4 lg:pt-0 justify-center ">
                                <h1 className='font-poppins font-bold lg:text-[4rem] xs:text-3xl text-center pb-4 decoration-my-blue underline underline-offset-8'>Contact</h1>
                            </div>
                            <Contact/>
                        </div>
                    </motion.div>
                </div>
            </PageSection>
        </div>
    )
}

export default LandingPage;