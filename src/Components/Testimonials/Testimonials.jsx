import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../images/profile1.jpg'
import profilePic2 from '../../images/profile2.jpg'
import profilePic3 from '../../images/profile3.jpg'
import profilePic4 from '../../images/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () => {
	const clients = [
		{
			image: profilePic1,
			review: 'Top-end financial tools to help your business with its financial operations and cash flow. We help companies of all types work better, save time and money with a simply better banking service that works.'
		},
		{
			image: profilePic2,
			review: 'Top-end financial tools to help your business with its financial operations and cash flow. We help companies of all types work better, save time and money with a simply better banking service that works.'
		},
		{
			image: profilePic3,
			review: 'Top-end financial tools to help your business with its financial operations and cash flow. We help companies of all types work better, save time and money with a simply better banking service that works.'
		},
		{
			image: profilePic4,
			review: 'Top-end financial tools to help your business with its financial operations and cash flow. We help companies of all types work better, save time and money with a simply better banking service that works.'
		},
	];

  	return (
		<div className="t-wrapper">
			<div className="t-heading">
				<span>Clients always get </span>
				<span> Exceptional Work </span>
				<span>from Me . . .</span>
				<div className="blur t-blur1" style={{ background: "var(--purple)"}}></div>
				<div className="blur t-blur2" style={{ background: "skyblue"}}></div>
			</div>
			<Swiper module={[Pagination]} slidesPerView={1} pagination={{ clickable: true }}>
				{clients && clients.map((client, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="testimonial">
								<img src={client.image} alt={client.review} />
								<span>{client.review}</span>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
  	)
}

export default Testimonials;
