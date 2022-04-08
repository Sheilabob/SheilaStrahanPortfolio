import React from "react";
import Header from "./Header";
import Blurb from "./Blurb";
import HomePlayground from "./HomePlayground";
import ProjectsComponent from "./ProjectsComponent";
import Skills from "./Skills";
import { Routes, Route, Redirect, Link } from "react-router-dom";
import ProjectPage from "../Pages/ProjectPage";
import Footer from "./Footer";
import Resume from "./Resume";

export default function Main () {
    return (
        <>
            <Blurb />
            <HomePlayground />
            <ProjectsComponent />
            <Skills />
            <Link to='/resume' style={{textDecoration: 'none'}}><Resume /></Link>


        </>
    )
}