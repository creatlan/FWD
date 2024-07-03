// src/components/AboutMe.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/about_me.css';
import aboutMeImage from '../photo/about_me_own.png';

const AboutMe: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <section className="intro">
            <div className="content-about">
                <div className="about-text">
                    <h1>About</h1>
                    <h2>- 18 years old, Innopolis city</h2>
                    <h2>Soft Skills:</h2>
                    <p>analytical, client-focused, direct, energetic, flexible, focus, innovative, positive, a problem solver, structured</p>
                    <h2>Hard Skills:</h2>
                    <p>C++, Java, Python, Pascal, Microsoft office, HTML, CSS, JavaScript</p>
                    <h2>Human Languages:</h2>
                    <p>English (B2), Russian (native), Tatar (A2), Korean (A2)</p>
                    <h2>General:</h2>
                    <p>
                        I am a tutor in the OGE /USE and admission to IT universities and lyceums, specializing in the field of computer science. 
                        I am always looking for something in common with my students and try to create the most comfortable environment for them based on this. 
                    </p>
                    <p>
                        I take an active part in cultural life: I am an ambassador of Innopolis University, a volunteer from the university and the Kazan headquarters.
                        I like to solve unusual and hard tasks for math and IT, increase my skill in these subjects, discover new topics everyday and watch webinars about it. 
                        Read articles and books on different languages, I speak English B2 and Korean A2. Create own projects, booklets, presentation, photo and video, doing 
                        freelance. Responsible for solving tasks, trying to identify complicated and not clear thesis, do all for solving it and always analyze my flaws. Work 
                        in a team and independently, finding a solution for any difficult situation. I am a very cozy, communicable and public person. I enjoy writing, doing 
                        research work, public speeches and reports. Participate in grant competitions.
                    </p>
                </div>
                <div className="about-img">
                    <img src={aboutMeImage} alt="About Me Image" />
                </div>
            </div>
        </section>
    </main>
      <Footer />
    </>
  );
};

export default AboutMe;
