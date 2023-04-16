import React from 'react'
import TimelineModal from './TimelineModal'

const Timeline = () => {
    return (
        <div className="md:w-1/2 h-3/4 absolute lg:top-40 left-1/4 -translate-x-0">
            <ol className="relative border-l border-gray-700">
                <li className="mb-4 ml-6">
                    <TimelineModal 
                        title="TBD" 
                        date="(Present)" 
                        location={""} 
                        description={
                            `I have recently graduated from Queen's University with a Bachelors of Engineering in Computer Engineering. 
                            I also have parted ways with CarbonGraph after a great almost 2 years. I am currently looking for a full time
                            position as a Full Stack developer!`
                        }
                    />
                </li>
                <li className="mb-4 ml-6">
                    <TimelineModal 
                        title="Full Stack Developer" 
                        date="Jan, 2022 - April, 2023" 
                        location={"CarbonGraph - (Remote) Toronto, ON"} 
                        description={
                            `During this internship I found my true calling as a Full Stack Developer. I was able to work on a variety of projects 
                            that were pivotal for the company to become Canada's top 50 most investible clean-tech start-ups!`
                        }
                    />
                </li>
                <li className="mb-4 ml-6">
                    <TimelineModal 
                        title="Automation Engineering Intern" 
                        date="May, 2020 - Aug, 2020" 
                        location={"Rio Tinto - Kitimat BC"} 
                        description={
                            `During this internship I gained a significant amount of professional experience. 
                            I was also granted the opportunity to take on a machine vision project that was used to automate 
                            the anode inspection process.`
                        }
                    />
                </li>                 
                <li className="mb-4 ml-6">
                    <TimelineModal 
                        title="Enrolled in school for Engineering" 
                        date="Sept, 2018" 
                        location={"Queen's University"} 
                        description={
                            `Started off in a general first year engineering program, but quickly realized that I wanted to specialize in software development.`
                        }
                    />
                </li>
            </ol>
        </div>
    )
}

export default Timeline