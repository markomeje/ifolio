import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Ecommerce from '../../images/ecommerce.png'
import Hoc from '../../images/hoc.png'
import Musicapp from '../../images/musicapp.png'
import Sidebar from '../../images/sidebar.png'
import 'swiper/css'

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <span>Recent Projects</span>
            <span>Portfolio</span>
			<Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
				<SwiperSlide>
					<img src={Ecommerce} alt="Swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Sidebar} alt="Swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Hoc} alt="Swiper" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Musicapp} alt="Swiper" />
				</SwiperSlide>
			</Swiper>
        </div>
    )
}

export default Portfolio