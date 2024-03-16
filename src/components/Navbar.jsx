import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';




function Navbar() {
    const currentPage = useLocation().pathname;

    // useEffect(() => {
    //     const navbarClick = document.querySelector('.navbar-toggler');

    //     const handleNavbarClick = () => {
    //         const targetId = navbarClick.getAttribute('data-target');
    //         const targetElement = document.getElementById(targetId.slice(1));

    //         if (targetElement) {
    //             const expand = targetElement.classList.contains('show');
    //             targetElement.classList.toggle('show', !expand);
    //         }
    //     };
    //     navbarClick.addEventListener('click', handleNavbarClick);
    //     return () => {
    //         navbarClick.removeEventListener('click', handleNavbarClick);
    //     };
    // }, []);

    return (
        <header className='navbarHeader'>
            <BootstrapNavbar expand='lg' className='custom-navbar'>
                <div className='container-fluid'>
                    <BootstrapNavbar.Collapse id='navbarNav'>
                        <Nav className='me-auto'>
                            <Nav.Item>
                            <Link
                                to='/'
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                            >
                                About
                            </Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Link
                                to='/Portfolio'
                                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                            >
                                Portfolio
                            </Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Link
                                to='/Resume'
                                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Link
                                to='/Contact'
                                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
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
