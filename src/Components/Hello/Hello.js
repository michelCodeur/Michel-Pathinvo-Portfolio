import React from 'react';
import styles from './Hello.module.css';
import photoMichelNew from '../../Assets/photoMichelNew.jpg';
import Arizona from '../../Assets/Arizona.jpg';
import London from '../../Assets/London.jpeg';
import partheon from '../../Assets/partheon.jpeg';
import RioJanero from '../../Assets/RioJaneiro.jpeg';
import Sydney from '../../Assets/Sydney.jpeg';
import Tallinn from '../../Assets/Tallinn.jpeg';
import thegreatwall from '../../Assets/thegreatwall.jpeg';
import Zanzibar from '../../Assets/Zanzibar.jpeg';

function Hello(props) {

	const photos = [
		<img src={London} alt='' />,
		<img src={Arizona} alt='' />,
		<img src={partheon} alt='' />,
		<img src={RioJanero} alt='' />,
		<img src={Sydney} alt='' />,
		<img src={Tallinn} alt='' />,
		<img src={thegreatwall} alt='' />,
		<img src={Zanzibar} alt='' />,
	];

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
				<h3> My bucket list of places I would like to discover! </h3>
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
