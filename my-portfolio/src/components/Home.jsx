import React from 'react';
import styles from '../styles/Home.module.css'; // Use CSS Module

function Home() {
  return (
    <div className={styles.homeContainer}>
      <img src="/portfoliopic.gif" alt="Profile" className={styles.profilePic} />
      <div className={styles.introText}>
        <h1 className={styles.introHeading}>Hi, I’m Sunaina</h1>
        <p>Full Stack Developer | IT Trainer</p>
       <div className={styles.subtext} > I build full-stack web apps using the MERN stack and train aspiring 
  developers on web fundamentals. Currently working as an IT Trainer at 
  Okeanos Infotech, where I guide students through practical, hands-on 
  learning.</div>
        <div className={styles.resumeDownload}>
          <a href="/" download="">
            <button disabled title='This Button is disabled for some time' className={styles.downloadBtn}>Download Resume</button>
          </a>
        </div>
        <div className={styles.socialLinks}>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sunainaanand28" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-logo.png" alt="LinkedIn" className={styles.socialIcon} />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/_GeekyGlam" target="_blank" rel="noopener noreferrer">
            <img src="/twitter-logo.png" alt="Twitter" className={styles.socialIcon} />
          </a>

          {/* GitHub */}
          <a href="https://github.com/SunainaAnand28" target="_blank" rel="noopener noreferrer">
            <img src="/github-logo.png" alt="GitHub" className={styles.socialIcon} />
          </a>

          {/* LeetCode */}
          <a href="https://leetcode.com/_GeekyGlam" target="_blank" rel="noopener noreferrer">
            <img src="/leetcode-logo.png" alt="LeetCode" className={styles.socialIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
