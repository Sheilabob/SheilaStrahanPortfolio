import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function OKBWebsiteComponent() {
    return (
      
            <Row className="m-3">
                <Row className="project-title">                
                    <h2>OKB Website</h2>
                    <h5>(Fullstack: React and Strapi)</h5>
                </Row>
                <Row>
                    <Col xs sm="5" className="m-1">
                    <h5 className="project-summary-title m-1">Summary:</h5>
                    <p className="project-summary-para m-1">This is a full-stack project that I worked on with a team of two other engineers for a non-profit organization, OKB Hope Foundation, that provides mental and physical healthcare to people in need in Ghana, Africa.  This foundation has a working US Website but needed a separate, responsive site that could be launched and hosted in Ghana itself.  The front end of this site is a React site, while the backend uses Strapi.</p>
                    </Col>
                    <Col className="m-1">
                        <Row className="project-link-col">
                        <Col xs lg="5" className="m-1">
                            <a href="https://github.com/pgartrell/okb">
                            <img src="/assets/images/okbWebScreenshot.png" height="120" alt="OKB image"/>
                                <p>OKB Hope Github Repository</p></a>
                        </Col>
                        <Col xs lg="5" className="m-1">
                            <Link to="/projects/okb">
                                <img src="/assets/images/sampleLandingPageOKB.png" height="120" alt="DCM site"/>
                                <p>More Details</p>
                            </Link>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>

    )
}
