import React from 'react'
import TimelineModal from './TimelineModal'

const Timeline = () => {
    const rio = require('src/assets/rio.png');
    const cg = require('src/assets/cg.jpg');
    const eng = require('src/assets/eng.jpg');
    const tc = require('src/assets/Transport-Canada.jpg');

    return (
        <div className="w-full h-full flex items-center justify-center" >
            <ol className="relative border-l border-blue-300 h-full flex flex-col justify-between">
            <li className="mb-4 ml-6 ">
                    <TimelineModal
                        img={tc}
                        title="IT Technician, Aircraft Services Portfolio" 
                        date="March, 2024" 
                        location={"Transport Canada - (Hybrid) Toronto, ON"} 
                        description={
                            `Collaborating with multiple technical teams to deliver reports and comprehensive applications that enhance operational efficiency 
                            for the Aircraft Service Directorate and key clients, including the Canadian Coast Guard, Department of National Defence, and Civil 
                            Aviation.`
                        }
                    />
                    
                </li>
                <li className="mb-4 ml-6 ">
                    <TimelineModal
                        img={eng}
                        title="Graduated " 
                        date="April, 2023 " 
                        location={"Queen's University - Kingston, ON"} 
                        description={
                            `I graduated from Queen's University with a Bachelor's of Applied Science in Computer Engineering. `
                        }
                    />
                    
                </li>
                <li className="mb-4 ml-6 ">
                    <TimelineModal
                        img={cg}
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
                        img={rio}
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
                <li className="mb-4 ml-6 ">
                    <TimelineModal
                        img={eng}
                        title="Enrolled in school for Engineering" 
                        date="Sept, 2018" 
                        location={"Queen's University"} 
                        description={
                            `Started off in a general first year engineering program, but quickly realized that I wanted to specialize in software development.`
                        }
                    />
                </li>
                <li className="mb-4 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-my-blue rounded-full bottom-0 -left-3 ring-4 dark:bg-my-blue">
                    </span>
                    <p className='text-white'></p>
                </li>
            </ol>
        </div>
    )
}

export default Timeline