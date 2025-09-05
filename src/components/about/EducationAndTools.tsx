
import { 
    SiDataverse, 
    SiAzuredevops,
    SiPowerapps,
} from "react-icons/si";
import { motion } from "framer-motion"
import { useState } from "react"

const EducationAndTools = () => {
    const [skillPressed, setSkillPressed] = useState<string>("");

    const EducationAndToolBadge = ({
        name,
        icon
    }:{
        name: string,
        icon: JSX.Element
    }) => {
        const [flip, setFlip] = useState(false);
        return (
            <motion.div 
                className='xs:w-max-[32px] xs:h-[32px] md:w-max-[64px] md:h-[64px] rounded-lg bg-my-blue flex flex-col items-center justify-center p-1 shadow-md shadow-black'
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                    setFlip(!flip)
                    setSkillPressed(name)
                }}
                
            >
                    {icon}
                    <p className='xs:hidden md:block text-xs text-white text-center w-full h-fit'>{name}</p>
            </motion.div>
        )}

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='w-full xs:h-[140px] md:h-[200px] bg-[#f6f6f6] rounded-lg shadow-lg shadow-black'
            >
            <div className='w-full h-fit bg-blue-300 px-4 py-2 rounded-t-lg flex flex-cols-2'>
                <h1 className='text-white xs:text-sm lg:text-xl font-extrabold whitespace-new-line w-full'>
                    Education & Certifications 
                </h1>
                <div className="w-full text-my-blue xs:text-sm lg:text-xs font-extrabold flex items-center justify-end">{skillPressed}</div>
            </div>
            <div className='w-full h-3/4 flex flex-col items-center justify-center p-2'>
                <div className='w-fit h-fit grid grid-cols-11 grid-rows-2 px-2 py-2 xs:gap-x-1 xs:gap-y-1 lg:gap-x-1 lg:gap-y-1'>
                    <EducationAndToolBadge name={"B.A.Sc Computer Engineering Queens University"} icon={<SiDataverse className='w-[32px] h-[32px] fill-white'/>}/>
                    <EducationAndToolBadge name={"PL-200 Certified"} icon={<SiAzuredevops className='w-[32px] h-[32px] fill-white'/>}/>
                    <EducationAndToolBadge name={"PL-300 Certified"} icon={<SiPowerapps className='w-[32px] h-[32px] fill-white'/>}/>
                    <EducationAndToolBadge name={"PL-900 Certified"} icon={<SiPowerapps className='w-[32px] h-[32px] fill-white'/>}/>
                </div>
            </div>
        </motion.div>
    )
}

export default EducationAndTools