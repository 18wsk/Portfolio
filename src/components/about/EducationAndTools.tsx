
import { 
    SiDataverse, 
    SiAzuredevops,
    SiPowerapps,
} from "react-icons/si";
import { motion } from "framer-motion"
import { useState } from "react"

const EducationAndTools = () => {
    const [skillPressed, setSkillPressed] = useState<string>("");
    const pl_300_img = require('src/assets/pl_300_img.png');
    const pl_200_img = require('src/assets/pl_200_img.png');
    const pl_900_img = require('src/assets/pl_900_img.png');
    const queens_eng = require('src/assets/queens_eng.png');
    const EducationAndToolBadge = ({
        name,
        img,
        link
    }:{
        name: string,
        img: any,
        link: string
    }) => {
        const [flip, setFlip] = useState(false);
        return (
            <motion.div 
                className='xs:w-max-[64px] xs:h-[64px] md:w-max-[64px] md:h-[64px] rounded-lg flex flex-col items-center justify-center p-1'
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                    setFlip(!flip)
                    setSkillPressed(name)
                }}
                onHoverStart={() => setSkillPressed(name)}
            >
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img 
                        src={img} 
                        alt={name}
                        className={`shadow-xl flex items-center justify-center w-[64px] h-[64px] rounded-full -left-6 ring-2 ring-my-blue dark:bg-my-blue`}
                    />
                </a>
                <p className='xs:hidden text-xs text-white text-center w-full h-fit'>{name}</p>
            </motion.div>
        )}

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='w-full xs:h-[150px] md:h-[150px] bg-[#f6f6f6] rounded-lg shadow-lg shadow-black'
            >
            <div className='w-full h-fit bg-blue-300 px-4 py-1 rounded-t-lg flex flex-cols-2'>
                <h1 className='text-white xs:text-sm lg:text-xl font-extrabold whitespace-new-line w-full'>
                    Education & Certifications
                </h1>
                <div className="w-full text-my-blue xs:text-sm lg:text-xs font-extrabold flex items-center justify-end">{skillPressed}</div>
            </div>
            <div className='w-full h-fit flex flex-col items-center justify-center'>
                <div className='w-fit h-full grid grid-cols-4 grid-rows-1 px-2 py-2 xs:gap-x-1 xs:gap-y-1 lg:gap-x-1 lg:gap-y-1'>
                    <EducationAndToolBadge name={"B.A.Sc Computer Engineering Queens University"} img={queens_eng} link={"https://smithengineering.queensu.ca/ece/undergraduate/computer-engineering/index.html"} />
                    <EducationAndToolBadge name={"PL-200 Certified"} img={pl_200_img} link={"https://learn.microsoft.com/en-us/credentials/certifications/power-platform-functional-consultant-associate/?practice-assessment-type=certification"} />
                    <EducationAndToolBadge name={"PL-300 Certified"} img={pl_300_img} link={"https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/?practice-assessment-type=certification"} />
                    <EducationAndToolBadge name={"PL-900 Certified"} img={pl_900_img} link={"https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/?practice-assessment-type=certification"} />
                </div>
            </div>
        </motion.div>
    )
}

export default EducationAndTools