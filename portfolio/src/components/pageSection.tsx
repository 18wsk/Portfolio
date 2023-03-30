import React from 'react'

const PageSection = ({ children }: any) => {
    return (
        <div className='w-screen h-screen bg-white p-4 snap-center pt-24'>
            {children}
        </div>
    )
}

export default PageSection;