import React from 'react';
import styles from './Projects.module.css';
import thewatson from '../../Assets/thewatson.jpg';
import holidaysworldwide from '../../Assets/holidaysworldwide.jpg';
import statecapitaltrivia from '../../Assets/statecapitaltrivia.jpg';
import peeep from '../../Assets/peeep.jpg'

function Projects(props) {
	return (
		<div className={styles.background}>
			<div className={styles.title}>
				<h2> My Projects</h2>
			</div>
			<div className={styles.grid_background}>
				<div>
					<h3>Peep</h3>
					<a href='https://peeep.netlify.app/'>
						<img src={peeep} className={styles.peep} alt='peep' />
					</a>
				</div>
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
		</div>
	);
}

export default Projects;
