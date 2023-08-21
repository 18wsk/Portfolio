import { useEffect, useState } from 'react'
import NavBar from 'src/components/navbar/navBar';
import PageSection from 'src/components/pageSection';
import { Triangle } from 'react-loader-spinner';
import MobileNavBar from 'src/components/navbar/mobileNavBar';
import AboutMeSection from 'src/pages/about';
import LandingSection from 'src/pages/landing';
import ProjectSection from './projects';
import ExperienceSection from './experience';
import ContactSection from './contact';

const LandingPage = () => {
    const [active, setActive] = useState<string>("home");

    const [loaded, setLoaded] = useState<boolean>(false);

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
                <NavBar setActive={setActive} active={active}/>
            </div>
            <div className='sm:hidden xs:block'>
                <MobileNavBar setActive={setActive} active={active}/>
            </div>
            <PageSection>
                <LandingSection/>
            </PageSection>
            <PageSection>
                <AboutMeSection/>
            </PageSection>
            <PageSection>
                <ProjectSection/>
            </PageSection>
            <PageSection>
                <ExperienceSection/>
            </PageSection>
            <PageSection>
                <ContactSection/>
            </PageSection>
        </div>
    )
}

export default LandingPage;