import React from 'react'
import NavBar from 'src/components/navBar';
import PageSection from 'src/components/pageSection';

const LandingPage = () => {
    return (
        <div className='bg-page-bg fixed w-screen h-screen overflow-scroll scrollbar-hide scroll-smooth md:scrollbar-default snap-mandatory snap-y'>
            <NavBar />
            <PageSection>
                <div className='w-full h-1/2 bg-red-100'>

                </div>
            </PageSection>
            <PageSection>
                <p>hello</p>
            </PageSection>
        </div>
    )
}

export default LandingPage;