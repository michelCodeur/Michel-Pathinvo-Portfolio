import React from 'react';
import styles from './Projects.module.css';
import thewatson from '../../Assets/thewatson.jpg';
import holidaysworldwide from '../../Assets/holidaysworldwide.jpg';
import statecapitaltrivia from '../../Assets/statecapitaltrivia.jpg';

function Projects(props) {
	return (
		<>
			<div className={styles.title}>
				<h2> My Projects</h2>
			</div>
			<div className={styles.background}>
				<div>
					<h3>The Watson</h3>
					<a href='https://the-watson.netlify.app'>
						<img src={thewatson} className={styles.watson} alt='the watson' />
					</a>
				</div>
				<div>
					<h3>Holidays Worldwide</h3>
					<a href='https://holidays-worldwide.netlify.app/'>
						<img
							src={holidaysworldwide}
							className={styles.holiday}
							alt='holidays worldwide'
						/>
					</a>
				</div>
				<div>
					<h3>State capitals Trivia</h3>
					<a href='https://michelcodeur.github.io/State-Capitals-Trivia/'>
						<img
							src={statecapitaltrivia}
							className={styles.trivia}
							alt='state capital trivia'
						/>
					</a>
				</div>
			</div>
		</>
	);
}

export default Projects;
