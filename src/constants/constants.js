import { FaHtml5, FaCss3Alt, FaNode, FaBootstrap } from 'react-icons/fa';
import {
	SiJavascript,
	SiSocketdotio,
	SiMongodb,
	SiExpress,
} from 'react-icons/si';

export const projects = [
	{
		title: 'Memorable Quotes',
		image: '/project-images/quotes-app-screenshot.png',
		tags: [<FaHtml5 />, <FaCss3Alt />, <SiJavascript />],
		visit: 'https://mjo-quotes-app.herokuapp.com/',
		id: 0,
	},
	{
		title: 'Movie Database',
		image: '/project-images/movie-database-app-screenshot.png',
		tags: [
			<FaHtml5 />,
			<FaCss3Alt />,
			<SiJavascript />,
			<FaNode />,
			<SiExpress />,
		],
		visit: 'https://mjo-movie-database-app.herokuapp.com/',
		id: 1,
	},
	{
		title: 'Chat App',
		image: '/project-images/chat-app-screenshot.png',
		tags: [
			<FaHtml5 />,
			<FaCss3Alt />,
			<SiJavascript />,
			<FaNode />,
			<SiExpress />,
			<SiSocketdotio />,
			<SiMongodb />,
		],
		visit: 'https://mjo-chat-app.herokuapp.com/',
		id: 2,
	},
	{
		title: 'Portfolio Resume',
		image: '/project-images/portfolio-resume-screenshot.png',
		tags: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />],
		visit: 'http://www.michaelogonowski.com/',
		id: 3,
	},
];
