import React from 'react';
import portrait2 from '../../assets/images/portrait/portrait2.JPG'

function About() {
    return(
        <section className='my-5 section-wrapper'>
            <h1 id='about'>About Me</h1>
            <div className='image-cropper'>
                <img src={portrait2} className='my-2 portrait' style={{ width: '15%' }} alt='portrait' />
            </div>
            <br />
            <p>
                Hello! My name is Parker Robison. I enjoy coding, being outdoors, photography, and being active. I graduated from USU with a Bachelors degree in Kinesiology. In desiring to further my education and expand my skills,
                I enrolled in the University of Utah's coding bootcamp. I will soon be graduating from the bootcamp and will continue developing my coding skills. As a full stack developer, 
                I'm focused on developing inspiring and helpful applications and websites. 
            </p>
        </section>
    )
}

export default About;