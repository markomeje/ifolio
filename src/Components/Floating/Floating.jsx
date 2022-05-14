import React from 'react'
import './Floating.css'

const Floating = ({ image, textone, texttwo }) => {
	return (
		<div className="floating">
				<img src={image} alt="" />
				<span>
						{textone}
						<br />
						{texttwo}
				</span>
		</div>
	)
}

export default Floating