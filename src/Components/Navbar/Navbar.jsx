import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
	return (
		<div className="navbar-wrapper">
			<div className="navbar-left">
				<div className="navbar-name">Mark</div>
				<Toggle />
			</div>
			<div className="navbar-right">
				<div className="navbar-list">
					<ul style={{ listStyleType: 'none'}}>
						<Link sty={true} to='Navbar' smooth={true} activeClass='activeClass'>
							<li>Home</li>
						</Link>
						<Link sty={true} to='Services' smooth={true}>
							<li>Services</li>
						</Link>
						<Link sty={true} to='Experience' smooth={true}>
							<li>Experience</li>
						</Link>
						<Link sty={true} to='Portfolio' smooth={true}>
							<li>Portfolio</li>
						</Link>
						<Link sty={true} to='Testimonials' smooth={true}>
							<li>Testimonials</li>
						</Link>
					</ul>
				</div>
				<button className="button navbar-button">Contact</button>
			</div>
		</div>
	)
}

export default Navbar