import React from 'react';
import { Container, Row, Col } from 'reactstrap';


export default function PythonProjectComponent() {
    return (
      
            <Row className="m-3">
                <Row className="project-title">                
                    <h2>Python Dragon Game</h2>
                    <h5>(Backend: Python)</h5>
                </Row>
                <Row>
                    <Col xs sm="5" className="m-1">
                    <h5 className="project-summary-title m-1">Summary:</h5>
                    <p className="project-summary-para m-1">This is my first simple program in Python.  It involves 2 basic while loops, the first one to allow a player to play multiple rounds while selecting different characters, and the second to create the "battle" between their character and the dragon.  The bells and whistles that I added are: I color-coded each character and the dragon, I inserted a pause between each step of the battle, and I included either a triumph or defeat sound at the end depending on whether the character or the dragon won..</p>
                    </Col>
                    <Col className="m-1">
                        <Row className="project-link-col">
                        <Col xs lg="5" className="m-1">
                            <a href="https://github.com/Sheilabob/pythonDragonGame">
                            <img src="/assets/images/pythonDragonGithub.png" height="120" alt="python github"/>
                                <p>Python Dragon Game Github Repository</p></a>
                        </Col>
                        <Col xs lg="5" className="m-1">
                            <a href="https://www.youtube.com/watch?v=Lj5xRn6lkz8">
                                <img src="/assets/images/pythonDragonYoutubeDemo.png" height="120" alt="python dragon youtube"/>
                                <p>Youtube Demo</p>
                            </a>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>

    )
}