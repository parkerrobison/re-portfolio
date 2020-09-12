import React from 'react';
import Navigation from '../Navigation';

// WHEN I view the header
// THEN I am presented with the developer's name and navigation
// with titles corresponding to different sections of the portfolio

function Header () {
    return(
        <header className='flex-row'>
            <h1>Parker Robison</h1>
            <Navigation></Navigation>
        </header>
    )
}

export default Header;