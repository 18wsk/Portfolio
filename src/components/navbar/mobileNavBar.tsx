import { Menu, Transition } from '@headlessui/react'
import { FC, useEffect } from 'react'
import { AiOutlineLinkedin, AiOutlineMenu } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MobileNavBar : FC<{ setActive: (id: string) => void; active: string;}> = (props) => {

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    switch (entry.target.id) {
                        case "home":
                            props.setActive("home");
                            break;
                        case "about":
                            props.setActive("about");
                            break;
                        case "projects":
                            props.setActive("projects");
                            break;
                        case "experience":
                            props.setActive("experience");
                            break;
                        case "contact":
                            props.setActive("contact");
                            break;
                        default:
                            break;
                    }
                }
            });
        }, options);
    
        observer.observe(document.getElementById("home")!);
        observer.observe(document.getElementById("about")!);
        observer.observe(document.getElementById("projects")!);
        observer.observe(document.getElementById("experience")!);
        observer.observe(document.getElementById("contact")!);
    
        return () => {
            observer.disconnect();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.active]);

    return (
        <div className="w-screen fixed h-20 z-50 sitcky-top">
            <Menu >
                <Menu.Button className="absolute top-1/2 -translate-y-1/2 right-[1rem] z-100">
                    <AiOutlineMenu className='fill-blue-300 h-[20px] w-[20px]'/>
                </Menu.Button>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Menu.Items className="w-full h-screen z-10 bg-white absolute pt-[64px]">
                        <Menu.Item >
                            <a className={`font-lato text-lg w-full h-fit flex items-center justify-center text-center font-bold p-2 ${props.active === "home" && "font-extrabold decoration-my-blue underline underline-offset-2"}`} 
                                href="#home" 
                                onClick={()=> props.setActive("home")}>
                                HOME
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a className={`font-lato text-lg w-full h-fit flex items-center justify-center text-center font-bold p-2 ${props.active === "about" && "font-extrabold decoration-my-blue underline underline-offset-2"}`} 
                                href="#about" 
                                onClick={()=> props.setActive("about")}>
                                ABOUT ME
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a className={`font-lato text-lg w-full h-fit flex items-center justify-center text-center font-bold p-2 ${props.active === "PROJECTS" && "font-extrabold decoration-my-blue underline underline-offset-2"}`} 
                                href="#projects" 
                                onClick={()=> props.setActive("projects")}>
                                PROJECTS
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a className={`font-lato text-lg w-full h-fit flex items-center justify-center text-center font-bold p-2 ${props.active === "experience" && "font-extrabold decoration-my-blue underline underline-offset-2"}`} 
                                href="#experience" 
                                onClick={()=> props.setActive("experience")}>
                                EXPERIENCE
                            </a>
                        </Menu.Item>
                        <Menu.Item>
                            <a className={`font-lato text-lg w-full h-fit flex items-center justify-center text-center font-bold p-2 ${props.active === "contact" && "font-extrabold decoration-my-blue underline underline-offset-2"}`} 
                                href="#contact" 
                                onClick={()=> props.setActive("contact")}>
                                CONTACT
                            </a>
                        </Menu.Item>
                        <div>
                            <div className="w-full h-[46px] flex items-center justify-center"></div>
                        </div>
                        <Menu.Item>
                            <div className="w-full h-[46px] flex items-center justify-center">
                                <Link 
                                    to="https://github.com/18wsk" 
                                    target="_blank" 
                                    rel="noopener" 
                                    className=' bg-white rounded-full shadow-md shadow-my-blue/60 w-[40px] h-[40px] 
                                            flex flex-col items-center justify-center'>
                                    <FiGithub size={30} color={"#0f5199"} />
                                </Link>
                            </div>
                        </Menu.Item>
                        <Menu.Item>
                            <div className="w-full h-[46px] flex items-center justify-center">
                                <Link 
                                    to="https://www.linkedin.com/in/william-kennedy-0a917319b/" 
                                    target="_blank" rel="noopener" 
                                    className=' bg-white rounded-full shadow-md shadow-my-blue/60 w-[40px] h-[40px] flex flex-col items-center justify-center'>
                                    <AiOutlineLinkedin size={30} color={"#0f5199"} />
                                </Link>
                            </div>
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default MobileNavBar