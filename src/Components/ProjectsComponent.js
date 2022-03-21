import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import OKBWebsiteComponent from './OKBWebsiteComponent';
import PythonProjectComponent from './PythonProjectComponent';


export default function ProjectsComponent() {
    return (
        <Container>
            <Row className="m-5">
                <Link to='/projects' style={{textDecoration: 'none'}}><h1>Projects</h1></Link>
            </Row>
            <OKBWebsiteComponent />
            <Row className="m-3">
                <Row className="project-title">                
                    <h2>DCM Game</h2>
                    <h5>(Front-end: React, plus vanilla JavaScript)</h5>
                </Row>
                <Row>
                    <Col xs sm="5" className="m-1">
                    <h5 className="project-summary-title m-1">Summary:</h5>
                    <p className="project-summary-para m-1">This project was created in React.  It is designed as a game to help teach children to read and hear notes on the piano keyboard.  It has been divided into 3 modes of play using javascript: a simple keyboard that plays notes when keys are pressed, a sight-reading game to match written musical notes to the keyboard keys, and a listening game to try to play back what sounds are heard.  The biggest challenge in the project was mapping the sounds and keyboard keys in the 3 different modes without having to program each and every one separately.  This was accomplished using a shared object array that holds the various properties for the ntoes.</p>
                    </Col>
                    <Col className="m-1">
                        <Row className="project-link-col">
                        <Col xs lg="5" className="m-1">
                            <a href="https://github.com/Sheilabob/DCMgame">
                            <img src="/assets/images/DCMGameGithub.png" height="120" alt="DCM site"/>
                                <p>DCM Game Github Repository</p></a>
                        </Col>
                        <Col xs lg="5" className="m-1">
                            <a href="https://sheilastrahan-portfolio-dcmgame.netlify.app">
                                <img src="/assets/images/DCMGamePic.png" height="120" alt="DCM site"/>
                                <p>DCM Game Website</p>
                            </a>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
            <Row className="m-3">
                <Row className="project-title">                
                    <h2>Wanda the Whale Game</h2>
                    <h5>(Front-end: Vanilla JavaScript, HTML, CSS)</h5>
                </Row>
                <Row>
                    <Col xs sm="5" className="m-1">
                    <h5 className="project-summary-title m-1">Summary:</h5>
                    <p className="project-summary-para m-1">This project was created using only HTML, CSS, and vanilla javascript.  The biggest challenge was adding the ambient background sound, which only loads on the second round due to the fact that new Audio components do not load in modern browsers on page load . . .</p>
                    </Col>
                    <Col className="m-1">
                        <Row className="project-link-col">
                        <Col xs lg="5" className="m-1">
                            <a href="https://github.com/Sheilabob/javascriptMatchGame">
                            <img src="/assets/images/DCMGameGithub.png" height="120" alt="DCM site"/>
                                <p>Wanda Whale Github Repository</p></a>
                        </Col>
                        <Col xs lg="5" className="m-1">
                            <a href="https://amazing-easley-76d075.netlify.app/">
                                <img src="/assets/images/wandaWhaleWebsite.png" height="120" alt="Wanda Whale site"/>
                                <p>Wanda Whale Website</p>
                            </a>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
            <PythonProjectComponent />
        </Container>
    )
}
