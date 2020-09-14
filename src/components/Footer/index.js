import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter } from '@fortawesome/free-solid-svg-icons';


// library.add()

// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles,
//  and their profile on a third platform (Stack Overflow, Twitter) 
function Footer() {
    return(
        <footer>
            <ul className='profile-links flex-row'>
                <li className='mx-2'>
                    <a href='https://github.com/parkerrobison' target='_blank' rel="noopener noreferrer">GitHub</a>
                </li>
                <li className='mx-2'>
                    <a href='https://www.linkedin.com/in/parker-robison-690972139/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li className='mx-2'>
                    <a href='https://twitter.com/ParkerRobison2' target='_blank' rel="noopener noreferrer">Twitter</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;