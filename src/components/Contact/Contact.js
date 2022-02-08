import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<section id='contact' className='contact-section'>
			<div className='contact-section-container'>
				<div className='contact-container'>
					<h2 className='contact-section-title'>Contact Info</h2>
					<ul className='list'>
						<li className='list-item'>
							<span className='item'>Email:</span> ogonowskimj@gmail.com
						</li>
						<li className='list-item'>
							<span className='item'>GitHub:</span> https://github.com/mike-o31
						</li>
						<li className='list-item'>
							<span className='item'>LinkedIn:</span>{' '}
							https://www.linkedin.com/in/michael-ogonowski/
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Contact;
