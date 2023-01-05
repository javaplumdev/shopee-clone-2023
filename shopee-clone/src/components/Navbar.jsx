import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiHelpCircle, BiGlobe } from 'react-icons/bi';

const Navbar = () => {
	return (
		<div className="navbar ">
			<div className="container ">
				<div className="upper-section flex justify-between">
					<div>
						<ul className="flex">
							<li className="px-1">Seller Centre</li>
							<li>Sell on Shopee</li>
							<li>Download</li>
							<li>
								Follow us on <BsFacebook className="icons" />{' '}
								<AiFillInstagram className="icons" />
							</li>
						</ul>
					</div>
					<div>
						<ul className="flex">
							<li>
								<IoMdNotificationsOutline className="icons" /> Notifications
							</li>

							<li>
								<BiHelpCircle className="icons" />
								Help
							</li>
							<li>
								<BiGlobe className="icons" />
								English
							</li>
							<li>Sign Up</li>
							<li>Login</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
