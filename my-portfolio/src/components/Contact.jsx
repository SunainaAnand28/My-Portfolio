import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <footer className="contact-container">
      <div className="contact-info">
        <h3>Contact Me</h3>
        <p>If you have any questions or need further assistance, feel free to reach out to me:</p>
        <p>
          <strong>Sunaina Anand</strong> - Web Development Intern at SinQlarity
        </p>
        <p>Email: <a href="mailto:sunainaanand28@gmail.com">sunainaanand28@gmail.com</a></p>

        <h4>Connect with Me</h4>
        <div className="social-links">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sunainaanand28" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-logo.png" alt="LinkedIn" className="social-icon" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/_GeekyGlam" target="_blank" rel="noopener noreferrer">
           <img src="/twitter-logo.png" alt="Twitter" className="social-icon" />
          </a>

          {/* GitHub */}
          <a href="https://github.com/SunainaAnand28" target="_blank" rel="noopener noreferrer">
            <img src="/github-logo.png" alt="GitHub" className="social-icon" />
          </a>

          {/* LeetCode */}
          <a href="https://leetcode.com/_GeekyGlam" target="_blank" rel="noopener noreferrer">
            <img src="/leetcode-logo.png" alt="LeetCode" className="social-icon" />
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2024 Sunaina Anand. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;
