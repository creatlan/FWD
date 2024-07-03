import React from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/main.css';

import frontendImage from '../photo/index_frontend.jpg';
import backendImage from '../photo/index_backend.jpg';
import testerImage from '../photo/index_tester.jpg';
import tutorImage from '../photo/index_tutor.jpg';

export const Intro = () => (
    <>
    <Header />
    <main>
        <section className="intro">
        <h1>Portfolio site</h1>
        <p>Me, myself and I</p>
        </section>
        <section className="projects">
        <div className="project">
            <img src={frontendImage} alt="index_frontend" />
            <h2>Fronted developer</h2>
            <p>
            As a frontend developer, I specialize in creating intuitive and
            responsive user interfaces using HTML, CSS, and JavaScript -
            pre-discussing the built design in figma with the customer. I ensure
            seamless user experiences by implementing modern frameworks such as
            React, focusing on performance and accessibility.
            </p>
        </div>
        <div className="project">
            <img src={backendImage} alt="index_backend" />
            <h2>Backend developer</h2>
            <p>
            In my role as a backend developer, I design and maintain robust
            server-side applications using C++, Java and Python. I excel in
            database management with SQL and NoSQL systems, ensuring efficient
            data handling and secure, scalable backend infrastructures.
            </p>
        </div>
        <div className="project">
            <img src={testerImage} alt="index_tester" />
            <h2>Tester</h2>
            <p>
            As a dedicated tester, I provide comprehensive quality assurance
            through automated and manual testing methodologies. My expertise in
            tools like Selenium, JUnit, and Postman allows me to identify and
            resolve issues early, ensuring the delivery of high-quality software
            products.
            </p>
        </div>
        <div className="project">
            <img src={tutorImage} alt="index_tutor" />
            <h2>Tutor</h2>
            <p>
            I prepare individual lessons according to the personal preferences of
            students, paying special attention to comfort in the classroom. I make
            a plan for all the lessons to achieve the main goal and interactively
            tell the theory, showing examples in real cases.
            </p>
        </div>
        </section>
    </main>
    <Footer />
    </>
)

export default Intro;