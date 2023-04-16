import React from 'react'
import TimeLineButton from './TimelineButton'

const TimelineModal = ({
    title,
    location,
    date,
    description,
    }:{
        title: string,
        location: string,
        date: string,
        description: string,
    }
    ) => {
    return (
        <>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-4 dark:bg-my-blue">
            </span>
            <h3 className="text-md font-semibold text-gray-900">{title}</h3>
            <p className="block mb-2 text-xs leading-none text-gray-500 font-bold">{location}</p>
            <time className="block mb-2 text-xs font-normal leading-none text-gray-500">{date}</time>
            <p className="xs:hidden sm:flex text-sm font-normal text-gray-400 whitespace-pre-line">
                {description}
            </p>
            <TimeLineButton 
                title={title}
                description={description}
            />
        </>
    )
}

export default TimelineModal