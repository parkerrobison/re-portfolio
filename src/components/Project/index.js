import React from 'react';
import projects from '../../utils/project.json';
import {Row, Col, Container} from 'reactstrap';

function Project() {
    return(
        <Container>
            <Row>
                {projects.map((p, i) => {
                    return(
                        <Col key={i} md={4}>
                            <h2>{p.ProjectName}</h2>
                            <img src={p.imagePath} 
                                alt={p.ProjectName}
                                className= "img-thumbnail mx-1" 
                            />
                        </Col>)
                    
                })}
            
            </Row>
        </Container>
    )
}
export default Project;