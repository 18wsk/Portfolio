import React, { useRef } from 'react'

const NavBar = () => {
    const Logo =  require("../assets/logo.png");
    const active = useRef("home");
    const setActive = (id: string) => {
        active.current = id;
    }
    return (
        <div className='w-screen fixed h-20 bg-page-white flex flex-row bg-white z-50'>
            <div className='w-fit h-full lg:px-8 lg:flex lg:items-center md:hidden sm:hidden xs:hidden'>
                <img src={Logo} alt="logo"/>
            </div>
            <div className='w-full h-full flex lg:justify-end xs:justify-center'>
                <div className='lg:w-1/2 xs:w-full h-full grid grid-cols-5 gap-4 place-items-center'>
                    <a className={`lg:text-md md:text-sm sm:text-xs xs:text-xs w-full text-center hover:font-bold ${active.current === "home" && "decoration-my-blue underline underline-offset-4"}`} 
                        href="#home" 
                        onClick={()=> setActive("home")}>
                        Home
                    </a>
                    <a className={`lg:text-md md:text-sm sm:text-xs xs:text-xs w-full text-center hover:font-bold ${active.current === "about" && "decoration-my-blue underline underline-offset-4"}`} 
                        href="#about" 
                        onClick={()=> setActive("about")}>
                        About Me
                    </a>
                    <a className={`lg:text-md md:text-sm sm:text-xs xs:text-xs w-full text-center hover:font-bold ${active.current === "skills" && "decoration-my-blue underline underline-offset-4"}`} 
                        href="#skills" 
                        onClick={()=> setActive("skills")}>
                        Skils
                    </a>
                    <a className={`lg:text-md md:text-sm sm:text-xs xs:text-xs w-full text-center hover:font-bold ${active.current === "experience" && "decoration-my-blue underline underline-offset-4"}`} 
                        href="#experience" 
                        onClick={()=> setActive("experience")}>
                        Experience
                    </a>
                    <a className={`lg:text-md md:text-sm sm:text-xs xs:text-xs w-full text-center hover:font-bold  ${active.current === "contact" && "decoration-my-blue underline underline-offset-4"}`} 
                        href="#contact" 
                        onClick={()=> setActive("contact")}>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar