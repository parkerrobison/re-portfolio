import React from 'react';
import projects from '../../utils/project.json';
import {Row, Col, Container} from 'reactstrap';

function Project() {
    return(
        <Container>
            <Row>
                {projects.map((p, i) => {
                    return(
                        <Col md="6" className='project-wrapper' key={i} md={4}>
                            <h2>{p.ProjectName}</h2>
                            <img src={p.imagePath} 
                                alt={p.ProjectName}
                                className= "img-thumbnail project-image mx-1" 
                            />
                            <p>{p.description}</p>
                            <p>This project uses {p.technologies}</p>
                            <a href={p.githubRepo} target='_blank' rel="noopener noreferrer" className="gh-link">GitHub</a>
                            <a href={p.deployedApp} target='_blank' rel="noopener noreferrer" className="site-link"> Live Website</a>
                        </Col>)

                })}
                </Row>
            </Container>
    )
}
export default Project;