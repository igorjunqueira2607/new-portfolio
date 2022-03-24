import React from 'react';
import '../css/Skills.css';

function Skills() {
  return (
    <section className="skills">
      <h3>Habilidades</h3>
      <div className="main-box">
        <div className="left-box">
          <div className="text-box">
            <div className="text-box-title">
              <h4>Linguagens e Ferramentas:</h4>
            </div>
            <p>Oi</p>
          </div>
        </div>
        <div className="right-box">
          <div className="tools-box">
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img align="center" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" align="center" height="30" width="40" alt="git"/></a>
            <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"> <img align="center" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="git"/></a>
            <a href="https://jestjs.io/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" align="center" height="30" width="40" alt="git"/></a>
            <a href="https://slack.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" align="center" height="30" width="40" alt="git"/></a>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" align="center" height="30" width="40" alt="git"/></a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img align="center"           src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></img></a>
            <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img align="center" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;