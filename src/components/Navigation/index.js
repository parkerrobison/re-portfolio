import React from 'react';

// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, 
// and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation without
// the page reloading and that title is highlighted

function Navigation(props) {
    const pages = [
        { name: 'About Me'},
        { name: 'Portfolio'},
        { name: 'Contact'},
        { name: 'Resume'}
    ]
    return(
        <nav>
            <ul className="flex-row">
                {pages.map((page) => (
                    <li
                        className={`mx-1 ${
                        props.currentPage === page.name ? 'navActive' : ''
                        }`}
                        key={page.name}
                    >
                        <span onClick={ ()=> props.handleSubmit(page.name)}
                        >
                            {page.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Navigation;