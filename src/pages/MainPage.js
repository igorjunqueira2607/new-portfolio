import React from 'react';
import Contact from '../components/Contact';
// import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Skills from '../components/Skills';
import '../css/MainPage.css';

function MainPage() {
  return (
    <div className="page-box">
      <Menu />
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}

export default MainPage;
