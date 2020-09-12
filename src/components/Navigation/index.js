import React from 'react';

// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, 
// and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without
// the page reloading and that title is highlighted
function Navigation() {
    return(
        <nav>
            <ul className='flex-row'>
                <li className= 'mx-2'>
                    <a href='#about'>
                        About Me
                    </a>
                </li>
                <li className= 'mx-2'>
                    <span>Portfolio</span>
                </li>
                <li className= 'mx-2'>
                    <span>Contact</span>
                </li>
                <li className= 'mx-2'>
                    <span>Resume</span>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;