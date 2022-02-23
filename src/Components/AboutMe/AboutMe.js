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
						First generation immigrant from Benin Republic, a French speaking
						country in the Western part of the African continent, I moved to
						the U.S. more than a decade ago with my family. <br/> With an educational
						background in STEM, I made the goal to nourish my passion in
						Computer Science while working in the state government. I recently
						caught myself in strengthening my skills in web development and it
						has been a great experience. I have built responsive and
						user-centered applications in a short time period through different
						projects. <br/> In my free time, I like to travel to unknown places and I
						always enjoyed city-biking. I look forward to putting my knowledge
						into bringing out the best in web development. <br/> Thanks for reading...
					</h4>
				</p>
			</div>
		);
}

export default AboutMe;