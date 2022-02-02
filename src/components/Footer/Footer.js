import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<p className='copyright'>
					Copyright &copy; 2022 Michael Ogonowski Portfolio
				</p>

				<a href='#' className='arrow'>
					<BsArrowUpCircle />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
