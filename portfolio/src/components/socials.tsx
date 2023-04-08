import React from 'react'
import { BsGithub, BsLinkedin, BsTwitch, BsTwitter } from 'react-icons/bs'

const Socials = () => {
    return (
        <div className="flex flex-row gap-x-6">
            <BsGithub size={30} color={"#8AAAE5"}/>
            <BsLinkedin size={30} color={"#8AAAE5"}/>
            <BsTwitter size={30} color={"#8AAAE5"}/>
            <BsTwitch size={30} color={"#8AAAE5"}/>
        </div>
    )
}

export default Socials