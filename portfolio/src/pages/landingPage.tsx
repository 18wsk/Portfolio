import { motion } from 'framer-motion';
import { useState } from 'react'
import NavBar from 'src/components/navBar';
import PageSection from 'src/components/pageSection';
import { AiOutlineDownload } from 'react-icons/ai';
import Socials from 'src/components/socials';
import { Tab } from '@headlessui/react';
import { MdFitnessCenter } from 'react-icons/md';
import { GiForestCamp } from 'react-icons/gi';
import { IoLogoGameControllerB } from 'react-icons/io';

const LandingPage = () => {
    const pfp =  require("../assets/will_pfp.jpg");
    const resume = require("../assets/William_Kennedy_Resume.pdf");
    const [active, setActive] = useState<string>("home");

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                switch(entry.target.id) {
                case 'home':
                    setActive('home');
                    break;
                case 'about':
                    setActive('about');
                    break;
                case 'skills':
                    setActive('skills');
                    break;
                case 'experience':
                    setActive('experience');
                    break;
                case 'contact':
                    setActive('contact');
                    break;
                default:
                    break;
                }
            }
        });
    }, options);

    const observeIfNotNull = (element: HTMLElement | null) => {
        if (element !== null) {
            observer.observe(element);
        }
    };

    observeIfNotNull(document.getElementById('home'));
    observeIfNotNull(document.getElementById('about'));
    observeIfNotNull(document.getElementById('skills'));
    observeIfNotNull(document.getElementById('experience'));
    observeIfNotNull(document.getElementById('contact'));

    return (
        <div className='bg-white fixed w-screen h-screen overflow-scroll scrollbar-hide scroll-smooth md:scrollbar-default snap-mandatory snap-y'>
            <NavBar setActive={setActive} active={active}/>
            <PageSection>
                <div className='w-full h-full relative z-0' id="home" >
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
                                <div className='w-full h-full grid grid-rows-2 gap-x-12'>
                                    <div className='lg:w-max xs:w-screen h-full grid place-items-center lg:grid-cols-2 lg:gap-x-12 xs:gap-y-4 '>
                                        <div className='w-full h-full xs:pt-20 lg:pt-0 mx-auto'>
                                            <img src={pfp} alt="logo" className='mx-auto flex shrink rounded-full border-solid border-4 border-my-blue xs:h-50 xs:w-60 lg:w-[480px] lg:h-[480px]'/>
                                        </div>
                                        <div className='w-max h-max whitespace-pre-line'> 
                                            <h1 className='font-poppins lg:text-xl font-bold text-black pb-12 xs:hidden lg:block'>Hi, I'm</h1>
                                            <h1 className='font-poppins xs:pt-12 lg:pt-0 sm:text-5xl xs:text-3xl font-bold text-black underline decoration-my-blue'> William Kennedy</h1>
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
                                            exit={{ y: 0, x: -400,  opacity: 0 }}
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
                                    <Tab.Panel className='w-full h-3/4 grid grid-cols-3 gap-x-12 px-12' key={1}>
                                        <motion.div
                                            whileInView={{ y: 0, x:0, opacity: 1 }}
                                            initial={{ y: 0, x: 400,  opacity: 0 }}
                                            exit={{ y: 0, x: -400,  opacity: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                type: "spring",
                                                damping: 5,
                                            }}
                                            viewport={{ once: true }}
                                            className='w-full h-3/4'
                                        > 
                                            <div className='h-full overflow-auto scrollbar-hide rounded-xl bg-gray-50 shadow-xl w-full p-4'>
                                                <div className='w-full h-1/3 flex justify-center items-center'>
                                                    <MdFitnessCenter className='p-4 fill-my-blue h-full w-full max-w-[189.31px] max-h-[189.31px] drop-shadow-2xl bg-gray-50 rounded-full'/>
                                                </div>
                                                <p className='lg:text-2xl md:text-lg font-poppins h-2/3 flex items-center'>
                                                    When I'm not working, you can often find me hitting the gym, challenging myself with different workout routines, and striving to stay fit and healthy.
                                                </p>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            whileInView={{ y: 0, x:0, opacity: 1 }}
                                            initial={{ y: 0, x: 400,  opacity: 0 }}
                                            exit={{ y: 0, x: -400,  opacity: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                type: "spring",
                                                damping: 5,
                                                delay: 0.25,
                                            }}
                                            viewport={{ once: true }}
                                            className='w-full h-3/4'
                                        > 
                                            <div className='h-full overflow-auto scrollbar-hide rounded-xl bg-gray-50 shadow-xl w-full p-4'>
                                                <div className='w-full h-1/3 flex justify-center items-center'>
                                                    <IoLogoGameControllerB className='p-4 fill-my-blue h-full w-full max-w-[189.31px] max-h-[189.31px] drop-shadow-2xl bg-gray-50 rounded-full'/>
                                                </div>
                                                <p className='lg:text-2xl md:text-lg font-poppins h-2/3 flex items-center'>
                                                    I'm also an avid gamer who is obsessed with video games and loves exploring the latest technologies and platforms that enhance the gaming experience. 
                                                </p>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            whileInView={{ y: 0, x:0, opacity: 1 }}
                                            initial={{ y: 0, x: 400,  opacity: 0 }}
                                            exit={{ y: 0, x: -400,  opacity: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                type: "spring",
                                                damping: 5,
                                                delay: 0.5,
                                            }}
                                            viewport={{ once: true }}
                                            className='w-full h-3/4'
                                        > 
                                            <div className='h-full overflow-auto scrollbar-hide rounded-xl bg-gray-50 shadow-xl w-full p-4'>
                                                <div className='w-full h-1/3 flex justify-center items-center'>
                                                    <GiForestCamp className='p-4 fill-my-blue h-full w-full max-w-[189.31px] max-h-[189.31px] drop-shadow-2xl bg-gray-50 rounded-full'/>
                                                </div>
                                                <p className='lg:text-2xl md:text-lg font-poppins h-2/3 flex items-center'>
                                                    Lastly, I enjoy camping, fishing and hiking. I love taking the opportunity to disconnect from technology to connect with nature.
                                                </p>
                                            </div>
                                        </motion.div>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            damping: 40,
                        }}
                        viewport={{ once: true }}
                        className='w-full h-full items-center justify-center lg:pt-10 xs:pt-0 relative sm:flex xs:flex md:hidden'
                    >
                        <div className='w-3/4 h-full'>
                            <div className="w-full h-max xs:pt-4 lg:pt-0 justify-center ">
                                <h1 className='font-poppins font-bold lg:text-[4rem] xs:text-3xl text-center pb-4 decoration-my-blue underline underline-offset-8'>About me</h1>
                            </div>
                            <div className='w-full h-content font-poppins text-sm px-2 bg-gray-50 rounded-xl shadow-xl p-4 '>
                                Nice to meet you, 
                                <br/><br/>
                                I recently graduated from Queen's University
                                where I recieved my bachelors degree in Computer Engineering. 
                                Along with my education I have just under 2 years of professional experience working as a Full Stack developer at a startup based in Toronto, Ontario.
                                <br/> <br/>
                                I am currently looking for a full time position as a software developer!
                            </div>
                            <div className="w-full pt-10">
                                <div className='flex flex-row'> 
                                    <p className='font-bold font-popins text-xs'>Location: </p> <p className='font-poppins pl-2 text-xs'>Kingston, Ontario CA</p>
                                </div>
                                <div className='flex flex-row'> 
                                    <p className='font-bold font-popins text-xs'>Hobbies: </p> <p className='font-poppins pl-2 text-xs'>Video Games, Fitness, Camping</p>
                                </div>
                                <div className='flex flex-row'> 
                                    <p className='font-bold font-popins text-xs'>Availibility: </p> <p className='font-poppins pl-2 text-xs'>Open for work</p>
                                </div>
                                <div className='flex flex-row'> 
                                    <p className='font-bold font-popins text-xs'>Willing to relocate: </p> <p className='font-poppins pl-2 text-xs'>Yes</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </PageSection>
            <PageSection>
                <div className='w-full h-full relative z-0' id="skills" >
                    <p>Skills</p>
                </div>
            </PageSection>
            <PageSection>
                <div className='w-full h-full relative z-0' id="experience">
                    <p>Experience</p>
                </div>
            </PageSection>
            <PageSection>
                <div className='w-full h-full relative z-0' id="contact">
                    <p>Contact</p>
                </div>
            </PageSection>
        </div>
    )
}

export default LandingPage;