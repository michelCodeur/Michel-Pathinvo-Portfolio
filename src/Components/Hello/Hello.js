import React from 'react';
import styles from './Hello.module.css';
import photoMichelNew from '../../Assets/photoMichelNew.jpg';


function Hello(props) {


	return (
		<div className={styles.section}>
			<div className={styles.hello}>
				<h1>Hi</h1>
				<h1>T</h1>
				<h1>H</h1>
				<h1>E</h1>
				<h1>R</h1>
				<h1>E...</h1>
			</div>
			<div className={styles.meet}>
				<h1>Meet Michel</h1>
			</div>
			<div className={styles.socialinks}>
				<div className={styles.links}>
					<div className={styles.github}>
						<a href='https://www.github.com/michelCodeur' class='fa fa-github fa-4x'>
							
						</a>
					</div>
					<div className={styles.linkedin}>
						<a
							href='https://www.linkedin.com/in/michelpathinvo'
							class='fa fa-linkedin fa-4x'>
							
						</a>
					</div>
				</div>
			</div>
			<div className={styles.photo}>
				<img src={photoMichelNew} alt='photoMichelNew' />
			</div>

			<div className={styles.developer}>
				<h1> a passionate web devolper </h1>
			</div>
		</div>
	);
}

export default Hello;
