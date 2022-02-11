import React from 'react';
import styles from './Skills.module.css';

function Skills(props) {
    return (
			<div className={styles.background}>
				<div className={styles.title}>
					<h1> Skills </h1>
				</div>
				<div className={styles.language}>
                 <span>Python</span>
				 <span>JavaScript</span>
				 <span>TypeScript</span>
				 <span>SQL</span>
				 <span>HTML</span>
				</div>
				<div className={styles.database}>

				</div>
				<div className={styles.framework}>

				</div>
				<div className={styles.network}>

				</div>
			</div>
		);
}

export default Skills;