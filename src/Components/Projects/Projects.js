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
					<div className={styles.watson}>
						<a href='https://the-watson.netlify.app'>
							<img src={thewatson} alt='the watson' />
						</a>
					</div>
					<div className={styles.holiday}>
						<a href='https://holidays-worldwide.netlify.app/'>
							<img src={holidaysworldwide} alt='holidays worldwide' />
						</a>
					</div>
					<div className={styles.trivia}>
						<a href='https://michelcodeur.github.io/State-Capitals-Trivia/'>
                            <img src={statecapitaltrivia} alt="state capital trivia" />
                        </a>
					</div>
				</div>
			</>
		);
}

export default Projects;