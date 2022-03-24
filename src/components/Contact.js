import React from 'react';
import '../css/Contact.css';
import linkedin from '../images/linkedin.jpeg';
import github from '../images/githubfinal.png';
import instagram from '../images/instagramfinal.png';

function Contact() {
  return (
    <section className="contact">
      <div className="title-box">
        <h3>Contato</h3>
        <h4>Conecte-se comigo nas redes sociais!</h4>
      </div>
      <div className="social-media-box">
        <a href="https://www.linkedin.com/in/igorjunqueira2607/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="linkedin icon"/>
        </a>
        <a href="https://github.com/igorjunqueira2607" target="_blank" rel="noreferrer">
          <img src={github} alt="github icon"/>
        </a>
        <a href="https://www.instagram.com/igor_junqueira/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="github icon"/>
        </a>
      </div>
    </section>
  )
}

export default Contact;
