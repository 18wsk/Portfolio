import { motion } from 'framer-motion'
import React from 'react'
import Contact from 'src/components/contact/contact'
import { AiOutlineArrowUp } from 'react-icons/ai';

const ContactSection = ({ 
    setHoverState, 
}: 
{
    setHoverState(hov: string): void,
}) => {
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
            className='w-screen h-full flex flex-col items-center justify-center sm:pt-[80px] bg-white'
            id='contact'
            onMouseEnter={() => setHoverState("contact")}
        >
            <div className="w-full h-full flex flex-col items-center justify-start">
                <div className="w-full h-3/4 py-2 px-4"> 
                        <h1 className='text-my-blue font-lato font-bold lg:text-[4rem] xs:text-xl text-center xs:block block relative pt-4'>
                            CONTACT 
                        </h1>
                        <div className='w-full h-fit items-center justify-center xs:pb-4 sm:pb-8 flex pt-4'>
                            <div className='w-[32px] h-[4px] bg-black rounded-lg'>
                        </div>
                    </div>
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='w-full h-fit flex items-center justify-center '> 
                            <Contact/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactSection