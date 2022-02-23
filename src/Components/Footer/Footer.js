import React from 'react';
import styles from './Footer.module.css';


function Footer(props) {
    return (
			<div className={styles.footerContainer}>
				<span>MichelPathinvo &copy; | Deployed by Netlify </span>
			</div>
		);
}

export default Footer;