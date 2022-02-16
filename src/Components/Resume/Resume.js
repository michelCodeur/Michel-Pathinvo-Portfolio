import React from 'react';
import styles from './Resume.module.css';

function Resume(props) {
	return (
		<>
			<div className={styles.title}>
				<h1> My Resume </h1>
			</div>
			<div>
				<h2 className={styles.link}>
					A downloaded version of my resume is available
					<a href='https://my.visualcv.com/michel-pathinvo/'> here</a>
				</h2>
			</div>
			<h2>Thank you for your consideration!</h2>
		</>
	);
}

export default Resume;
