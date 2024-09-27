import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "QuizCraft",
      description: "A comprehensive quiz app built with the MERN stack, featuring quiz creation, user authentication, and results tracking.",
      techStack: "MERN Stack",
      githubLink: "https://github.com/SunainaAnand28/QuizCraft-MERN-Quiz-App",
      liveLink: "https://quiz-craft-coral.vercel.app/"
    },
    {
      title: "Tic-Tac-Toe",
      description: "A classic tic-tac-toe game with custom CSS styling to play and enjoy.",
      techStack: "React, CSS",
      githubLink: "https://github.com/sunainaanand28/Tic-Tac-Toe",
      liveLink: "https://sunainaanand28.github.io/Tic-Tac-Toe/"
    },
    {
      title: "To-Do List App",
      description: "A straightforward to-do list application that allows users to add, and delete tasks.",
      techStack: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/sunainaanand28/To-Do-Web-App",
      liveLink: "https://sunainaanand28.github.io/To-Do-Web-App/"
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
