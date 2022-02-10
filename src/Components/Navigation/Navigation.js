import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation(props) {
	return (
		<div className={styles.navigation}>
			<div>
				<Link to='/hello' className={styles.homelink}>
					<i class='fa fa-home'></i> Home
				</Link>
			</div>
			<Link to='/aboutme' className={styles.aboutmelink}>
				<span> About Me </span>
			</Link>
			<Link to='/skills' className={styles.skillslink}>
				<span> Skills </span>
			</Link>
			<Link to='/projects' className={styles.projectslink}>
				<span> Projects </span>
			</Link>
			<Link to='/resume' className={styles.resumelink}>
				<span> Resume </span>
			</Link>
			<Link to='/contactme' className={styles.contactmelink}>
				<span> Contact Me </span>
			</Link>
		</div>
	);
}

export default Navigation;
