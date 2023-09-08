import { AiOutlineHtml5, AiFillApi, AiFillBug } from "react-icons/ai"
import { TiCss3 } from "react-icons/ti"
import { 
    BiLogoRedux, 
    BiLogoTailwindCss, 
    BiLogoAws, 
    BiLogoReact,
    BiLogoNodejs,
    BiLogoMongodb
} from "react-icons/bi"
import { FaPeopleCarry } from "react-icons/fa"
import { BsDatabaseAdd, BsPhoneFill, BsCodeSlash, BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"

const Tools = () => {

    const ToolBadge = ({
        name,
        icon
    }:{
        name: string,
        icon: JSX.Element
    }) => {
        return (
            <motion.div 
                className='xs:w-[32px] xs:h-[32px] md:w-[64px] md:h-[64px] rounded-lg bg-my-blue flex flex-col items-center justify-center p-1'
                whileHover={{ scale: 1.2 }}
                
            >
                    {icon}
                    <p className='xs:hidden md:block text-xs text-white text-center w-full h-fit'>{name}</p>
            </motion.div>
        )}

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='w-full xs:h-[140px] md:h-[200px] bg-[#f6f6f6] rounded-lg shadow-md shadow-my-blue'
            >
            <div className='w-full h-fit bg-blue-300 px-4 py-2 rounded-t-lg'>
                <h1 className='text-white xs:text-sm lg:text-xl font-extrabold whitespace-new-line w-full'>
                    Tools
                </h1>
            </div>
            <div className='w-full h-3/4 flex flex-col items-center justify-center p-2'>
                <div className='w-fit h-fit grid grid-cols-8 grid-rows-2 px-2 py-2 xs:gap-x-1 xs:gap-y-1 lg:gap-x-1 lg:gap-y-1'>
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
                    <ToolBadge name={"OOP"} icon={<BsCodeSlash className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Responsive Design"} icon={<BsPhoneFill className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Data and Algorithms"} icon={<BsCodeSlash className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Testing"} icon={<AiFillBug className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"Agile"} icon={<FaPeopleCarry className='w-[32px] h-[32px] fill-white'/>}/>
                    <ToolBadge name={"GitHub"} icon={<BsGithub className='w-[32px] h-[32px] fill-white'/>}/>
                </div>
            </div>
        </motion.div>
    )
}

export default Tools