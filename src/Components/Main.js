import React from "react";
import Header from "./Header";
import HomePlayground from "./HomePlayground";
import ProjectsComponent from "./ProjectsComponent";
import Skills from "./Skills";
import { Routes, Route, Redirect } from "react-router-dom";
import ProjectPage from "../Pages/ProjectPage";

export default function Main () {
    return (
        <>
            <HomePlayground />
            <Skills />
            <ProjectsComponent />

            <Routes>
                    <Route path='/home' render={() => <HomePlayground />} />
                    <Route exact path ='/skills' render={() => <Skills />} />
                    <Route exact path ='/playasong' render={() => <ProjectPage />} />

                </Routes>

        </>
    )
}