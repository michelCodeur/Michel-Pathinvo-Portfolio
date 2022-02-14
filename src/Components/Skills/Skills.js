import React from 'react';
import styles from './Skills.module.css';

function Skills(props) {
    return (
			<>
				<div className={styles.title}>
					<h2> Skills </h2>
				</div>
				<div className={styles.background}>
					<ul className={styles.language}>
							<li>Python</li>
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>CSS</li>
							<li>HTML</li>
							<li>Node.JS</li>
						
					</ul>
					<ul className={styles.database}>
						
							<li>SQL</li>
							<li>PostgreSQL</li>
							<li>MongoDB</li>
							<li>Django</li>
						
					</ul>
					<ul className={styles.framework}>
						<li>Front-End Deployment</li>
						<li>Back-End Deployment</li>
						<li>React</li>
						<li>Express.JS</li>
					</ul>
					<ul className={styles.network}>
						<li>Computer Networking</li>
						<li>Cybersecurity</li>
						<li>Computer Hardware</li>
					</ul>
				</div>
			</>
		);
}

export default Skills;