import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
                        GymWeb
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times':'fas fa-bars'}/>
                    </div>
                    <ul className={click ?  'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/registrar-instructor" className='nav-links' onClick={closeMobileMenu}>
                                Registrar Instructor
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/registrar-cliente" className='nav-links' onClick={closeMobileMenu}>
                                Registrar Cliente
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/reservaciones" className='nav-links' onClick={closeMobileMenu}>
                                Reservaciones
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/servicios" className='nav-links' onClick={closeMobileMenu}>
                                Servicios
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/calendario" className='nav-links' onClick={closeMobileMenu}>
                                Calendario del mes
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;