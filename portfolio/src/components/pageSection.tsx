import React from 'react'

const PageSection = ({ children }: any) => {
    return (
        <div className='w-screen h-screen snap-center pt-[100px] px-4 sm:pb-10 xs:pb-20'>
            <div className='w-full h-full flex items-center'>
                {children}
            </div>
        </div>
    )
}

export default PageSection;