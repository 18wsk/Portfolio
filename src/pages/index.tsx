import { useEffect, useState } from 'react'
import NavBar from 'src/components/navbar/navBar';
import { Triangle } from 'react-loader-spinner';
import MobileNavBar from 'src/components/navbar/mobileNavBar';
import AboutMeSection from 'src/pages/about';
import LandingSection from 'src/pages/landing';
import ProjectSection from './projects';
import ExperienceSection from './experience';
import ContactSection from './contact';

const LandingPage = () => {
    const [active, setActive] = useState<string>("");

    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        console.log(active);
    },  [active]);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoaded(true);
        }, 500);

        return () => clearTimeout(loadingTimeout);
    });

    if (!loaded) {

        return (
            <div className='w-screen h-screen bg-white flex items-center justify-center'>
                <Triangle
                    height="100"
                    width="100"
                    color="#0f5199"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    visible={true}
                />
            </div>
        )
    }
    

    return (
        <div className='bg-white fixed w-screen h-screen overflow-scroll scrollbar-hide scroll-smooth md:scrollbar-default snap-mandatory snap-y'>
            <div className='xs:hidden sm:block'>
                <NavBar setActive={setActive} active={active}  />
            </div>
            <div className='sm:hidden xs:block'>
                <MobileNavBar setActive={setActive} active={active}/>
            </div>
            <LandingSection setHoverState={setActive}/>
            <AboutMeSection setHoverState={setActive}/>
            <ProjectSection setHoverState={setActive}/>
            <ExperienceSection setHoverState={setActive}/>
            <ContactSection setHoverState={setActive} />
        </div>
    )
}

export default LandingPage;