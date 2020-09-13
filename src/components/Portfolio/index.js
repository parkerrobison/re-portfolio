import React from 'react';
import Project from '../Project'

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications 
// with links to both the deployed applications and the corresponding GitHub repository

function Portfolio() {
    return(
        <section>
            <h1>Portfolio</h1>
                <div className='flex-row'>
                    <Project></Project>
                </div>
        </section>
    );
}
export default Portfolio;