import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <img src="/portfoliopic2.gif" alt="Sunaina Anand" className="profile-pic" />

      <h2>About Me</h2>
      <p>
      I am passionate about Web3 and programming, always eager to learn new technologies and build creative web solutions. 
Right now, I’m working as a Web Development Intern at SinQlarity, where I use Agile tools like JIRA to complete tasks efficiently and deliver great results. This experience has helped me strengthen my technical knowledge and taught me the importance of teamwork.

My BCA studies have given me a strong base in programming, and I’m excited to use this foundation to become a skilled web developer.
I love connecting with people who share my interests in tech, learning, and growth. Let’s connect and see how we can create something amazing together!
      </p>
   <div className="hobby-section">
   <h3>Hobbies</h3>
<ul>
  <li><strong>Singing:</strong> I find joy in expressing emotions through music and enjoy experimenting with different genres.</li>
  <li><strong>Crafting:</strong> Whether it's DIY projects or creative art, crafting allows me to unwind and let my imagination flow.</li>

</ul>
   </div>
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
              Shri Lal Bahadur Shastri Degree College - Ongoing<br />
              2022 - Present
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
              Tri-Web Genesis Pvt. Ltd.
              <p>
                As a Full Stack Developer Intern at SinQlarity, I work to Develop and maintain web applications using the MERN stack, focusing on scalable and efficient code, collaborate with the development team to build user friendly interfaces and optimize backend functionality, ensuring a seamless user experience. Implement RESTful APIs and ensure seamless integration with the frontend.. Work within an Agile development framework, leveraging tools like Jira to plan, track, and manage the development lifecycle effectively
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
