
import clsx from 'clsx';
import { motion } from 'framer-motion';
import  {useEffect, useState} from 'react'
import { AiOutlineInfoCircle, AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const ProjectBadge = ({
    img,
    title,
    websitelink,
    githubLink,
    phone,
    message,
    tools,
    tag,
    openModal, 
    setOpenModal,
    setModalProps
}:{
    img: any,
    title: string,
    websitelink?: string,
    githubLink: string,
    phone?: boolean,
    message: string,
    tools: string [],
    tag: string,
    openModal: boolean, 
    setOpenModal: (val: boolean) => void,
    setModalProps: (val: {title: string, tag: string, message: string, tools: string[]}) => void;
}
) => {
    const destination = websitelink ? websitelink : "";
    const [open, setOpen] = useState<boolean>(false);

    const handleModalProps = () => {
        setModalProps({
            title,
            tag,
            message: message ,
            tools: tools
        });
        setOpenModal(!openModal);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setOpen(false);
            }
        };
        // Initial check when component mounts
        handleResize();
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };

      }, [setOpenModal]); // Empty dependency array to run the effect only on mount/unmount

    return (
            <motion.div 
                className='w-full h-full p-4 flex flex-row lg:flex-col items-center justify-center gap-x-4'
                whileHover={{ scale: 1.1 }}
            >
                <div
                    className={"xs:h-[120px] xs:w-[300px] sm:w-[400px] sm:h-[200px] lg:h-[280px] lg:w-[280px] xl:w-[400px] xl:h-[300px] flex items-center justify-center"}
                    >
                        {!open 
                            ? 
                            <motion.img 
                                src={img} 
                                alt={title}
                                className={clsx('w-full h-full object-contain',
                                    phone && "xs:h-full xs:w-full lg:w-[120px] lg:h-[240px] xl:h-[300px] "
                                )}
                                id={title}
                                initial={{ opacity: 0, size: 0 }}
                                animate={{ opacity: 1, size: 1 }}
                                transition={{ duration: 1.5 }}
                            />
                                    
                                :
                                <motion.div
                                    initial={{ opacity: 0, size: 0 }}
                                    animate={{ opacity: 1, size: 1 }}
                                    transition={{ duration: 1.5 }}
                                    className={ `xs:h-full xs:w-[300px] sm:w-[400px] sm:h-[220px] lg:h-[280px] lg:w-[280px] xl:w-[400px] xl:h-[300px]
                                            bg-my-blue text-white rounded-lg p-1 flex items-center justify-center`}
                                >
                                    <div className="h-full w-full p-1">
                                        <div className="w-full h-full flex flex-col items-center justify-center">
                                            <p className="text-xl font-extrabold uppercase text-start w-full pb-[7px]">
                                                {title} 
                                            </p>
                                            <p className="text-xs uppercase text-start w-full pb-[8px]">
                                                {tag} 
                                            </p>
                                            <p className='text-sm font-lato flex items-center justify-center'>
                                                {message}
                                            </p>
                                            <div className="w-full h-full flex items-center">
                                                <div className={`w-full h-fit grid grid-cols-4 gap-x-1 gap-y-1 grid-rows-[${tools.length % 6}] `}>
                                                    {tools.map((tool: string) => {
                                                        return (
                                                            <div
                                                                key={tool} 
                                                                className="w-full rounded-lg bg-blue-300 flex items-center justify-center p-[1px] 
                                                                            lg:h-[32px] xs:h-fit"
                                                            >
                                                                <p className="text-2xs font-lato text-center">
                                                                    {tool}
                                                                </p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                        }
                </div>
                <div className={`w-full xs:h-[100px] lg:h-[100px] flex flex-col lg:flex-row lg:flex-cols-2 items-center justify-center gap-x-4 gap-y-4 max-w-[400px] 
                    xs:justify-end`
                }>
                    <div className="w-full h-full flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 gap-x-4 items-center justify-center">
                        { websitelink 
                            && 
                            <motion.button 
                                className='w-[32px] h-[32px] flex items-center justify-center '
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                disabled={true}
                                onClick={() =>{ window.location.href = destination  }}
                            >
                                <Link to={destination} target="_blank" >
                                    <AiOutlineLink className='w-[32px] h-[32px] fill-my-blue hover:fill-white hover:bg-my-blue rounded-lg'/>
                                </Link>
                            </motion.button>
                        }
                        <motion.button  
                            className='w-[32px] h-[32px] flex items-center justify-center rounded-lg'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            >
                            <Link to={githubLink} target="_blank">
                                <FiGithub className='w-[30px] h-[30px] text-my-blue fill-white hover:bg-my-blue rounded-lg'/>
                            </Link>
                        </motion.button>
                        <motion.button 
                            className='xs:hidden sm:flex w-[100px] h-[32px] border-my-blue border-2 rounded-lg hover:bg-my-blue items-center justify-center'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setOpen(!open)}
                        >
                            <p className='text-my-blue hover:text-white text-sm w-full h-fit text-center'>LEARN MORE</p>
                        </motion.button>
                        <motion.button  
                            className='w-[32px] h-[32px] flex items-center justify-center rounded-lg'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleModalProps()}
                            >
                            <AiOutlineInfoCircle className='xs:flex sm:hidden w-[30px] h-[30px]  fill-my-blue hover:bg-my-blue hover:fill-white rounded-lg'/>
                        </motion.button>
                    </div>
                </div>
            </motion.div>
    )}