import { useState } from 'react';
import { ComputersCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import reactjs from '../assets/tech/reactjs.png';
import typescript from '../assets/tech/typescript.png';
import javascript from '../assets/tech/javascript.png';
import figma from '../assets/tech/figma.png';

const projects = [
	{
		"title": "Horizon – A Next.js-powered financial SaaS platform!",
		"desc": "Built with Next.js, Horizon enables users to connect multiple bank accounts, track real-time transactions, transfer funds securely, and manage their finances efficiently.",
		"href": "https://github.com/pinkhousedev/Horizon",
		"texture": "/computer/horizon.mp4",
		"logo": reactjs,
		"logoStyle": {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		"spotlight": "projects/lights/blue.png",
		"tags": ["FinTech", "SaaS", "Banking", "Transactions"],
		"techs_url": "https://skillicons.dev/icons?i=nextjs,ts,appwrite,tailwind"
	},
	{
		title: "Readme API - Show your top 10 collaborators",
		desc: "Developed a customizable API to generate contributor images for GitHub profile README files, showcasing the top 10 contributors in an engaging way.",
		href: 'https://github.com/pinkhousedev/My-Contributors',
		texture: '/computer/contributors.mp4',
		logo: typescript,
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/blue.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=md,nextjs,react,tailwind'
	},
	{
		title: "Power outage notification system",
		desc: "Developed a desktop application to provide timely notifications about scheduled power outages when the economic crisis time period in the Sri Lanka 2022, helping users prepare for electricity blackouts.",
		href: 'https://github.com/pinkhousedev/Power-Outage',
		texture: '/computer/power-cut.mp4',
		logo: javascript,
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/green.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=react,bootstrap,jquery'
	},
	{
		title: "iPhone 15 Pro 3D website clone",
		desc: "Recreated the iPhone 15 Pro 3D website from scratch, delivering an immersive and interactive user experience. Built using React and Three.js for advanced 3D animations and visual effects.",
		href: 'https://github.com/pinkhousedev/Apple',
		texture: '/computer/iphone.mp4',
		logo: 'https://skillicons.dev/icons?i=react',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/blue.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=js,threejs,tailwindcss'
	},
	{
		title: "Movie Land",
		desc: "Check out Movie Land, a dynamic movie-searching app I built using React. It lets you browse movies by title, fetches real-time data via APIs, and delivers a seamless user experience.",
		href: 'https://github.com/pinkhousedev/Movie-Land',
		texture: '/computer/movie-land.mp4',
		logo: 'https://skillicons.dev/icons?i=react',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/blue.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=css,postman'
	},
	{
		title: "Hutch mobile app redesign concept",
		desc: "Using Figma, I aimed to create a modern, user-friendly interface that enhances the overall experience while maintaining a clean and vibrant aesthetic.",
		href: 'https://www.figma.com/proto/qgyxGcCEGKqGGx03i0ZG3b/Hutch-Redesigned?node-id=1-3&t=t5yWMrudLZuSTrML-1',
		texture: '/computer/hutch-redesign.mp4',
		logo: figma,
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/pink.png',
		tags: [],
		techs_url: ''
	},
	{
		title: "Sri Lanka Flag Animation",
		desc: "a tribute to the vibrant spirit of Sri Lanka! Using only HTML5 and CSS3, this project brings the a flag to life with smooth, dynamic animations—no JavaScript or external libraries involved!",
		href: 'https://github.com/pinkhousedev/Flag-Animation',
		texture: '/computer/flag-animation.mp4',
		logo: 'https://skillicons.dev/icons?i=css',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/pink.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=html'
	},
	{
		title: "Netflix-UI project",
		desc: "I've cloned the Netflix landing page using HTML5 and CSS3. This project is a great example of creating modern web interfaces with a clean, visually appealing design.",
		href: 'https://github.com/pinkhousedev/Netflix-UI',
		texture: '/computer/netflix-ui.mp4',
		logo: 'https://skillicons.dev/icons?i=css',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/pink.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=html'
	},
	{
		title: "Audi-UI, a front-end project replicating the sleek landing page of the Audi Sri Lanka website!",
		desc: "Built using HTML5 and CSS3, this project showcases attention to design detail and responsive web development skills.It's a visually appealing and lightweight clone, perfect for exploring UI design techniques.",
		href: 'https://github.com/pinkhousedev/Audi-UI',
		texture: '/computer/audi-ui.mp4',
		logo: 'https://skillicons.dev/icons?i=css',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/blue.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=html'
	},
	{
		title: "Spotify-UI, my project inspired by the sleek and iconic Spotify web player interface!",
		desc: "Crafted entirely with HTML5 and CSS3, this project captures the essence of modern web design. While it's not yet responsive, it's a bold step towards mastering UI replication and front-end development.",
		href: 'https://github.com/pinkhousedev/Spotify-UI',
		texture: '/computer/spotify-ui.mp4',
		logo: 'https://skillicons.dev/icons?i=css',
		logoStyle: {
			backgroundColor: '#13202F',
			border: '0.2px solid #17293E',
			boxShadow: '0px 0px 60px 0px #2F6DB54D',
		},
		spotlight: 'projects/lights/green.png',
		tags: [],
		techs_url: 'https://skillicons.dev/icons?i=html'
	}
];

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const projectsCount = projects.length;
    const currentProject = projects[selectedProjectIndex];
    const isMobile = window.matchMedia("(max-width: 500px)").matches;

    const handleNavigation = (direction) => {
        if (direction === "previous") {
            setSelectedProjectIndex((prevIndex) => {
                return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1
            })
        } else {
            setSelectedProjectIndex((prevIndex) => {
                return prevIndex === projectsCount - 1 ? 0 : prevIndex + 1
            })
        }
    }

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Projects</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <section className="c-space my-5">
                <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                    <div className={`flex flex-col gap-5 justify-between relative sm:p-10 py-10 px-5 ${isMobile ? 'order-1' : 'order-2 lg:order-1'}  h-[562px]`}>
                        <div className='absolute top-0 right-0'>
                            <img src={currentProject.spotlight ? currentProject.spotlight : "projects/lights/spotlight2.png"} alt="spotlight" className='w-full h-96 max-h-[250px] object-cover rounded-xl' />
                        </div>

                        {
                            !isMobile && currentProject.logo && (
                                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                                    <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                                </div>
                            )
                        }
                        <div className="flex flex-col gap-5 text-white-600 my-5">
                            <p className='text-white font-semibold text-2xl animatedText line-clamp-2'>{currentProject.title}</p>

                            {
                                !isMobile && (
                                    <>
                                        <p className="animatedText">
                                            {currentProject.desc}
                                        </p>
                                        <p className="animatedText">
                                            {currentProject?.subdesc}
                                        </p>
                                    </>
                                )
                            }
                        </div>

                        <div className="flex items-center jsutify-between flex-wrap gap-5">
                            {
                                isMobile && currentProject.logo && (
                                    <img src={currentProject.logo} alt="logo" />
                                )
                            }
                            {
                                currentProject.techs_url  && <img src={currentProject.techs_url} alt="tech stack" />
                            }
                            <div className="flex items-center gap-3">
                                {currentProject.tags.map((tag, index) => {
                                    return (
                                        <div className="tech-logo" key={index}>
                                            <img src={tag.path} alt={tag.name} />
                                        </div>
                                    )
                                })}
                            </div>
                            <a href={currentProject.href} target='_blank' rel='noreferrer' className='flex items-center cursor-pointer text-white-600 gap-2'>
                                <p>Check the source</p>
                                <img src="/projects/arrow-up.png" alt="visit" className='w-3 h-3' />
                            </a>
                        </div>

                        <div className="flex justify-between items-center mt-7">
                            <button className="arrow-btn cursor-pointer" onClick={() => handleNavigation("previous")}>
                                <img src="/projects/left-arrow.png" alt="left-arrow" className='w-4 h-4' />
                            </button>
                            <button className="arrow-btn cursor-pointer" onClick={() => handleNavigation("next")}>
                                <img src="/projects/right-arrow.png" alt="right-arrow" className='w-4 h-4' />
                            </button>
                        </div>
                    </div>


                    <div className={`bg-primary rounded-lg h-96 md:h-full ${isMobile ? 'order-2' : 'order-1 lg:order-2'} flex`}>
                       <div className='w-full h-full pointer-events-none' />
                        <ComputersCanvas project={projects[selectedProjectIndex]} />
                    </div>
                </div >
            </section >
        </>
    )
}

export default SectionWrapper(Projects, 'projects')