import React from 'react';
import portrait2 from '../../assets/images/portrait/portrait2.JPG';
import {Container, Row, Col} from 'reactstrap';

function About() {
    return(
        <Container className="section-wrapper">
            <Row>
                <Col sm="3" style ={{ alignText: 'center'}}>
                <h1 id='about'>About Me</h1>
                    <div className='image-cropper'>
                        <img src={portrait2} className='my-2 portrait' style={{ width: '100%' }} alt='portrait' />
                    </div>
                </Col>
                <Col sm="9">
                    <p style={{ marginTop: '10%'}}>
                        Hello! My name is Parker Robison. I enjoy coding, being outdoors, photography, and being active. I graduated from USU with a Bachelors degree in Kinesiology. In desiring to further my education and expand my skills,
                        I enrolled in the University of Utah's coding bootcamp. I will soon be graduating from the bootcamp and will continue developing my coding skills. As a full stack developer, 
                        I'm focused on developing inspiring and helpful applications and websites. 
                    </p>
                </Col>
            </Row>
            
            
        </Container>
    )
}

export default About;