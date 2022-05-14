import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contact = () => {
	const form = useRef();
	const [done, setDone] = useState(false);

  	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_8ivunhr', 'template_awd3h3h', form.current, 'LAXVAW3TFMNNvnQbJ')
		.then((result) => {
			console.log(result.text);
			setDone(true);
		}, (error) => {
			console.log(error.text);
		});
  	};
  	return (
		<div className=''>
			<div className="c-left">
				<div className="awesome">
					<span>Get in touch</span>
					<span>Contact me</span>
					<div className="blur s-blur1" style={{ background: "#ABFIFF94"}}></div>
				</div>
			</div>
			<div className="c-right">
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name='username' className='user' placeholder='Enter name' />
					<input type="email" name='email' className='user' placeholder='Enter email' />
					<textarea name='message' className='user' placeholder='Enter message' />
					<span>{done && 'Thanks for contacting me'}</span>
					<input type='submit' value='Send' className='button' />
					<div className='blur c-blur' style={{ background: 'var(--purple)' }}></div>
				</form>
			</div>
		</div>
	)
}

export default Contact