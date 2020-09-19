import React from 'react';
import Navigation from '../Navigation';

function Header (props) {
    return(
        <header className='flex-row'>
            <h1>Parker Robison</h1>
            <Navigation
            handleSubmit={props.handleSubmit}
            currentPage= {props.currentPage}
            setCurrentPage= {props.setCurrentPage}>
            </Navigation>
        </header>
    )
}

export default Header;