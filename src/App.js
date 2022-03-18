import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Skills from './Components/Skills';
import ProjectPage from './Pages/ProjectPage';
import ResumePage from './Pages/ResumePage';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
                    <Route path='/' element= {<Main />} />
                    <Route exact path ='/skills' element= {<Skills />} />
                    <Route exact path ='/projects' element= {<ProjectPage />} />
                    <Route exact path ='/resume' element= {<ResumePage />} />


                </Routes>
                <Footer />
      </BrowserRouter>
    </div>
  );
}

