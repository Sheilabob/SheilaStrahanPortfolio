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
    // boxShadow: '-3px 5px lightBlue'
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
    const [music, playMusic] = useState(false);
    const [loops, setLoops] = useState(false)


    const playNote = (x) => {
     if (loops) {
      note.src = "../assets/audio/Csharp.mp3"} else {note.src = "";};
      note.play();
      note.loop = true;
     
    }

    const animatedBall = () => {
      if (bounce) {
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
          transition={bounce && bounceTransition}
          animate={bounce && {
            y: ["100%", "-100%"],
            x: ["-100%", "100%"],
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
              setBounce(!bounce);
              playMusic(!music);
              setLoops(!loops);
            }}>
              {animatedBall()}
              {playNote(loops)}
                </Col>
                <Col onClick={() => {
              setBounce(!bounce);
              playMusic(!music);
              setLoops(!loops);
            }}>
              {animatedBall()}
              {playNote(loops)}
                </Col>
                <Col onClick={() => {
              setBounce(!bounce);
              playMusic(!music);
              setLoops(!loops);
            }}>
              {animatedBall()}
              {playNote(loops)}
                </Col>
              </Row>
            <ProfilePic src="../assets/images/MsSheilaRingArch.jpg" />
            </Container>
    </div>
   )
}