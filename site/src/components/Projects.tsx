import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/projects.css'; // Ensure this path is correct

import calculatorImage from '../photo/calculator_project.jpg';
import polynomialImage from '../photo/polynomial_project.png';
import orbitImage from '../photo/orbit_project.jpg';

const projects = [
    {
        title: 'Calculator',
        languages: 'Python using third-party libraries',
        description: 'Web calculator that uses only basic arithmetic operations. \
            The project shows how well the specialist knows how to use algorithms.',
        image: calculatorImage
    },
    {
        title: 'Polynomial regression for graphs and calculations',
        languages: 'C++ using third-party libraries',
        description: 'A program that calculates the polynomial regression for any number \
        of points and shows them on a graph.',
        image: polynomialImage
    },
    {
        title: '3-d model of the globe',
        languages: 'Python using third-party libraries',
        description: 'A project that presents a 3-d model of the globe with an ellipse for \
        the minimum radius of the satellite. The code takes into account the gravity and rotation of the earth.',
        image: orbitImage
    }
];

const Projects: React.FC = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const handlePrevClick = () => {
        setCurrentProject(currentProject > 0 ? currentProject - 1 : projects.length - 1);
    };

    const handleNextClick = () => {
        setCurrentProject(currentProject < projects.length - 1 ? currentProject + 1 : 0);
    };

    const project = projects[currentProject];

    return (
      <>
        <Header />
        <main>
            <div className="intro">
                <h1>{project.title}</h1>
                <ul>
                    <li>{project.languages}</li>
                </ul>
                <p>{project.description}</p>
                <div className="carousel">
                    <button className="nav-button" onClick={handlePrevClick}>&lt;</button>
                    <img src={project.image} alt="Project Image" />
                    <button className="nav-button" onClick={handleNextClick}>&gt;</button>
                </div>
            </div>
        </main>
        <Footer />
      </>
    );
};

export default Projects;
