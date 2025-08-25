import React, { useState, useEffect } from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import { motion } from "framer-motion"
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

const technologies = [
	{
		name: "JavaScript",
		icon: "https://skillicons.dev/icons?i=javascript",
	},
	{
		name: "TypeScript",
		icon: "https://skillicons.dev/icons?i=typescript",
	},
	{
		name: "React JS",
		icon: "https://skillicons.dev/icons?i=react",
	},
	{
		name: "Tailwind CSS",
		icon: "https://skillicons.dev/icons?i=tailwind",
	},
	{
		name: "Node JS",
		icon: "https://skillicons.dev/icons?i=nodejs",
	},
	{
		name: "MongoDB",
		icon: "https://skillicons.dev/icons?i=mongodb",
	},
	{
		name: "Three JS",
		icon: "https://skillicons.dev/icons?i=threejs",
	},
	{
		name: "git",
		icon: "https://skillicons.dev/icons?i=git",
	},
	{
		name: "figma",
		icon: "https://skillicons.dev/icons?i=figma",
	},
	{
		name: "docker",
		icon: "https://skillicons.dev/icons?i=docker",
	},
	{
		name: "python",
		icon: "https://skillicons.dev/icons?i=python",
	},
	{
		name: "gcp",
		icon: "https://skillicons.dev/icons?i=gcp",
	}
];

const shorted_technologies = [
	{
		name: "Node JS",
		icon: "https://skillicons.dev/icons?i=nodejs",
	},
	{
		name: "MongoDB",
		icon: "https://skillicons.dev/icons?i=mongodb",
	},
	{
		name: "python",
		icon: "https://skillicons.dev/icons?i=python",
	},
	{
		name: "gcp",
		icon: "https://skillicons.dev/icons?i=gcp",
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
