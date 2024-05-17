import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'; // Import from free-brands-svg-icons

const Footer = () => {
    return (
        <footer>
            <p>2024 Rory Driscoll</p>
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
                    <a href="https://github.com/rdriscoll520" target="_blank" rel="noopener noreferrer"> {/* Change 'yourusername' to your GitHub username */}
                        <FontAwesomeIcon icon={faGithub} size='1x' />
                    </a>
                </div>
        </footer>
    );
};

export default Footer;