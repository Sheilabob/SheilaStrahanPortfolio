import React from "react";
import Resume from "../Components/Resume";
import { Container, Row, Col } from "react-bootstrap";

export default function ProjectPage () {
    return (
        <Container>
        <Row className="m-5">
            <h1>Resume</h1>
        </Row>
        <Row>
            <Col>
                <img src="/assets/images/techResume.jpg" height="1000" alt="resume"/>
            </Col>
        </Row>
    </Container>

    )
}