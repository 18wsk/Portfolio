import React from 'react'

const PageSection = ({ children }: any) => {
    return (
        <div className='w-screen h-screen snap-center pt-[80px]  min-w-[300px]'>
            <div className='w-full h-full flex items-center'>
                {children}
            </div>
        </div>
    )
}

export default PageSection;