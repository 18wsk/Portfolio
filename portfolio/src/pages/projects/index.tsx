import { motion } from 'framer-motion';
import { ProjectBadge } from '../../components/projects/ProjectBadge'
import { Dialog } from '@headlessui/react';
import {  useState } from 'react';

const ProjectSection = () => {
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
        <div className='w-full h-full relative z-0 xs:pt-[32px] sm:pt-[80px] md:pt-[80px] lg:pt-[120px] ' id="projects" >
            <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                transition={{
                    duration: 0.6,
                    type: "spring",
                    damping: 40,
                }}
                viewport={{ once: true }}
                className='w-full h-full'
            >
                <div className='w-full h-full px-[2rem] flex flex-col items-center justify-between'>
                    <Modal/>
                    <div className='w-full h-fit'>
                        <h1 className='h-fit w-full text-my-blue font-lato font-bold lg:text-[4rem] xs:text-xl text-center xs:block sm:hidden lg:block'
                        >
                            PROJECTS 
                        </h1>
                        <div className='w-full h-fit items-center justify-center xs:pb-4 sm:pb-8 xs:flex sm:hidden lg:flex pt-4'>
                            <div className='w-[32px] h-[4px] bg-black rounded-lg'/>
                        </div>
                    </div>
                    <div className={'w-full h-full flex flex-col lg:flex-row lg:flex-cols-2 items-center justify-between gap-x-4 sm:p-4 '}>
                        <div className='w-full h-full flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 items-center justify-betwen'>
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
                                message={"An instant messaging platform, employing websockets and REST APIs for real-time communication. Seamlessly adapting to "+
                                        "various devices through responsive design, it ensures a consistent experience across screens. The application is"
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
        </div>
    )
}

export default ProjectSection