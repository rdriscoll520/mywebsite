import React from 'react';
import petImage from '../PetAdoptionAgency.png';
import petImage2 from '../PetAdoptionAgency2.png';
import petImage3 from '../PetAdoptionAgency3.png';
import gameArcade from '../GameArcade1.png';
import gameArcade2 from '../gamearcade2.png';
import gameArcade3 from '../gamearcade3.png';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
      original: petImage,
      thumbnail: petImage,
      description: ''
    },
    {
      original: petImage2,
      thumbnail: petImage2,
      description: ''
    },
    {
      original: petImage3,
      thumbnail: petImage3,
      description: ''
    }
  ];

  const images2 = [
    {
      original: gameArcade,
      thumbnail: gameArcade,
      description: ''
    },
    {
      original: gameArcade2,
      thumbnail: gameArcade2,
      description: ''
    },
    {
      original: gameArcade3,
      thumbnail: gameArcade3,
      description: ''
    }
  ];


const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>Pet Adoption Agency</h3>
                    <ImageGallery items={images} />
                    <p>
                        This was a project completed for my Introduction to Databases class at Suffolk. The idea was to create a simulated pet adoption process through a pet adoption agency website that implemented CRUD features for stored information in a database. A user-friendly interface was incorporated, allowing the user to choose between managing adoptions, pets, records, record history, and staff members.
                    </p>
                    <p>
                         An E:R model was designed which illustrated the relationships between all of the entities and their dependencies. MySQL holds all of the information for the database.
                    </p>
                    <p>
                        JPA and Hibernate convert the database to the individual object classes made in Java. Thymeleaf was necessary to create the HTML webpage and allows for the database to be displayed. Additionally, Bootstrap was used to improve the UI of the webpage and make it more accessible and user friendly. 
                    </p>
                    <p>
                        Maven was used to set up the project. An Entity, Service, Controller, and Repository class was created for each table to translate the custom database to HTML and link to web requests. These Java Classes were used to create a strong backend to the project which communicates with the frontend to build the project.
                    </p>

                    <p><strong>Technologies used:</strong> Springboot, Java, Boostrap, ThymeLeaf, mySQL, Maven, CSS</p>

                    <p>
                    <strong>GitHub Repository:</strong> <a href="https://github.com/rdriscoll520/Pet-Adoption-Agency-CRUD" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Visit the Pet Adoption Agency CRUD repository</a>
                    </p>
                </li>
                <li>
                    <h3>Retro Game Arcade</h3>
                    <ImageGallery items={images2} />
                    <p>The React Game Arcade was an idea a few students and I came up with for a project for a class.
                        The idea behind this project was we were supposed to build a project on a language/framework that
                        we were unfamiliar with but interested in. At the time, I had only a little JavaScript experience and had never
                        build a full web application, but web developement facinated me. It was the perfect choice.
                    </p>
                    <p>The arcade is made six games. I designed two of them (pong and snake) which proved to be very difficult due to how dynamic they were.
                        This project helped me learn the basics of React and how to build a webapp as a team.
                    </p>
                    <p> Certainly one of the most important skills learned from this project was how to develop as a team using GitHub. It provided us an easy way for all of us
                        to do our part and have access to our project in one space. Mistakes were certainly made, but they provided a great learning experience.
                    </p>
                    <p><strong>Technologies used:</strong> React, HTML, CSS, JavaScript</p>
                    <p><strong>GitHub Repository:</strong> <a href="https://github.com/Skitchner/React.js-Website-Arcade" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Visit the React Game Arcade repository</a></p>
                    </li>
            </ul>
            <div className="section-divider"></div>
        </section>
    )
}
export default Projects;
