import { motion } from 'framer-motion'
import Banner from './Banner'

const HardSkills = () => {

    const js = require('../../assets/javascript.png');
    const html = require('../../assets/html.png');
    const css = require('../../assets/css.png');
    const aws = require('../../assets/aws.png');
    const api = require('../../assets/api.png');
    const python = require('../../assets/python.png');
    const react = require('../../assets/react.png');
    const github = require('../../assets/github.png');
    const jira = require('../../assets/jira.png');
    
    const items: any = [
        {img: react, name: "React", value: 80 }, 
        {img: js, name: "JavaScript", value: 78 }, 
        {img: html, name: "HTML", value: 85 } , 
        {img: css, name: "CSS (Tailwind)", value: 80 } , 
        {img: aws, name: "AWS (RDS/LAMBDA/DEPLOYMENTS)", value: 70 } , 
        {img: api, name: "RESTful API's", value: 80 } , 
        {img: github, name: "GitHub", value: 90 } , 
        {img: jira, name: "Jira/Agile Methods", value: 85 } , 
        {img: python, name: "Python", value: 80 } 
    ];

    
    return (
        <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{
                duration: 0.6,
                type: "spring",
                damping: 40,
            }}
            viewport={{ once: true }}
            className='w-full h-full flex items-center justify-center'
        >
            <div className='w-full h-full lg:p-10'>
                <div className='w-full flex items-center justify-center gap-x-4 xs:pb-1 lg:pb-4'>
                    <p className='font-poppins font-bold lg:text-[2rem] xs:text-lg text-center lg:pb-4'>Hard Skills</p>
                </div>
                <div className='w-full h-full flex items-top justify-center overflow-hidden'>
                    <Banner items={items}/>
                </div>
            </div>
        </motion.div>
    )
}

export default HardSkills