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
                className='hover:bg-blue-300 bg-my-blue rounded-full shadow-md shadow-black w-[60px] h-[60px] 
                        flex flex-col items-center justify-center'>
                <FiGithub size={45} color={"#FFFFFF"} />
            </Link>
            <Link 
                to="https://www.linkedin.com/in/william-kennedy-0a917319b/" 
                target="_blank" 
                rel="noopener" 
                className='hover:bg-blue-300 bg-my-blue rounded-full shadow-md shadow-black w-[60px] h-[60px] 
                        flex flex-col items-center justify-center'>
                <AiOutlineLinkedin size={45} color={"#FFFFFF"} />
            </Link>
        </div>
    )
}

export default Socials