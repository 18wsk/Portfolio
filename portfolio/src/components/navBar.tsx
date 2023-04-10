import type { FC } from "react";

const NavBar: FC<{
    setActive: (id: string) => void;
    active: string;
    }> = (props) => {
    const Logo =  require("../assets/logo.png");
    return (
        <div className='w-screen fixed h-20 bg-page-white flex flex-row bg-white z-50'>
            <div className='w-fit h-full lg:px-8 lg:flex lg:items-center md:hidden sm:hidden xs:hidden'>
                <img src={Logo} alt="logo"/>
            </div>
            <div className='w-full h-full flex lg:justify-end xs:justify-center'>
                <div className='lg:w-1/2 xs:w-full h-full grid grid-cols-5 gap-4 place-items-center'>
                    <a className={`font-poppins lg:text-md md:text-sm sm:text-xs xs:text-xs w-full text-center hover:font-bold ${props.active === "home" && "decoration-black underline underline-offset-4 font-bold"}`} 
                        href="#home" 
                        onClick={()=> props.setActive("home")}>
                        Home
                    </a>
                    <a className={`font-poppins lg:text-md md:text-sm sm:text-xs xs:text-xs w-full text-center hover:font-bold ${props.active === "about" && "decoration-black underline underline-offset-4 font-bold"}`} 
                        href="#about" 
                        onClick={()=> props.setActive("about")}>
                        About Me
                    </a>
                    <a className={`font-poppins lg:text-md md:text-sm sm:text-xs xs:text-xs w-full text-center hover:font-bold ${props.active === "skills" && "decoration-black underline underline-offset-4 font-bold"}`} 
                        href="#skills" 
                        onClick={()=> props.setActive("skills")}>
                        Skils
                    </a>
                    <a className={`font-poppins lg:text-md md:text-sm sm:text-xs xs:text-xs w-full text-center hover:font-bold ${props.active === "experience" && "decoration-black underline underline-offset-4 font-bold"}`} 
                        href="#experience" 
                        onClick={()=> props.setActive("experience")}>
                        Experience
                    </a>
                    <a className={`font-poppins lg:text-md md:text-sm sm:text-xs xs:text-xs w-full text-center hover:font-bold  ${props.active === "contact" && "decoration-black underline underline-offset-4 font-bold"}`} 
                        href="#contact" 
                        onClick={()=> props.setActive("contact")}>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar