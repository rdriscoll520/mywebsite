import React from 'react';
import "./Sidebar.css";
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import from free-brands-svg-icons

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <button onClick={toggleSidebar} className="close-icon">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} size ='1x' />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter}  size ='1x'/>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} size ='1x' />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size ='1x' />
                    </a>
                    <a href="https://www.github.com/yourusername" target="_blank" rel="noopener noreferrer"> {/* Change 'yourusername' to your GitHub username */}
                        <FontAwesomeIcon icon={faGithub} size='1x' />
                    </a>
                </div>
            </div>
            <nav className="sidebar-nav">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleSidebar}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleSidebar}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleSidebar}>
                    Contact
                </NavLink>
            </nav>
        </div>
    );
};


export default Sidebar;
