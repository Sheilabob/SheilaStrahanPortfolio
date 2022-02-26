import React from 'react';
import { Container, Row, Col } from 'reactstrap';


export default function Skills() {
    return (
        <Container>
            <Row className="m-5">
                <h1>Skills</h1>
            </Row>
            <Row>
                <Col>
                    <img src="/assets/images/html5logo.png" height="50" alt="HTML 5"/>
                    <p className="skillsetLabel">HTML 5</p>
                </Col>
                <Col>
                    <img src="/assets/images/Css3Logo.png" height="50" alt="Css 3"/>
                    <p className="skillsetLabel">CSS 3</p>
                </Col>                
                <Col>
                    <img src="/assets/images/jslogo.png" height="50" alt="Javascript"/>
                    <p className="skillsetLabel">Javascript</p>
                </Col>                
                <Col>
                    <img src="/assets/images/reactlogo.png" height="50" alt="React"/>
                    <p className="skillsetLabel">React</p>
                </Col>                
                <Col>
                    <img src="/assets/images/reactNativeLogo.png" height="50" alt="React Native"/>
                    <p>React Native</p>
                </Col>
                <Col>
                    <img src="/assets/images/gitLogo.png" height="50" alt="Git"/>
                    <p className="skillsetLabel">Git</p>
                </Col>                
                <Col>
                    <img src="/assets/images/githubLogo.png" height="50" alt="Github"/>
                    <p className="skillsetLabel">Github</p>
                </Col>
            </Row>
        </Container>
    )
}