import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Socials = () => {
    const x = require("../../assets/x.png");
    return (
        <div className="flex flex-row gap-x-6">
            <Link 
                to="https://github.com/18wsk" 
                target="_blank" 
                rel="noopener" 
                className='hover:bg-blue-300 bg-my-blue rounded-full shadow-md shadow-black w-[40px] h-[40px] 
                        flex flex-col items-center justify-center'>
                <FiGithub size={30} color={"#FFFFFF"} />
            </Link>
            <Link to="https://www.linkedin.com/in/william-kennedy-0a917319b/" target="_blank" rel="noopener" className='hover:bg-blue-300 bg-my-blue rounded-full shadow-md shadow-black w-[40px] h-[40px] flex flex-col items-center justify-center'>
                <AiOutlineLinkedin size={30} color={"#FFFFFF"} />
            </Link>
            {/* <Link to="https://twitter.com/notchillis" target="_blank" rel="noopener" className='hover:bg-blue-300 bg-my-blue rounded-full shadow-md shadow-black w-[40px] h-[40px] flex flex-col items-center justify-center'>
                <img src={x} alt={"x"} className='h-[30px] w-[30px] p-1' />
            </Link> */}
        </div>
    )
}

export default Socials