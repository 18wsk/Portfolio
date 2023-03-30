import React from 'react'

const NavBar = () => {
    return (
        <div className='w-screen fixed h-20 bg-grey-200 shadow-xl'>
            <div className='w-full h-full flex justify-center items-center px-12'>
                <p className='text-2xl font-bold w-full text-center'>About Me</p>
                <p className='text-2xl font-bold w-full text-center'>Skils</p>
                <p className='text-2xl font-bold w-full text-center'>Experience</p>
                <p className='text-2xl font-bold w-full text-center'>Contact</p>
            </div>
        </div>
    )
}

export default NavBar