import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src="/portfoliopic2.gif" alt="Sunaina Anand" className="profile-pic" />

      <h2>About Me</h2>
      <p>
        Hello, I’m Sunaina Anand, currently working as an IT Trainer at OIPL Okeanos Infotech Pvt. Ltd.
        I have experience as a Full Stack Developer Intern at SinQlarity, where I contributed to projects in an agile environment. I am involved in training students in programming and web designing, focusing on building strong fundamentals through practical learning.
        Let’s connect and see how we can create something amazing together!
      </p>

      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li> Git</li>
          <li>Jira</li>
          <li>Postman</li>
        </ul>
      </div>
      <h2>Education and Experience</h2>
      <div className="education-experience-container">
        <div className="education-section">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Bachelor of Computer Applications (BCA)</strong><br />
              Shri Lal Bahadur Shastri Degree College<br />
              2022 - 2025
            </li>
          </ul>
        </div>

        <div className="experience-section">
          <h3>Experience</h3>
          <ul>
            <li>
              <strong>IT Trainer</strong><br />
              Okeanos Infotech Pvt. Ltd.
              <p>
                Trained O Level students in Web Designing & Web Publishing.
Taught IT tools, Computer Fundamentals, and Networking Basics.
Guided Students on practical websites creation and publishing concepts.
Supported learners with hands-on labs and real-world examples.
              </p>
              <b> May 2024 - Present</b>
            </li>
          </ul>
          <ul>
            <li>
              <strong>Full Stack Developer Intern</strong><br />
              Tri-Web Genesis Pvt. Ltd. - SinQlarity
              <p>
                As a Full Stack Developer Intern at SinQlarity, I worked to Develop and maintain web applications using the MERN stack. Implemented RESTful APIs and ensured seamless integration with the frontend.
                Work within an Agile development framework, leveraging tools like Jira to plan, track, 
                and manage the development lifecycle effectively.
              </p>
              <b> May 2024 - Present</b>
            </li>
          </ul>
        </div>
      </div>
      <div className="hobby-section">
        <h3>Hobbies</h3>
        <ul>
          <li><strong>Singing:</strong> I find joy in expressing emotions through music.</li>
          <li><strong>Crafting:</strong> Whether it's DIY projects or creative art, crafting allows me to unwind and let my imagination flow.</li>

        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
