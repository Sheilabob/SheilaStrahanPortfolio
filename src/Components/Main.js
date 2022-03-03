import React from "react";
import Header from "./Header";
import HomePlayground from "./HomePlayground";
import ProjectsComponent from "./ProjectsComponent";
import Skills from "./Skills";
import { Routes, Route, Redirect } from "react-router-dom";
import ProjectPage from "../Pages/ProjectPage";
import Footer from "./Footer";
import Resume from "./Resume";

export default function Main () {
    return (
        <>
            <HomePlayground />
            <Skills />
            <ProjectsComponent />
            <Resume />

            <Routes>
                    <Route path='/home' render={() => <HomePlayground />} />
                    <Route exact path ='/skills' render={() => <Skills />} />
                    <Route exact path ='/projects' render={() => <ProjectPage />} />

                </Routes>

        </>
    )
}