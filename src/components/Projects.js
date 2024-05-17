import React from 'react';
import petImage from '../PetAdoptionAgency.png';
import petImage2 from '../PetAdoptionAgency2.png';
import petImage3 from '../PetAdoptionAgency3.png';
import gameArcade from '../GameArcade1.png';
import gameArcade2 from '../gamearcade2.png';
import gameArcade3 from '../gamearcade3.png';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>Pet Adoption Agency</h3>
                    <img src={petImage} alt="Pets" className="petAdoptionAgency"/>
                    <img src={petImage2} alt="Pets" className="petAdoptionAgency"/>
                    <img src={petImage3} alt="Pets" className="petAdoptionAgency"/>
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
                    <img src={gameArcade} alt="Pets" className="gameArcade"/>
                    <img src={gameArcade2} alt="Pets" className="gameArcade"/>
                    <img src={gameArcade3} alt="Pets" className="gameArcade"/>
                    <p>This project involves a web application where users can play various retro games. It includes features like high score tracking and multi-player options.</p>
                    <p><strong>Technologies used:</strong> HTML, CSS, JavaScript, Phaser</p>
                </li>
                <li>
                    <h3>Project 3</h3>
                    <p>Description of Project 3...</p>
                    <p><strong>Technologies used:</strong> List of technologies...</p>
                </li>
            </ul>
            <div className="section-divider"></div>
        </section>
    )
}
export default Projects;
