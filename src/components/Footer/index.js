import React from 'react';

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