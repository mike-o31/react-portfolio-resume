import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<nav className='nav-container'>
			<div className='top-left'>
				<a
					href='/'
					style={{
						display: 'flex',
						alignItems: 'center',
						marginBottom: '20px',
					}}>
					<span id='span' className='nav-links'>
						Michael Ogonowski
					</span>
				</a>
			</div>
			<div className='menu-icon' onClick={() => setIsClicked(!isClicked)}>
				{isClicked ? <FaTimes /> : <FaBars />}
			</div>
			<div className={isClicked ? 'top-right active' : 'top-right'}>
				<li>
					<a href='#about-me' className='nav-links'>
						About Me
					</a>
				</li>
				<li>
					<a href='#projects' className='nav-links'>
						Projects
					</a>
				</li>
				<li>
					<a href='#contact' className='nav-links'>
						Contact Info
					</a>
				</li>
			</div>
		</nav>
	);
};

export default Navbar;
