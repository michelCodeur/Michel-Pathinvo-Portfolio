import React from 'react';
import styles from './AboutMe.module.css'

function AboutMe(props) {
    return (
			<div className={styles.background}>
				<span className={styles.title}>
					<h2>A Bit About Me</h2>
				</span>
				<p className={styles.paragraph}>
					<h4>
						Born in Cotonou, the largest city in Benin Republic, a French
						speaking country in the Western part of the African continent, I
						moved to U.S. more than a decade ago with my family. With a
						background in STEM, I went ahead the University of Illinois in
						Springfield while working in the state government. <br />
						Being always passionate by technology, I decided to sharpen my web
						development skills and look at what I just built among many others
						projects.
						<br />
						I look forward to put my knowledge to better the world around me.
						<br /> Thanks for reading...
					</h4>
				</p>
				<nav>
				<p>The best time for a new beginning is now!</p>
                </nav>
				
			</div>
		);
}

export default AboutMe;