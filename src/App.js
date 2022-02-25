import React from 'react';
import './App.css';
import HomePlayground from './Components/HomePlayground';
import ProjectsComponent from './Components/ProjectsComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <HomePlayground />
        <ProjectsComponent />
    </div>
  );
}

export default App;
