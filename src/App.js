import React from 'react';
import './App.css';
import HomePlayground from './Components/HomePlayground';
import ProjectsComponent from './Components/ProjectsComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      <Header />
        <HomePlayground />
        <Skills />
        <ProjectsComponent />

    </div>
  );
}

export default App;
