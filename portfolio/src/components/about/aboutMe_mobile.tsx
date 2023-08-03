import { motion } from 'framer-motion';

const AboutMeMobile = () => {
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
            className='w-full h-full items-center justify-center lg:pt-10 xs:pt-0 relative sm:flex xs:flex md:hidden'
            >
            <div className='w-3/4 h-full'>
                <div className="w-full h-max xs:pt-4 lg:pt-0 justify-center ">
                    <h1 className='font-lato font-bold lg:text-[4rem] xs:text-3xl text-center pb-4 decoration-my-blue underline underline-offset-8'>About me</h1>
                </div>
                <div className='w-full h-content font-lato text-sm px-2 bg-gray-50 rounded-xl shadow-xl p-4 '>
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
                        <p className='font-bold font-popins text-xs'>Location: </p> <p className='font-lato pl-2 text-xs'>Kingston, Ontario CA</p>
                    </div>
                    <div className='flex flex-row'> 
                        <p className='font-bold font-popins text-xs'>Hobbies: </p> <p className='font-lato pl-2 text-xs'>Video Games, Fitness, Camping</p>
                    </div>
                    <div className='flex flex-row'> 
                        <p className='font-bold font-popins text-xs'>Availibility: </p> <p className='font-lato pl-2 text-xs'>Open for work</p>
                    </div>
                    <div className='flex flex-row'> 
                        <p className='font-bold font-popins text-xs'>Willing to relocate: </p> <p className='font-lato pl-2 text-xs'>Yes</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMeMobile