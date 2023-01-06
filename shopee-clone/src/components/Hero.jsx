import React from 'react';

const Hero = () => {
	return (
		<div className="container mx-auto mt-7 grid grid-rows-3 grid-flow-col gap-2">
			<div class="bg-red-700 row-span-4 col-span-2 h-56">01</div>
			<div class="bg-red-700 col-span-1 h-28">02</div>
			<div class="bg-red-700 col-span-1 h-28">03</div>
		</div>
	);
};

export default Hero;
