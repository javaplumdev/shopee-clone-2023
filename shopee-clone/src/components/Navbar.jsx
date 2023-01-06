import React from 'react';
import { BsFacebook, BsCart2 } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiHelpCircle, BiGlobe } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { GrCart } from 'react-icons/gr';
import {
	navCTA,
	navLinksLeft,
	navLinksRight,
	navCategories,
} from '../data/data';
import shopeelogo from '../images/shopeelogo.svg';

const Navbar = () => {
	return (
		<nav className=" navbar ">
			<div className="container mx-auto flex justify-between">
				<div>
					{navLinksLeft.map((item) => {
						return (
							<small>
								<a href="#" className="text-white mx-2" key={item.id}>
									{item.name}
								</a>
							</small>
						);
					})}
				</div>
				<div>
					{navLinksRight.map((item) => {
						return (
							<small>
								<a href="#" className="text-white mx-2" key={item.id}>
									{item.name}
								</a>
							</small>
						);
					})}
					{navCTA.map((item) => {
						return (
							<small>
								<a href="#" className="text-white mx-2 font-bold" key={item.id}>
									{item.name}
								</a>
							</small>
						);
					})}
				</div>
			</div>
			<div className="container mx-auto flex items-center justify-between mt-1">
				<img src={shopeelogo} alt="shopeelogo" className="logo flex-1 mr-3" />
				<div className="mx-4 w-3/4 mt-4">
					<div className="flex drop-shadow-md">
						<input
							type="text"
							name="search"
							id="search"
							className="text w-full "
							placeholder="Sign up and get 100% off on your first order"
						/>
						<div className="bg-white p-1 ">
							<button className="button px-5 py-2 rounded">
								<FiSearch className="icons" size={15} />
							</button>
						</div>
					</div>
					<div>
						{navCategories.map((item) => {
							return (
								<small key={item.id} className="mr-3 text-white">
									{item.name}
								</small>
							);
						})}
					</div>
				</div>
				<BsCart2 className="icons flex-1" />
			</div>
		</nav>
	);
};

export default Navbar;
