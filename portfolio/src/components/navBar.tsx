import {  type FC } from "react";

const NavBar: FC<{ setActive: (id: string) => void; active: string;}> = (props) => {
    const Logo =  require("../assets/logo.png");
    

    return (
        <div className='w-screen fixed h-20 bg-page-white flex flex-row bg-transparent backdrop-blur-md z-50 lg:px-[2rem] xs:px-2 min-w-[300px] shadow-sm shadow-gray-200'>
            <div className='w-fit h-full lg:px-8 lg:flex lg:items-center md:hidden sm:hidden xs:hidden'>
                <img src={Logo} alt="logo"/>
            </div>
            <div className='w-full h-full flex lg:justify-end xs:justify-center'>
                <div className='lg:w-1/2 xs:w-full h-full grid grid-cols-5 gap-4 place-items-center'>
                    <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 rounded-md hover:font-extrabold`} 
                        href="#home" 
                        onClick={()=> props.setActive("home")}>
                        HOME
                    </a>
                    <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 rounded-md hover:font-extrabold `} 
                        href="#about" 
                        onClick={()=> props.setActive("about")}>
                        ABOUT ME
                    </a>
                    <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 rounded-md hover:font-extrabold`} 
                        href="#skills" 
                        onClick={()=> props.setActive("skills")}>
                        SKILLS
                    </a>
                    <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 rounded-md hover:font-extrabold`} 
                        href="#experience" 
                        onClick={()=> props.setActive("experience")}>
                        EXPERIENCE
                    </a>
                    <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 rounded-md hover:font-extrabold`}  
                        href="#contact" 
                        onClick={()=> props.setActive("contact")}>
                        CONTACT
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar