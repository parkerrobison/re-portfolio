import React from 'react';
import portrait2 from '../../assets/images/portrait/portrait2.JPG'

// WHEN I am presented with the About Me section
// THEN I see a recent photo of the developer and a short bio about them

function About() {
    return(
        <section className='my-5'>
            <h1 id='about'>About Me</h1>
            <img src={portrait2} className='my-2' style={{ width: '15%' }} alt='portrait' />
            <p>
                Hello! My name is Parker Robison. I graduated from USU with a Bachelors degree in Kinesiology. In desiring to further my education and expand my skills,
                I enrolled in the University of Utah's coding bootcamp. I'm fairly new to development but I'm excited to learn more! I am familiar with 
                HTML, CSS, Javascript, JQuery, Bootstrap, APIs and Materialize and I'll learn many other skills in the upcoming months. Currently I work as a Software Tester, but I hope to be a devleoper soon.
                When I'm not learning about software development you can usually find me outside. Some of my hobbies include hiking, rock climbing, pickleball and photography.
            </p>
        </section>
    )
}

export default About;