import React from 'react';
import projects from '../../utils/project.json';
// import {Row, Col, Container} from 'reactstrap';

function Project() {
    return(
            <div className='project-container'>
                {projects.map((p, i) => {
                    return(
                        <div className='project-wrapper' key={i} md={4}>
                            <h2>{p.ProjectName}</h2>
                            <img src={p.imagePath} 
                                alt={p.ProjectName}
                                className= "img-thumbnail project-image mx-1" 
                            />
                        </div>)

                })}
            </div>
    )
}
export default Project;