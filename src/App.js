import React, { useState } from 'react';

import Header from './components/UI/Header/Header';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Sidebar from './components/UI/Sidebar/Sidebar';

import './App.scss';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import experienceProjects from './data/experience';
import projects from './data/projects';
import skills from './data/skills';

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);


  return (

    <>
      <Header openSidebar={openSidebar} />
          <Intro />
          <About />
          <Experience id="experience" projects={experienceProjects} heading="Experience"/>
          <Experience id="projects" projects={projects} heading="Projects"/>
          <Skills skills={skills}/>
      <Sidebar closeSidebar={closeSidebar} show={isSidebarOpen}  />
    </>
  );
}

export default App;
