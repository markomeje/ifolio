import React from 'react'
import './Footer.css'
import Wave from '../../images/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  	return (
		<div className="footer">
			<img src={Wave} style={{width: '100%'}} alt="" />
			<div className="footer-content">
				<span>Markomejeonline@gmail.com</span>
				<div className="footer-icons">
					<Insta color='white' size='3rem' />
					<Facebook color='white' size='3rem' />
					<Github color='white' size='3rem' />
				</div>
			</div>
		</div>
  	)
}

export default Footer