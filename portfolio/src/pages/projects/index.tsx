import { motion } from 'framer-motion';
import { ProjectBadge } from '../../components/projects/ProjectBadge'
import { Dialog } from '@headlessui/react';
import {  useState } from 'react';

const ProjectSection = ({ 
    setHoverState
}: 
{
    setHoverState(hov: string): void
}) => {
    const sadstoics = require('../../assets/sadstoics-laptop.jpeg');
    const swiftchat = require('../../assets/swiftchat-phone.jpg');
    const docQshare = require('../../assets/docQshare.png');

    const [openModal, setOpenModal] = useState<boolean>(false);
    const [modalProps, setModalProps] = useState<{title: string, tag: string, message: string, tools: string[]}>({
        title: "",
        tag: "",
        message: "",
        tools: []
    })

    const Modal = () => {
        return (
            <Dialog
                open={openModal}
                onClose={() => setOpenModal(false)}
                className="relative z-50"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                  {/* The actual dialog panel  */}
                    <Dialog.Panel className="mx-auto max-w-sm ">
                        <motion.div
                            initial={{ opacity: 0, size: 0 }}
                            animate={{ opacity: 1, size: 1 }}
                            transition={{ duration: .5 }}
                            className={ `xs:h-full xs:w-[300px] md:w-[400px] lg:h-[280px] lg:w-[280px] xl:w-[400px] xl:h-[300px]
                                    bg-my-blue text-white rounded-lg p-1 flex items-center justify-center`}
                        >
                            <div className="h-full w-full p-1">
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <p className="text-xl font-extrabold uppercase text-start w-full pb-[7px]">
                                        {modalProps.title} 
                                    </p>
                                    <p className="text-xs uppercase text-start w-full pb-[8px]">
                                        {modalProps.tag} 
                                    </p>
                                    <p className='text-sm font-lato flex items-center justify-center'>
                                        {modalProps.message}
                                    </p>
                                    <div className="w-full h-full flex items-center">
                                        <div className={`w-full h-fit grid grid-cols-4 gap-x-1 gap-y-1 grid-rows-[${modalProps.tools.length % 6}] `}>
                                            {modalProps.tools.map((tool: string) => {
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
                    </Dialog.Panel>
                </div>
            </Dialog>
        )
    };
    

    return (
        <motion.div
            whileInView={{opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
                duration: 0.6,
                type: "spring",
                damping: 40,
            }}
            viewport={{ once: true }}
            className='w-screen h-min-[800px] flex flex-col items-center justify-center sm:pt-[80px] px-4 bg-white pb-2'
            onMouseEnter={() => setHoverState("projects")}
            id="projects"
        >
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <Modal/>
                <div className="w-full h-fit py-2"> 
                    <h1 className='text-my-blue font-lato font-bold lg:text-[4rem] xs:text-xl text-center block relative pt-4'
                    >
                        PROJECTS 
                    </h1>
                    <div className='w-full h-fit items-center justify-center xs:pb-4 sm:pb-8 flex pt-4'>
                        <div className='w-[32px] h-[4px] bg-black rounded-lg'/>
                    </div>
                </div>
                <div className={'w-full h-full flex flex-col lg:flex-row lg:flex-cols-2 xs:items-center lg:items-center xs:justify-center gap-x-4 sm:p-4 '}>
                    <div className='w-full xs:h-full xs:pb-[80px] lg:h-3/4 flex flex-col lg:flex-row'>
                        <ProjectBadge 
                            img={sadstoics}
                            title={"sadstoics"} 
                            githubLink='https://github.com/18wsk/sadstoics'
                            message={"Unveiling a merchandise venture with a React-based website powered by JavaScript, TypeScript, Redux, and REST APIs."+ 
                            "Elevating user experiences through AWS integration and modern design aesthetics with Tailwind CSS."}
                            tag={"My newly established enterprise"}
                            tools={[
                                'React', 
                                'Redux', 
                                'AWS', 
                                'NodeJS', 
                                'ExpressJS', 
                                'MongoDB', 
                                'REST'
                            ]}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            setModalProps={setModalProps}
                        />
                        <ProjectBadge 
                            img={swiftchat} 
                            title={"swiftchat"} 
                            phone={true} websitelink="http://swiftchat.ca" 
                            githubLink='https://github.com/18wsk/DiscordClone'
                            message={"An instant messaging platform, employing web sockets and REST APIs for real-time communication. Seamlessly adapting to "+
                                    "various devices through responsive design, it ensures a consistent experience across screens. The application is "
                                    +"efficiently deployed on the web, enabling users to connect and converse effortlessly."}
                            tag={"Personal Project"}
                            tools={['Socket.io', 'Zustand', 'TS', 'Responsive', 'TailwindCSS', 'AWS EC2', 'Deployment']}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            setModalProps={setModalProps}
                        />
                        <ProjectBadge 
                            img={docQshare} 
                            title={"docQshare"} 
                            githubLink='https://github.com/ArshKochhar/DocQshare'
                            message={"Revolutionize document sharing with our blockchain-based platform. Guaranteed file integrity, verified transactions, and secure access through smart contracts redefine how documents are shared. Embrace the future of document sharing today."}
                            tag={"Queen's University Capstone Project"}
                            tools={['React', 'Redux', 'TypeScript', 'JavaScript', 'TailwindCSS', 'AWS RDS']}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            setModalProps={setModalProps}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectSection