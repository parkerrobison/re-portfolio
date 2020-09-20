import React, {useState} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

function Navigation(props) {
  const pages = [
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    // <Navbar light expand="md">
    //   <NavbarToggler onClick={toggle} />
    //   <Collapse isOpen={isOpen} navbar>
    //     <Nav className="mr-auto" pills navbar>
    //         {pages.map((page) => {
    //             return (
    //                 <NavItem
    //                 className = {props.currentPage === page.name ? 'navActive' : ''} active key={page.name}>
    //                     <NavLink  onClick ={ ()=> props.handleSubmit(page.name)} >{page.name}</NavLink>
    //                 </NavItem>
    //             )
    //         })}      
    //     </Nav>
    //   </Collapse>
    // </Navbar>
    
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
  );
}
export default Navigation;
