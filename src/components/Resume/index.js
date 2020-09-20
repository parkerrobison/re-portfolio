import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import prResume from '../../utils/resume.json';


function Resume() {
return(
    <Container className="section-wrapper">
        <Row>
            <Col>
            <h2>Resume</h2>
        <a className= 'resume-download' href={prResume[0].filePath} download>
            Download my resume
        </a>
        <div>
            <h4>Front-end Experience</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Materialize</li>
            </ul>
            <h4>Back-end Experience</h4>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>NoSQL</li>
            </ul>
        </div>
            </Col>
        </Row>
    </Container>
)

}

export default Resume;