import React, { useState, useEffect } from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import { motion } from "framer-motion"
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import javascript from '../assets/tech/javascript.png'
import typescript from '../assets/tech/typescript.png'
import reactjs from '../assets/tech/reactjs.png'
import tailwind from '../assets/tech/tailwind.png'
import nodejs from '../assets/tech/nodejs.png'
import mongodb from '../assets/tech/mongodb.png'
import threejs from '../assets/tech/threejs.svg'
import git from '../assets/tech/git.png'
import figma from '../assets/tech/figma.png'
import docker from '../assets/tech/docker.png'
import python from '../assets/tech/python.svg'
import gcp from '../assets/tech/gcp.svg'
import flutter from '../assets/tech/flutter.svg'

const technologies = [
	
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
		{
		name: "flutter",
		icon: flutter,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
	{
		name: "python",
		icon: python,
	},
	{
		name: "gcp",
		icon: gcp,
	},

];

const shorted_technologies = [
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "python",
		icon: python,
	},
	{
		name: "gcp",
		icon: gcp,
	}
];

const Tech = () => {
	const isMobile = window.matchMedia("(max-width: 500px)").matches;

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Technologies</p>
				<h2 className={styles.sectionHeadText}>Technologies.</h2><br />				
			</motion.div>
			<div className="flex flex-row flex-wrap justify-center gap-10">
				{
					(isMobile ? shorted_technologies : technologies).map((tech, index) => {
						return (
							<div className="w-28 h-28" key={index}>
								<BallCanvas tech={tech} icon={tech.icon} />
							</div>
						)
					})
				}
			</div>
		</>
	)
}

export default SectionWrapper(Tech, "technologies");
