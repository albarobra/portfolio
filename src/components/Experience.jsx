/* eslint-disable react/prop-types */
import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import nodejs from '../assets/tech/nodejs.png'
import reactjs from '../assets/tech/reactjs.png'
import git from '../assets/tech/git.png'
import python from '../assets/tech/python.svg'
import typescript from '../assets/tech/typescript.png'
import javascript from '../assets/tech/javascript.png'

const experiences = [
	{
		title: "Intern Software Engineer",
		company_name: "ICIEOS Pvt Ltd.",
		icon: nodejs,
		iconBg: "#E6DEDD",
		date: "March 2025 - Current",
		points: [
			"06 months of internship as a software engineer developing next.js based web applications"
		]
	},
	{
		title: "Undergraduate",
		company_name: "University of Indonesia Telkom",
		icon: reactjs,
		iconBg: "#383E56",
		date: "October 2021 - Current",
		points: [
			"Undergraduate in Information and Communication Technology honours degree"
		],
	},
	{
		title: "Open Source Contributor",
		company_name: "GitHub",
		icon: git,
		iconBg: "#383E56",
		date: "August 2021 - Current",
		points: [
			"60+ open source projects contributed",
			"130 stargazers earned",
			"2500+ contributions"
		],
	},
	{
		title: "Trainee",
		company_name: "Bank of Ceylon",
		icon: python,
		iconBg: "#383E56",
		date: "February 2021 - August 2021",
		points: [
			"06 months of training"
		],
	},
	{
		title: "Student",
		company_name: "Udabalawala College of Kurunegala",
		icon: typescript,
		iconBg: "#383E56",
		date: "June 2018 - December 2020",
		points: [
			"Passed G.C.E. Advanced Level Examination"
		],
	},
	{
		title: "Student",
		company_name: "Pimburuwellegama College of Kurunegala",
		icon: javascript,
		iconBg: "#383E56",
		date: "January 2005 - December 2017",
		points: [
			"Passed G.C.E. Ordinary Level Examination"
		],
	},
];

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1D1836", color: "#FFFFFF" }}
			contentArrowStyle={{ borderRight: "7px solid #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className='flex justify-center items-center w-full h-full'>
					<img src={experience.icon} alt={ experience.company_name } className='w-[60%] h-[60%] object-contain' />
				</div>
			}
		>
			<div>
				<h3 className='text-white text-[24px]'>{experience.title}</h3>
				<p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{ experience.company_name }</p>
			</div>

			<ul className='mt-5 list-disc ml-5 space-y-2'>
				{
					experience.points.map((point, index) => (
						<li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
							{point}
						</li>
					))
				}
			</ul>
		</VerticalTimelineElement>
	)
}

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Milestones</p>
				<h2 className={styles.sectionHeadText}>Milestones.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col overflow-x-hidden">
				<VerticalTimeline>
					{
						experiences.map((experience, index) => (
							<ExperienceCard key={index} experience={ experience } />
						))
					}
				</VerticalTimeline>
			</div>
		</>
	)
}

export default SectionWrapper(Experience, 'milestones')