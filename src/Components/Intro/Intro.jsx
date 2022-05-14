import React from 'react'
import './Intro.css'
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'
import Instagram from '../../images/instagram.png'

import Vector1 from '../../images/Vector1.png'
import Vector2 from '../../images/Vector2.png'
import boy from '../../images/boy.png'

import thumbup from '../../images/thumbup.png'
import glassesimoji from '../../images/glassesimoji.png'
import Crown from '../../images/crown.png'
import Floating from '../Floating/Floating'

import {motion} from 'framer-motion'

const Intro = () => {
	const transition = {duration: 2, type: 'spring'}
	return (
		<div className="intro">
			<div className="intro-left">
				<div className="intro-name">
					<span>Hello, I Am</span>
					<span>Mark Omeje</span>
				</div>
				<div className="intro-title">I'm a fullstack developer with experiance in building websites and Mobile app restful Services</div>
				<button className="button intro-button">Hire Me</button>
				<div className="intro-icons">
					<img src={Github} alt="Github" />
					<img src={Instagram} alt="Instagram" />
					<img src={Linkedin} alt="Linkedin" />
				</div>
			</div>
			<div className="intro-right">
				<img src={Vector1} alt="Vector1" />
				<img src={Vector2} alt="Vector2" />
				<img src={boy} alt="boy" />
				<motion.img initial={{left: '-36%'}} whileInView={{left: '-24%'}} transition={transition} src={glassesimoji} alt="glassesimoji" />
				<motion.div initial={{top: '-4%', left: '74%'}} whileInView={{left: '68%'}} transition={transition} style={{ top: '-4%', left: '68%' }}>
					<Floating image={Crown} textone="Web"  texttwo="Developer" />
				</motion.div> 
				<div style={{ top: '18rem', left: '0rem' }}>
					<Floating image={thumbup} textone="Best Design" texttwo="Award" />
				</div>
				<div className="blur" style={{ background: "rgba(238, 210, 255)" }}></div>
			</div>
		</div>
	)
}

export default Intro