import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "QuizCraft",
      description: "A full-stack quiz platform built with the MERN stack, featuring JWT-based user authentication, dynamic quiz creation, and a personal results dashboard. Built RESTful APIs in Node/Express to connect a React frontend with a MongoDB database. Designed with a focus on clean UX and secure user sessions.",
      techStack: "MERN Stack",
      githubLink: "https://github.com/SunainaAnand28/QuizCraft-MERN-Quiz-App",
      liveLink: "https://quizcraft-je7d.onrender.com"
    }
    // will add more projects here...
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className='description' >{project.description}</p>
            <p className="tech-stack">{project.techStack}</p>
            <div className="links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
