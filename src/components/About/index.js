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
                        Hello! My name is Parker Robison. I am a Full Stack Developer and I’m seeking to apply my skills with a quality driven team to create remarkable user experiences. 
                        I recently earned a certificate in full stack development from the University of Utah. I am familiar with Javascript, CSS, React.js, Node.js and mySQL. 
                        I have exceptional organizational skills, a commitment to developing solid apps, and a determination to learn new technologies.
                        Aside from coding, I enjoy hiking, baking, watching movies, photography, listening to music, and being active in general. 
                    </p>
                </Col>
            </Row>
            
            
        </Container>
    )
}

export default About;