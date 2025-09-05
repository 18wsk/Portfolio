import { motion } from 'framer-motion'
import Tools from '../../components/about/Tools'
import Skills from '../../components/about/Skills'
import AboutMe from '../../components/about/AboutMe'
import EducationAndTools from '../../components/about/EducationAndTools'

const AboutMeSection = ({ 
    setHoverState
}: 
{
    setHoverState(hov: string): void
}) => {
    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
                duration: 0.6,
                type: "spring",
                damping: 40,
            }}
            viewport={{ once: true }}
            className='w-screen min-h-[800px] flex flex-col items-center justify-center sm:pt-[80px] px-4 bg-my-blue pb-2'
            onMouseEnter={() => setHoverState("about")}
            id='about'
        >
            <div className="w-full flex items-center justify-center">
                <div className="w-full py-2">
                    <h1 className='text-white font-lato font-bold lg:text-[4rem] xs:text-xl text-center pt-4'>
                        ABOUT
                    </h1>
                    <div className='w-full flex items-center justify-center pt-4 xs:pb-4 sm:pb-8'>
                        <div className='w-[32px] h-[4px] bg-black rounded-lg'></div>
                    </div>
                    {/* Mobile layout */}
                    <div className='flex flex-col items-center justify-around gap-y-4 w-full min-h-[700px] lg:hidden'>
                        <AboutMe/>
                        <Skills/>
                        <Tools/>
                        <EducationAndTools/>
                    </div>
                    {/* Desktop layout */}
                    <div className='hidden lg:flex w-full h-[540px] items-center justify-center gap-x-8'>
                        <div className='w-fit h-[500px] flex flex-col items-center justify-center gap-y-2 pb-8'>
                            <AboutMe/>
                        </div>
                        <div className='lg:w-3/4 xl:w-1/2 xl:min-w-[850px] h-full'>
                            <div className='w-full h-full flex flex-col items-start gap-y-1'>
                                <Skills/>
                                <Tools/>
                                <EducationAndTools/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMeSection