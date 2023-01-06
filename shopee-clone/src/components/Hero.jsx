import React from 'react';
import { heroCarouselImages } from '../data/data';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper';

import { ToastContainer, toast } from 'react-toastify';

const Hero = () => {
	const notify = () => toast('Wow so easy!');

	return (
		<>
			<div className="container mx-auto mt-7 grid grid-rows-3 grid-flow-col gap-2">
				<div className="bg-red-700 row-span-4 col-span-2 h-56 ">
					<button onClick={notify}>Notify!</button>
					<ToastContainer />
				</div>
				<div className="bg-red-700 col-span-1 h-28">02</div>
				<div className="bg-red-700 col-span-1 h-28">03</div>
			</div>
		</>
	);
};

export default Hero;
