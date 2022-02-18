import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProfilePic } from '../Styles/mainPicStyle.styles';
import { Container, Row, Col } from 'react-bootstrap';

const ballStyle = {
    display: 'flex',
    width: '20px',
    height: '20px',
    background: '#ACF6FA',
    borderRadius: '10px',
}

const bounceTransition = {
    // this can add some random direction by making the durations not match
    y: {
      duration: 0.6,
      yoyo: Infinity,
      ease: "easeOut",
    },
    x: {
      duration: 0.6,
      yoyo: Infinity,
      ease: "easeOut",
    }
  }

const note = new Audio();

export default function HomePlayground() {
    const [bounce, setBounce] = useState(false);
    const [bounce1, setBounce1] = useState(false);
    const [bounce2, setBounce2] = useState(false);


    const [loops, setLoops] = useState(false)


    const playNote = (x) => {
     if (loops) {
      note.src = "../assets/audio/Csharp.mp3"} else {note.src = "";};
      note.play();
      note.loop = true;
     
    }

    const animatedBall = (bounceNumber, direction) => {
      let y1 = "100%";
      let y2 = "100%";
      let x1 = "100%";
      let x2 = "100%";
      if (direction === "right") {
         y1 = "-50%";
         y2 = "-50%";
         x1 = "-200%";
         x2 = "100%";
       } else if (direction === "up") {
         y1 = "100%";
         y2 = "-200%";
         x1 = "-50%";
         x2 = "-50%";
        } else if (direction === "diagLeft") {
          y1 = "100%";
          y2 = "-200%";
          x1 = "100%";
          x2 = "-200%";
        } else if (direction === "diagRight") {
          y1 = "100%";
          y2 = "-200%";
          x1 = "-200%";
          x2 = "100%";
        }


      if (bounceNumber) {
        return (<div
        style={{
          width: "4rem",
          height: "4rem",
          outlineColor: "black",
          outlineStyle: "solid",
          margin: "25%",
          padding: "25%"
        }}>
          
          <motion.span 
          style={ballStyle}
          transition={bounceNumber && bounceTransition}
          animate={bounceNumber && {
            y: [y1, y2],
            x: [x1, x2],
            backgroundColor: "#0043C9", 

                    }}
          />
      </div>)
      } else {
        return (<div
        style={{
          width: "4rem",
          height: "4rem",
          outlineColor: "black",
          outlineStyle: "solid",
          margin: "25%",
          padding: "25%"
        }}>
          
          <motion.span 
          style={ballStyle}
          />
          
      </div>)
      }
    }

    return ( 
        <div className="container">
            <div>
                <h1>This is where the playground goes.</h1>
            </div>
            <Container>
              <Row>
                <Col className="justify-content-center text-center m-1" style={{outline: 'solid black'}} onClick={() => {
              setBounce1(!bounce1);
              setLoops(!loops);
            }}>
              {animatedBall(bounce1, "right")}
              {playNote(loops)}
                </Col>
                <Col onClick={() => {
              setBounce2(!bounce2);
              setLoops(!loops);
            }}>
              {animatedBall(bounce2, "diagLeft")}
              {playNote(loops)}
                </Col>
                <Col onClick={() => {
              setBounce(!bounce);
              setLoops(!loops);
            }}>
              {animatedBall(bounce, "diagRight")}
              {playNote(loops)}
                </Col>
              </Row>
            <ProfilePic src="../assets/images/MsSheilaRingArch.jpg" />
            </Container>
    </div>
   )
}