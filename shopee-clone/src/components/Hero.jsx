import React from 'react';
import { heroCarouselImages } from '../data/data';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper';

const Hero = () => {
	return (
		<>
			<div className="container mx-auto mt-7 grid grid-rows-3 grid-flow-col gap-2">
				<div className="bg-red-700 row-span-4 col-span-2 h-56 ">
					<Swiper
						spaceBetween={5}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination, Autoplay]}
						className="mySwiper"
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
					>
						{heroCarouselImages.map((item) => {
							return (
								<SwiperSlide key={item.id}>
									<img src={item.name} alt={item.name} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div className="bg-red-700 col-span-1 h-28">02</div>
				<div className="bg-red-700 col-span-1 h-28">03</div>
			</div>
		</>
	);
};

export default Hero;
