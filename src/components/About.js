import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../R. Driscoll-2.jpg';
const About = () => {
    return (
      <section id="about">
        <h2>About Me</h2>
        <img src={profileImage} alt="Rory Driscoll" style={{ width: '300px', borderRadius: '100%', margin: '10px 0' }}/>
        <p>Hi! I'm Rory Driscoll, a Computer Science student at Suffolk University. I enjoy developing web applications and software.</p>
        <h3>Background</h3>
        <p>I am currently pursuing a Bachelor of Science in Computer Science at Suffolk University. I have been working as an electronics associate at Walmart for three years. I have hands-on experience working as a team in database management and web development.</p>
        <h3>Skills and Expertise</h3>
        <div className="skills">
          <p><FontAwesomeIcon icon={faPython} /> Python</p>
          <p><FontAwesomeIcon icon={faJava} /> Java</p>
          <p><FontAwesomeIcon icon={faJsSquare} /> JavaScript</p>
          <p><FontAwesomeIcon icon={faReact} /> React</p>
          <p><FontAwesomeIcon icon={faCode} /> C</p>
          <p><FontAwesomeIcon icon={faCode} /> C++</p>
          <p><FontAwesomeIcon icon={faDatabase} /> SQL</p>
          <p><FontAwesomeIcon icon={faLeaf} /> Spring Boot</p>
        </div>
        <h3>Interests and Goals</h3>
        <p>I am still exploring my interests in computer science, however I am mainly enthusiastic about software and web development. I also enjoy the fields of artificial intelligence, data science, and mathematics.</p>
        <h3>Personal Interests</h3>
        <p>In my free time, I enjoy weightlifting and developing my own projects in areas I am passionate about. I'm also a gamer with a love for strategy games and exploring new trends in game development. I would love to start designing games of my own.</p>
        <div className="section-divider"></div>
      </section>
    );
  };

export default About;