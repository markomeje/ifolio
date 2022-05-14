import React from 'react'
import './Works.css'
import Amazon from '../../images/amazon.png'
import Fiverr from '../../images/fiverr.png'
import Shopify from '../../images/Shopify.png'
import Upwork from '../../images/Upwork.png'
import Facebook from '../../images/Facebook.png'

const Works = () => {
	return (
			<div className='works'>
					<div className="awesome">
							<span>Works For All These</span>
							<span>Brands & Clients</span>
							<span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, <br />voluptatibus ad totam adipisci perspiciatis perferendis<br />voluptatibus ad totam adipisci perspiciatis perferendis</span>
							<button className='button s-button'>Hire Me</button>
							<div className="blur s-blur" style={{ background: '#ABFIFF94' }}></div>
					</div>
					<div className="w-right">
							<div className="w-maincircle">
									<div className="w-innercircle">
											<img src={Fiverr} alt='' />
									</div>
									<div className="w-innercircle">
											<img src={Facebook} alt='' />
									</div>
									<div className="w-innercircle">
											<img src={Amazon} alt='' />
									</div>
									<div className="w-innercircle">
											<img src={Upwork} alt='' />
									</div>
									<div className="w-innercircle">
											<img src={Shopify} alt='' />
									</div>
							</div>
							<div className="w-backcircle bluecircle"></div>
							<div className="w-backcircle yellowcircle"></div>
					</div>
			</div>
        )
}

export default Works
