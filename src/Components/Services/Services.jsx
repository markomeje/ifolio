import React from 'react'
import './Services.css'
import HeartEmoji from '../../images/heartemoji.png'
import Glasses from '../../images/glasses.png'
import Humble from '../../images/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'

const Services = () => {
	return (
		<div className="services" id='Services'>
			<div className="awesome">
				<span>My Awesome</span>
				<span>Services</span>
				<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, <br />voluptatibus ad totam adipisci perspiciatis perferendis</span>
				<a href={Resume} download>
						<button className='button s-button'>Download Cv</button>
				</a>
				<div className="blur s-blur" style={{ background: '#ABFIFF94' }}></div>
			</div>
			<div className="cards">
				<div style={{left: '14rem'}}>
						<Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Photoshop, Adobe, AdobeXD, Sketch'} />
				</div>
				<div style={{left: '14rem', top: '19rem'}}>
						<Card emoji={Humble} heading={'UI\UX'} detail={'Coluptatibus ad totam adipisci perspiciatis perferendis'} />
				</div>
				<div style={{left: '-4rem', top: '12rem'}}>
						<Card emoji={Glasses} heading={'Developer'} detail={'Html, CSS, Javascript, React'} />
				</div>
				<div className='blur s-blur2' style={{ background: 'var(--purple)' }}></div>
			</div>
		</div>
	)
}

export default Services
