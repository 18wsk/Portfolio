import React from 'react'

const PageSection = ({ children }: any) => {
    return (
        <div className='w-screen h-screen snap-center pt-20 px-4'>
            {children}
        </div>
    )
}

export default PageSection;