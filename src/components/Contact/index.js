import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import {Container, Row, Col} from 'reactstrap';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        } 
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return(

        <Container className="section-wrapper">
            <Row>
                <Col md="12">
                <h1>Contact me</h1>
                <p>If you'd like to reach out to me please email me at parkerobison@gmail.com</p>
                <form id='contact-form' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                        )}
                    <button type="submit">Submit</button>
                </form>
                </Col>
            </Row>
        </Container>
        // <section className='contact-container section-wrapper'>
        //     <h1>Contact me</h1>
        //     <p>If you'd like to reach out to me please email me at parkerobison@gmail.com</p>
        //     <form id='contact-form' onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="name">Name:</label>
        //             <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        //         </div>
        //         <div>
        //             <label htmlFor="email">Email address:</label>
        //             <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        //         </div>
        //         <div>
        //             <label htmlFor="message">Message:</label>
        //             <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        //         </div>
        //         {errorMessage && (
        //             <div>
        //                 <p className="error-text">{errorMessage}</p>
        //             </div>
        //             )}
        //         <button type="submit">Submit</button>
        //     </form>
        // </section>
    )
}

export default ContactForm;