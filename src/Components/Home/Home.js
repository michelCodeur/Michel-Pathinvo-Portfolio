import React from 'react';
import styles from './Home.module.css';

function Home(props) {
    

    return (
			<div className={styles.name}>
				<ul className={styles.ul}>
					<li className={styles.firstname}>
						<h3>michel</h3>
					</li>
					<li className={styles.lastname}>
						<h3>pathinvo</h3>
					</li>
				</ul>
			</div>
		);
}

export default Home;