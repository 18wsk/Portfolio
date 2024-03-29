import clsx from "clsx";

const NavBar = ( {setActive, active}:{
    setActive: (val: string) => void,
    active: string
}) => {

    const Logo =  require("../../assets/logo_nobg.png");

    return (
        <div 
            className='w-screen fixed h-20 bg-page-white flex flex-row bg-transparent backdrop-blur-md z-50 lg:px-[2rem] xs:px-2 min-w-[300px] shadow-sm 
                        shadow-gray-200'
                        >
        <div className='w-fit h-full lg:flex lg:items-center md:hidden sm:hidden xs:hidden'>
            <img src={Logo} alt="logo" title="Not Chillis"/>
        </div>
        <div className='w-full h-full flex lg:justify-end xs:justify-center'>
            <div className='lg:w-fit xs:w-full h-full grid grid-cols-5 gap-4 place-items-center'>
                <a className={clsx(
                    `text-blue-300 font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-blue-300 p-2 
                    rounded-md hover:font-extrabold `,
                )}
                    href="#home" 
                    onClick={()=> {setActive("home")}}>
                    HOME
                </a>
                <a className={clsx(`text-blue-300 font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-blue-300 p-2 
                                rounded-md hover:font-extrabold `,
                                )
                    } 
                    href="#about" 
                    onClick={()=> setActive("about")}>
                    ABOUT
                </a>
                <a className={clsx(`text-blue-300 font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-blue-300 p-2 
                                rounded-md hover:font-extrabold `,
                            )
                    } 
                    href="#projects" 
                    onClick={()=> setActive("projects")}>
                    PROJECTS
                </a>
                <a className={clsx(`text-blue-300 font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-blue-300 p-2 
                                rounded-md hover:font-extrabold `,
                            )
                    } 
                    href="#experience" 
                    onClick={()=> setActive("experience")}>
                    EXPERIENCE
                </a>
                <a className={clsx(`text-blue-300 font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-blue-300 p-2 
                                rounded-md hover:font-extrabold `,
                            )
                    } 
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