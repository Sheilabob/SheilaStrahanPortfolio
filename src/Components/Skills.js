import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import HtmlCertificate from './HtmlCertificate';
import BackendCertificate from './BackendCertificate';
import BootstrapCertificate from './BootstrapCertificate';
import ReactCertificate from './ReactCertificate';
import ReactNativeCertificate from './ReactNativeCertificate';
import BackendNodeCertificate from './BackendNodeCertificate';


export default function Skills() {
    return (
        <Container>
            <Row className="m-5">
                <h1>Skills, Tools, and Certifications</h1>
            </Row>
            <Row>
                <Col>
                   <HtmlCertificate />
                   <p className="skillsetLabel">HTML, CSS, and JS Bootcamp</p>
                </Col>
                <Col>
                    <BootstrapCertificate />
                    <p className="skillsetLabel">Bootstrap Bootcamp</p>
                </Col>
                <Col>
                    <ReactCertificate />
                    <p className="skillsetLabel">React Bootcamp</p>
                </Col>
                <Col>
                    <ReactNativeCertificate />
                    <p className="skillsetLabel">React Native Bootcamp</p>
                </Col>
                <Col>
                    <BackendNodeCertificate />
                    <p className="skillsetLabel">NodeJS, Express, MongoDB Bootcamp</p>
                </Col>
                <Col>
                    <BackendCertificate />
                    <p className="skillsetLabel">Fullstack Bootcamp</p>
                </Col>
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
                    <img src="/assets/images/typescript.svg" height="50" alt="Javascript"/>
                    <p className="skillsetLabel">Javascript</p>
                </Col>   
                <Col>
                    <img src="/assets/images/jslogo.png" height="50" alt="Javascript"/>
                    <p className="skillsetLabel">Typescript</p>
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
                <Col>
                    <img src="/assets/images/nodejs.png" height="50" alt="NodeJs"/>
                    <p className="skillsetLabel">NodeJS</p>
                </Col>
                <Col>
                    <img src="/assets/images/strapi.jpeg" height="50" alt="Strapi"/>
                    <p className="skillsetLabel">Strapi</p>
                </Col>
                <Col>
                    <img src="/assets/images/pythonLogo.png" height="50" alt="Python"/>
                    <p className="skillsetLabel">Python</p>
                </Col>
            </Row>

            
        </Container>
    )
}