import React from 'react';
import './About.css';

const About = () => {
	return (
		<section id='about-me' className='about-section'>
			<div className='about-container'>
				<h2 className='about-title'>About Me</h2>
				<p className='about-text'>
					Web development has become a welcome and engaging challenge that I
					needed in my life. As someone who is infinitely curious, it has
					allowed me to continually learn and improve my skills, as well as
					change the way I approach and solve complex problems. Growing up, I
					was always curious about how certain things worked and were built.
					Now, that curiosity has continued to expand into the world of tech.
				</p>
				<p className='about-text'>
					When I'm not coding and building projects, I enjoy going out and
					spending time with my friends and family, exercising, seeing live
					music, and reading! In the summer time, I enjoy kayaking/tubing on the
					Delaware river with all my friends.
				</p>
			</div>
		</section>
	);
};

export default About;
