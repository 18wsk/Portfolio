import clsx from "clsx";
import { FC, useState } from "react";

const NavBar: FC<{ setActive: (id: string) => void; active: string;}> = (props) => {
    const Logo =  require("../../assets/logo_nobg.png");
    const [hover, setHover] = useState<number>(0);

    const options = ["home", "about", "projects", "experience", "contact"];

    const setActive = (id: string) => {
        props.setActive(id);
        setHover(options.indexOf(id));
        console.log(id, options.indexOf(id))
    };

    return (
        <div 
            className='bg-white w-screen fixed h-20 bg-page-white flex flex-row bg-transparent backdrop-blur-xl z-50 lg:px-[2rem] xs:px-2 min-w-[300px] shadow-sm 
                        shadow-gray-200'
            
                        >
        <div className='w-fit h-full lg:flex lg:items-center md:hidden sm:hidden xs:hidden'>
            <img src={Logo} alt="logo"/>
        </div>
        <div className='w-full h-full flex lg:justify-end xs:justify-center'>
            <div className='lg:w-fit xs:w-full h-full grid grid-cols-5 gap-4 place-items-center'>
                <a className={clsx(
                    `font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 
                    rounded-md hover:font-extrabold `,
                    hover === 0 && "bg-white text-my-blue shadow-sm shadow-my-blue"
                )}
                    href="#home" 
                    onClick={()=> {setActive("home")}}>
                    HOME
                </a>
                <a className={clsx(`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 
                                rounded-md hover:font-extrabold `,
                                hover === 1 && "bg-white text-my-blue shadow-sm shadow-my-blue")
                    } 
                    href="#about" 
                    onClick={()=> setActive("about")}>
                    ABOUT
                </a>
                <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 
                                rounded-md hover:font-extrabold `} 
                    href="#projects" 
                    onClick={()=> setActive("projects")}>
                    PROJECTS
                </a>
                <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 
                                rounded-md hover:font-extrabold blue`} 
                    href="#experience" 
                    onClick={()=> setActive("experience")}>
                    EXPERIENCE
                </a>
                <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 
                                rounded-md hover:font-extrabold `}  
                    href="#contact" 
                    onClick={()=> setActive("contact")}>
                    CONTACT
                </a>
            </div>
        </div>
        </div>
    )
}

export default NavBar