import React, { useState, useEffect } from 'react'
import { BallCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import { getTranslatedConstants } from '../constants/translatedConstants'
import { motion } from "framer-motion"
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { useLanguage } from '../contexts/LanguageContext'

const Tech = () => {
	const isMobile = window.matchMedia("(max-width: 500px)").matches;
	const { t } = useLanguage();
	const { technologies, shorted_technologies } = getTranslatedConstants(t);

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>{t('nav.technologies')}</p>
				<h2 className={styles.sectionHeadText}>{t('nav.technologies')}.</h2><br />				
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
