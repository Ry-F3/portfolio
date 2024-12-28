import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons from React Icons

const Contact = () => {
  return (
    <div className="contact-container text-center">
      <div className="contact-icons">
        {/* GitHub Icon */}
        <a href="https://github.com/Ry-F3" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} style={{ margin: '10px', color: '#333' }} />
        </a>
        
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/rhys-few/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{ margin: '10px', color: '#0077b5' }} />
        </a>
        
        {/* Email Icon */}
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={30} style={{ margin: '10px', color: '#D44638' }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
