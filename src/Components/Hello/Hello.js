import React from 'react';
import styles from './Hello.module.css';
import photoMichel from '../../Assets/photoMichel.jpeg';

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
				<div className={styles.nothing}>
					<h1> Empty</h1>
				</div>
				<div className={styles.photo}>
					<img src={photoMichel} alt='photoMichel' />
				</div>

				<div className={styles.developer}>
					<h1> a passionate web devolper </h1>
				</div>

				<div className={styles.quote}>
					{/* <p>In a gentle way, you can shake the world. Gandhi</p> */}
				</div>


			</div>
		);
}

export default Hello;
