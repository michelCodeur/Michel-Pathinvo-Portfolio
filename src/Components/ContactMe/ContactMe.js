import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactMe.module.css';

function ContactMe(props) {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_l229zjg',
				'template_iea9o6u',
				form.current,
				'user_AcfpXIVu923RMLPu05oBs'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	return (
		<>
			<div className={styles.container}>
				<form className={styles.form} ref={form} onSubmit={sendEmail}>
					<label htmlFor='Name'>Name</label>
					<input className={styles.nameInput} type='text' name='user_name' />
					<label htmlFor='email'>Email</label>
					<input className={styles.emailInput} type='email' name='user_email' />
					<label>Message</label>
					<textarea className={styles.textarea} name='message' />
					<button className={styles.sendButton} type='submit' value='Send'>
						{' '}
						SEND{' '}
					</button>
				</form>
			</div>
		</>
	);
}

export default ContactMe;
