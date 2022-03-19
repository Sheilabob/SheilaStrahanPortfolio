import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import OKBWebsiteComponent from '../Components/OKBWebsiteComponent';


export default function OKBProjectPage() {
    return (
        <Container>
            <Row className="m-5">
                <h1>OKB Hope Foundation Website</h1>
            </Row>
                <Row className="project-title">                
                    <h2>OKB Website</h2>
                </Row>
                <OKBWebsiteComponent />
            <Row>
                <Col>
                    <h5>Doctor Biography Component Tour, part 1</h5>
                    <iframe width="350" height="200" src="https://www.youtube.com/embed/l0wIM2EZikM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </Col>
                <Col>
                    <h5>Doctor Biography Component Tour, part 2</h5>
                    <iframe width="350" height="200" src="https://www.youtube.com/embed/iJnTjiJIzz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>Carousel Component Tour</h5>
                    <iframe width="350" height="200" src="https://www.youtube.com/embed/s4NvMr_Mzdo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </Col>
                <Col>
                    <h5>Pre-donation Form Tour</h5>
                    <iframe width="350" height="200" src="https://www.youtube.com/embed/O1NAQpUbxHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5>FAQ Accordion Tour</h5>
                    <iframe width="250" height="200" src="https://www.youtube.com/embed/HhflVTAHq6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
    )
}
