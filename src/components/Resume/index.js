import React from 'react';
// import prResume from '../../assets/Resume/ParkerRobisonResume.pdf'
import prResume from '../../utils/resume.json'
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

function Resume() {
return(
    <section>
        <h2>Resume</h2>
        <a href={prResume[0].filePath} download>
            Download my Resume
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
    </section>
)

}

export default Resume;