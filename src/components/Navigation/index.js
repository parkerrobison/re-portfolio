import React from 'react';

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