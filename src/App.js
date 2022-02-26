import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Skills from './Components/Skills';
import ProjectPage from './Pages/ProjectPage';
import Header from './Components/Header';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
                    <Route path='/home' element= {<Main />} />
                    <Route exact path ='/skills' element= {<Skills />} />
                    <Route exact path ='/projects' element= {<ProjectPage />} />

                </Routes>
      </BrowserRouter>
    </div>
  );
}

