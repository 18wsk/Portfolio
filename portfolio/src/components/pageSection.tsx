import React from 'react'

const PageSection = ({ children }: any) => {
    return (
        <div className='w-screen h-screen min-w-[300px] max-h-[900px]'> 
            <div className='w-full h-full flex items-center'>
                {children}
            </div>
        </div>
    )
}

export default PageSection;