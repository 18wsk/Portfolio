import { motion } from 'framer-motion';
import { GiForestCamp } from 'react-icons/gi';
import { IoLogoGameControllerB } from 'react-icons/io';
import { MdFitnessCenter } from 'react-icons/md';

const AboutMeDesktop = () => {
    return (
        <>
            <motion.div
            whileInView={{ y: 0, x:0, opacity: 1 }}
            initial={{ y: 0, x: 400,  opacity: 0 }}
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
                <p className='xl:text-2xl lg:text-xl md:text-md font-poppins h-2/3 flex items-center'>
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
                delay: 0.2,
            }}
            viewport={{ once: true }}
            className='w-full h-3/4'
        > 
            <div className='h-full overflow-auto scrollbar-hide rounded-xl bg-gray-50 shadow-xl w-full p-4'>
                <div className='w-full h-1/3 flex justify-center items-center'>
                    <IoLogoGameControllerB className='p-4 fill-my-blue h-full w-full max-w-[189.31px] max-h-[189.31px] drop-shadow-2xl bg-gray-50 rounded-full'/>
                </div>
                <p className='xl:text-2xl lg:text-xl md:text-md  font-poppins h-2/3 flex items-center'>
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
                delay: 0.25,
            }}
            viewport={{ once: true }}
            className='w-full h-3/4'
        > 
            <div className='h-full overflow-auto scrollbar-hide rounded-xl bg-gray-50 shadow-xl w-full p-4'>
                <div className='w-full h-1/3 flex justify-center items-center'>
                    <GiForestCamp className='p-4 fill-my-blue h-full w-full max-w-[189.31px] max-h-[189.31px] drop-shadow-2xl bg-gray-50 rounded-full'/>
                </div>
                <p className='xl:text-2xl lg:text-xl md:text-md  font-poppins h-2/3 flex items-center'>
                    Lastly, I enjoy camping, fishing and hiking. I love taking the opportunity to disconnect from technology to connect with nature.
                </p>
            </div>
            </motion.div>
        </>
    )
}

export default AboutMeDesktop