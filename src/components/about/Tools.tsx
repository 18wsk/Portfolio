import { AiOutlineHtml5, AiFillApi, AiFillBug } from "react-icons/ai"
import { TiCss3 } from "react-icons/ti"
import { 
    BiLogoRedux, 
    BiLogoTailwindCss, 
    BiLogoAws, 
    BiLogoReact,
    BiLogoNodejs,
    BiLogoMongodb,
    BiInfinite
} from "react-icons/bi"
import { 
    SiDataverse, 
    SiAzuredevops,
    SiPowerapps,
    SiPowerautomate,
    SiPowerbi

} from "react-icons/si";
import { FaPeopleCarry, FaRegObjectUngroup } from "react-icons/fa"
import { BsDatabaseAdd, BsPhoneFill, BsCodeSlash, BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"
import { useState } from "react"

const Tools = () => {
    const [skillPressed, setSkillPressed] = useState<string>("");

    const ToolBadge = ({
        name,
        icon
    }:{
        name: string,
        icon: JSX.Element
    }) => {
        const [flip, setFlip] = useState(false);
        return (
            <motion.div 
                className='xs:w-[32px] xs:h-[32px] md:w-[64px] md:h-[64px] rounded-lg bg-my-blue flex flex-col items-center justify-center p-1 shadow-md shadow-black'
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                    setFlip(!flip)
                    setSkillPressed(name)
                }}
                onHoverStart={() => setSkillPressed(name)}
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
            <div className='w-full h-fit bg-blue-300 px-4 py-1 rounded-t-lg flex flex-cols-2'>
                <h1 className='text-white xs:text-sm lg:text-xl font-extrabold whitespace-new-line w-full'>
                    Tools 
                </h1>
                <div className="w-full text-my-blue xs:text-sm lg:text-xs font-extrabold flex items-center justify-end">{skillPressed}</div>
            </div>
            <div className='w-full h-3/4 flex flex-col items-center justify-center p-2'>
                <div className='w-fit h-fit grid grid-cols-11 grid-rows-2 px-2 py-2 xs:gap-x-1 xs:gap-y-1 lg:gap-x-1 lg:gap-y-1'>
                    <ToolBadge name={"Dataverse"} icon={<SiDataverse className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Azure Services"} icon={<SiAzuredevops className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"PowerApps"} icon={<SiPowerapps className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Power Automate"} icon={<SiPowerautomate className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"PowerBI"} icon={<SiPowerbi className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"React"} icon={<BiLogoReact className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"NodeJS"} icon={<BiLogoNodejs className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"HTML"} icon={<AiOutlineHtml5 className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"CSS"} icon={<TiCss3 className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Redux"} icon={<BiLogoRedux className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Tailwind"} icon={<BiLogoTailwindCss className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"REST"} icon={<AiFillApi className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"SQL"} icon={<BsDatabaseAdd className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"MongoDB"} icon={<BiLogoMongodb className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"AWS"} icon={<BiLogoAws className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"OOP"} icon={<FaRegObjectUngroup className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Responsive Design"} icon={<BsPhoneFill className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Data and Algorithms"} icon={<BsCodeSlash className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Testing"} icon={<AiFillBug className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Agile"} icon={<FaPeopleCarry className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"CI/CD"} icon={<BiInfinite className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"GitHub"} icon={<BsGithub className='w-[32px] h-[32px] fill-white'/>}/>
                </div>
            </div>
        </motion.div>
    )
}

export default Tools