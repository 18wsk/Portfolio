import React from 'react'

const PageSection = ({ children }: any) => {
    return (
        <div className='w-screen h-screen snap-center pt-24 px-4'>
            {children}
        </div>
    )
}

export default PageSection;