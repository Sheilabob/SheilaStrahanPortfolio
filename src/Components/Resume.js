import React from 'react';
import { Container, Row, Col } from 'reactstrap';


export default function Resume() {
    return (
        <Container>
            <Row className="m-5">
                <h1>Resume</h1>
            </Row>
            <Row>
                <Col>
                    <img src="/assets/images/techResume.jpg" height="400" alt="resume"/>
                </Col>
            </Row>
        </Container>
    )
}