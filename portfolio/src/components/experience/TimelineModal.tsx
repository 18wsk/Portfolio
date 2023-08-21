import { useState } from 'react'
import TimeLineButton from './TimelineButton'
import { motion } from 'framer-motion'

const TimelineModal = ({
    img,
    title,
    location,
    date,
    description,
    }:{
        img: any,
        title: string,
        location: string,
        date: string,
        description: string,
    }
    ) => {
        const [bounce, setBounce] = useState(false);
    return (
        <div className="w-full h-full">  
            <img 
                src={img} 
                alt={img} 
                className={`${bounce && "animate-bounce duration-75"} shadow-xl absolute flex items-center justify-center w-12 h-12 bg-blue-200 rounded-full -left-6 ring-2 ring-my-blue dark:bg-my-blue`}
            />
            <motion.div 
                className="ml-4 rounded-lg border-2 border-my-blue p-2 shadow-xl"
                initial={{ opacity: 0, size: 0 }}
                animate={{ opacity: 1, size: 1 }}
                transition={{ duration: 0.05 }}
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setBounce(true)}
                onMouseLeave={() => setBounce(false)}
            >
                <h3 className="text-md font-semibold text-gray-900">{title}</h3>
                <p className="block mb-2 text-xs leading-none text-gray-500 font-bold">{location}</p>
                <time className="block mb-2 text-xs font-normal leading-none text-gray-500">{date}</time>
                <p className="xs:hidden sm:flex text-sm font-normal text-gray-400 whitespace-pre-line py-2">
                    {description}
                </p>
                <TimeLineButton 
                    title={title}
                    description={description}
                />
            </motion.div>
            
        </div>
    )
}

export default TimelineModal