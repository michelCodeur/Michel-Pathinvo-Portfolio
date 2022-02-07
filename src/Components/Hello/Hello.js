import React from 'react';
import styles from './Hello.module.css';

function Hello(props) {
    return (
			<>
				<div className={styles.background}>
					<div className={styles.hello}>
						<h1>H</h1>
						<h1>E</h1>
						<h1>L</h1>
						<h1>L</h1>
						<h1>O</h1>
					</div>
				</div>
			</>
		);
}

export default Hello;


