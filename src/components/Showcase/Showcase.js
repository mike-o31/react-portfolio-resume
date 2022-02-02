import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFileEarmarkTextFill } from 'react-icons/bs';
import './Showcase.css';

const Showcase = () => {
	return (
		<section className='showcase-section'>
			<div className='left-section'>
				<h2 className='showcase-section-title'>Hey there, I'm Mike!</h2>
				<p className='showcase-section-text'>A self-taught web developer.</p>
				<div className='links'>
					<a
						href='https://github.com/mike-o31'
						className='link'
						target='_blank'>
						<button className='link-button'>
							<FaGithub className='icons' />
							GitHub
						</button>
					</a>
					<a
						href='https://www.linkedin.com/in/michael-ogonowski-a81495220/'
						className='link'
						target='_blank'>
						<button className='link-button'>
							<FaLinkedin className='icons' />
							LinkedIn
						</button>
					</a>
					<a href='resume.pdf' className='link' target='_blank'>
						<button className='link-button'>
							<BsFileEarmarkTextFill className='icons' />
							Resume
						</button>
					</a>
				</div>
			</div>
			<div className='right-section'>
				<img
					src='/project-images/portfolio-pic.jpg'
					className='screenshot-img'
				/>
			</div>
		</section>
	);
};

export default Showcase;
