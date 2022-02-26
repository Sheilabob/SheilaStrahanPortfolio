import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProfilePic } from '../Styles/mainPicStyle.styles';
import { Container, Row, Col } from 'react-bootstrap';


const ballStyle = {
    display: 'flex',
    width: '35px',
    height: '35px',
    background: '#ACF6FA',
    borderRadius: '20px',
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

const Cnote = new Audio();
const Dnote = new Audio();
const Enote = new Audio();
const Fnote = new Audio();
const Gnote = new Audio();
const Anote = new Audio();
const Bnote = new Audio();
const highCnote = new Audio()

export default function HomePlayground() {
    const [bounce, setBounce] = useState(false);
    const [bounce1, setBounce1] = useState(false);
    const [bounce2, setBounce2] = useState(false);
    const [bounce3, setBounce3] = useState(false);
    const [bounce4, setBounce4] = useState(false);
    const [bounce5, setBounce5] = useState(false);
    const [bounce6, setBounce6] = useState(false);
    const [bounce7, setBounce7] = useState(false);

    const [loopsC, setLoopsC] = useState(false);
    const [loopsD, setLoopsD] = useState(false);
    const [loopsE, setLoopsE] = useState(false);
    const [loopsF, setLoopsF] = useState(false);
    const [loopsG, setLoopsG] = useState(false);
    const [loopsA, setLoopsA] = useState(false);
    const [loopsB, setLoopsB] = useState(false);
    const [loopsHighC, setLoopsHighC] = useState(false);



    const playCNote = () => {
      if (loopsC === true) {
        Cnote.src = "../assets/audio/C.mp3";
      } else {
        Cnote.src = ""
      };
      Cnote.play();
      Cnote.loop = true;
    }

    const playDNote = () => {
      if (loopsD === true) {
        Dnote.src = "../assets/audio/D.mp3";
      } else {
        Dnote.src = ""
      };
      Dnote.play();
      Dnote.loop = true;
    }

    const playENote = () => {
      if (loopsE === true) {
        Enote.src = "../assets/audio/E.mp3";
      } else {
        Enote.src = ""
      };
      Enote.play();
      Enote.loop = true;
    }

    const playFNote = () => {
      if (loopsF === true) {
        Fnote.src = "../assets/audio/F.mp3";
      } else {
        Fnote.src = ""
      };
      Fnote.play();
      Fnote.loop = true;
    }

    const playGNote = () => {
      if (loopsG === true) {
        Gnote.src = "../assets/audio/G.mp3";
      } else {
        Gnote.src = ""
      };
      Gnote.play();
      Gnote.loop = true;
    }

    const playANote = () => {
      if (loopsA === true) {
        Anote.src = "../assets/audio/A.mp3";
      } else {
        Anote.src = ""
      };
      Anote.play();
      Anote.loop = true;
    }

    const playBNote = () => {
      if (loopsB === true) {
        Bnote.src = "../assets/audio/B.mp3";
      } else {
        Bnote.src = ""
      };
      Bnote.play();
      Bnote.loop = true;
    }

    const playHighCNote = () => {
      if (loopsHighC === true) {
        highCnote.src = "../assets/audio/C.mp3";
      } else {
        highCnote.src = ""
      };
      highCnote.play();
      highCnote.loop = true;
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
       } else if (direction === "up") {
         y2 = "-200%";
         x1 = "-50%";
         x2 = "-50%";
        } else if (direction === "diagLeft") {
          y2 = "-200%";
          x2 = "-200%";
        } else if (direction === "diagRight") {
          y2 = "-200%";
          x1 = "-200%";
        }


      if (bounceNumber) {
        return (<div
        style={{
          width: "4rem",
          height: "4rem",
          // outlineColor: "black",
          // outlineStyle: "solid",
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
          // outlineColor: "black",
          // outlineStyle: "solid",
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
            <div className="m-1">
                <h3>(Click balls for chaos.)</h3>
            </div>
            <Container>
              <Row>
                <Col onClick={() => {
              setBounce(!bounce);
              setLoopsC(!loopsC);
            }}>
              {animatedBall(bounce, "diagLeft")}
              {playCNote()}
                </Col>
                <Col onClick={() => {
              setBounce1(!bounce1);
              setLoopsD(!loopsD);
            }}>
              {animatedBall(bounce1, "up")}
              {playDNote()}
                </Col>
                <Col onClick={() => {
              setBounce2(!bounce2);
              setLoopsE(!loopsE);
            }}>
              {animatedBall(bounce2, "diagRight")}
              {playENote()}
                </Col>
              </Row>
              <Row>
                <Col onClick={() => {
              setBounce3(!bounce3);
              setLoopsF(!loopsF);
            }}>
              {animatedBall(bounce3, "right")}
              {playFNote()}
                </Col>
                <Col>
                          <ProfilePic src="../assets/images/MsSheilaRingArch.jpg" />

                </Col>
                <Col onClick={() => {
              setBounce4(!bounce4);
              setLoopsG(!loopsG);
            }}>
              {animatedBall(bounce4, "right")}
              {playGNote()}
                </Col>
              </Row>
              <Row>
                <Col onClick={() => {
              setBounce5(!bounce5);
              setLoopsA(!loopsA);
            }}>
              {animatedBall(bounce5, "diagRight")}
              {playANote()}
                </Col>
                <Col onClick={() => {
              setBounce6(!bounce6);
              setLoopsB(!loopsB);
            }}>
              {animatedBall(bounce6, "up")}
              {playBNote()}
                </Col>
                <Col onClick={() => {
              setBounce7(!bounce7);
              setLoopsHighC(!loopsHighC);
            }}>
              {animatedBall(bounce7, "diagLeft")}
              {playHighCNote()}
                </Col>
              </Row>
            </Container>
    </div>
   )
}