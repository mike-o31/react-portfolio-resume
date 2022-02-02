import React from 'react';
import './Projects.css';
import { projects } from '../../constants/constants';

const Projects = () => {
	return (
		<section id='projects'>
			<h2 className='project-section-title'>Projects</h2>
			<section className='projects-container'>
				{projects.map(({ id, image, title, tags, visit }) => (
					<div key={id}>
						<div className='blog-card' key={id}>
							<img src={image} className='img' />
							<div className='title-content'>
								<h3 className='project-title'>{title}</h3>
								<hr className='hr' />
							</div>
							<div>
								<div className='stack'>Stack</div>
								<ul className='tag-list'>
									{tags.map((tag, index) => (
										<li className='tag' key={index}>
											{tag}
										</li>
									))}
								</ul>
							</div>
							<ul className='utility-list'>
								<a href={visit} className='launch-link' target='_blank'>
									Launch
								</a>
							</ul>
						</div>
					</div>
				))}
			</section>
		</section>
	);
};

export default Projects;
