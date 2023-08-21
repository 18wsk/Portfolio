import { useEffect, type FC } from "react";

const NavBar: FC<{ setActive: (id: string) => void; active: string;}> = (props) => {
    const Logo =  require("../../assets/logo.png");

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
        <div className='w-screen fixed h-20 bg-page-white flex flex-row bg-transparent backdrop-blur-md z-50 lg:px-[2rem] xs:px-2 min-w-[300px] shadow-sm shadow-gray-200'>
        <div className='w-fit h-full lg:flex lg:items-center md:hidden sm:hidden xs:hidden'>
            <img src={Logo} alt="logo"/>
        </div>
        <div className='w-full h-full flex lg:justify-end xs:justify-center'>
            <div className='lg:w-fit xs:w-full h-full grid grid-cols-5 gap-4 place-items-center'>
                <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 rounded-md hover:font-extrabold ${props.active === "home" && "font-extrabold shadow-sm shadow-my-blue"}`} 
                    href="#home" 
                    onClick={()=> props.setActive("home")}>
                    HOME
                </a>
                <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 rounded-md hover:font-extrabold ${props.active === "about" && "font-extrabold shadow-sm shadow-my-blue"}`} 
                    href="#about" 
                    onClick={()=> props.setActive("about")}>
                    ABOUT
                </a>
                <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 rounded-md hover:font-extrabold ${props.active === "projects" && "font-extrabold shadow-sm shadow-my-blue"}`} 
                    href="#projects" 
                    onClick={()=> props.setActive("projects")}>
                    PROJECTS
                </a>
                <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 rounded-md hover:font-extrabold ${props.active === "experience" && "font-extrabold shadow-sm shadow-my-blue"}`} 
                    href="#experience" 
                    onClick={()=> props.setActive("experience")}>
                    EXPERIENCE
                </a>
                <a className={`font-lato lg:text-md md:text-sm sm:text-xs xs:text-xs w-fit text-center font-bold hover:shadow-sm hover:shadow-my-blue p-2 rounded-md hover:font-extrabold ${props.active === "contact" && "font-extrabold shadow-sm shadow-my-blue"}`}  
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