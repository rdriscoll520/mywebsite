import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    return (
        <header style={{ position: 'relative', width: '100%' }}>
            <button onClick={toggleSidebar} className="menu-icon">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <h1 style={{ textAlign: 'center' }}>Rory Driscoll</h1>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
