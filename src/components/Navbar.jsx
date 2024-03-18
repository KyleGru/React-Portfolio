// import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';




const Navbar = () => {
    const currentPage = useLocation().pathname;


    return (
        <header className='navbarHeader'>
            <BootstrapNavbar expand='lg' className='custom-navbar'>
                <div className='container-fluid'>
                    <BootstrapNavbar.Collapse id='navbarNav'>
                        <Nav className='me-auto'>
                            <Nav.Item>
                            <Link
                                to='/'
                                className={`nav-link ${currentPage === '/' && 'active'}`}
                            >
                                About
                            </Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Link
                                to='/Portfolio'
                                className={`nav-link ${currentPage === '/Portfolio' && 'active'}`}
                            >
                                Portfolio
                            </Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Link
                                to='/Resume'
                                className={`nav-link ${currentPage === '/Resume' && 'active'}`}
                            >
                                Resume
                            </Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Link
                                to='/Contact'
                                className={`nav-link ${currentPage === '/Contact' && 'active'}`}
                            >
                                Contact
                            </Link>
                            </Nav.Item>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </div>
            </BootstrapNavbar>
        </header>
            
    );
}


export default Navbar; // Exporting Navbar as default
