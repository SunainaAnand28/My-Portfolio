import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src="/portfoliopic2.gif" alt="Sunaina Anand" className="profile-pic" />

      <h2>About Me</h2>
      <p>
      Hi, I'm Sunaina Anand, a passionate web developer and blockchain enthusiast. I'm currently pursuing a Bachelor's in Computer Applications (BCA) and interning as a Full Stack Developer at SinQlarity. I'm deeply interested in Web3 technologies and enjoy contributing to open-source projects.
      </p>
      <p>
      Apart from my technical skills, I enjoy singing and crafting. I'm always eager to connect with like-minded professionals and continuously grow my skills.
      </p>
      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> JavaScript, Python</li>
          <li><strong>Web Technologies:</strong> React, Node.js, Express, MongoDB</li>
          <li><strong>Tools:</strong> Git, Postman, Canva, VS code, Google Docs</li>
        </ul>
      </div>
      <h2>Education and Experience</h2>
      <div className="education-experience-container">
        <div className="education-section">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Bachelor of Computer Applications (BCA)</strong><br />
              Shri Lal Bahadur Shastri Degree College - Ongoing<br />
              <em>Expected Graduation: 2025</em>
            </li>
            <li>
              <strong>Intermediate</strong><br />
              Saraswati Vidya Mandir<br />
              Completed: 2022
            </li>
            <li>
              <strong>High School</strong><br />
              Saraswati Vidya Mandir<br />
              Completed: 2020
            </li>
          </ul>
        </div>

        <div className="experience-section">
          <h3>Experience</h3>
          <ul>
            <li>
              <strong>Full Stack Developer Intern</strong><br />
              SinQlarity (formerly known as TriwebAPI)
              <p>
                As a Full Stack Developer Intern at SinQlarity, I work with technologies such as React, Node.js, and MongoDB while collaborating with teams to integrate decentralized solutions and smart contract features into the company's services.
              </p>
              <b> May 2024 - Present</b>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;
