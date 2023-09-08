import { motion } from 'framer-motion';
import { BiLogoJavascript, BiLogoTypescript, BiLogoPython } from 'react-icons/bi';
import { BsLadder } from 'react-icons/bs';

const Skills = () => {

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='w-full xs:h-[180px] md:h-[260px] lg:h-[300px] bg-[#f6f6f6] rounded-lg shadow-md shadow-my-blue/70'>
            <div className='w-full h-fit bg-blue-300 px-4 py-2 rounded-t-lg'>
                <h1 className='text-white xs:text-sm lg:text-xl font-extrabold whitespace-new-line w-full'>
                    Skills
                </h1>
            </div>
            <div className='w-full h-fit flex flex-col px-4 py-4 xs:gap-y-4 md:gap-y-8 items-center justify-center'>
                <div className='w-full h-fit flex lg:gap-x-8'>
                    <p className='font-lato xs:text-xs xs:gap-x-2 lg:gap-x-8 md:text-sm font-bold w-[84px]'>JavaScript</p>
                    <div className='w-[85%] xs:h-[12px] md:h-[20px] rounded-lg bg-my-blue p-1'>
                        <div className='w-full h-full flex items-center justify-end gap-x-2'>
                            <BiLogoJavascript className='fill-white xs:h-[10px] md:w-[18px] md:h-[18px]'/>
                            <p className='font-lato text-white font-bold xs:text-xs md:text-sm'>95%</p>
                        </div>
                    </div>
                </div> 
                <div className='w-full h-fit flex lg:gap-x-8'>
                    <p className='font-lato xs:text-xs xs:gap-x-2 lg:gap-x-8 md:text-sm font-bold w-[84px]'>Typescript</p>
                    <div className='w-[80%] xs:h-[12px] md:h-[20px] rounded-lg bg-my-blue p-1'>
                        <div className='w-full h-full flex items-center justify-end gap-x-2'>
                            <BiLogoTypescript className='fill-white xs:h-[10px] md:w-[18px] md:h-[18px]'/>
                            <p className='font-lato text-white font-bold xs:text-xs md:text-sm'>90%</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit flex lg:gap-x-8'>
                    <p className='font-lato xs:text-xs xs:gap-x-2 lg:gap-x-8 md:text-sm font-bold w-[84px]'>Python</p>
                    <div className='w-[75%] xs:h-[12px] md:h-[20px] rounded-lg bg-my-blue p-1'>
                        <div className='w-full h-full flex items-center justify-end gap-x-2'>
                            <BiLogoPython className='fill-white xs:h-[10px] md:w-[18px] md:h-[18px]'/>
                            <p className='font-lato text-white font-bold xs:text-xs md:text-sm'>85%</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit flex lg:gap-x-8'>
                    <p className='font-lato xs:text-xs xs:gap-x-2  lg:gap-x-8 md:text-sm font-bold w-[84px]'>PLC </p>
                    <div className='w-[70%] xs:h-[12px] md:h-[20px] rounded-lg bg-my-blue p-1'>
                        <div className='w-full h-full flex items-center justify-end gap-x-2'>
                            <BsLadder className='fill-white xs:h-[10px] md:w-[18px] md:h-[18px]'/>
                            <p className='font-lato text-white font-bold xs:text-xs md:text-sm'>80%</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills