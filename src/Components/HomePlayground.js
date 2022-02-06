import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProfilePic } from '../Styles/mainPicStyle.styles';

const ballStyle = {
    display: 'block',
    width: '3rem',
    height: '3rem',
    background: '#ACF6FA',
    borderRadius: '1.5rem',
    boxShadow: '-3px 5px lightBlue'
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
          display: "flex",
          justifyContent: "space-around",
          margin: "20px",
          padding: "20px",
        }}>
          
          <motion.span 
          style={ballStyle}
          transition={bounce && bounceTransition}
          animate={bounce && {
            // this is where we mess with direction
            y: ["100%", "-100%"],
            x: ["-100%", "100%"],
            backgroundColor: "#0043C9", boxShadow: '-5px 10px lightBlue'

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
          display: "flex",
          justifyContent: "space-around",
          margin: "20px",
          padding: "20px"
        }}>
          
          <motion.span 
          style={ballStyle}
          />
          
      </div>)
      }
    }

    return ( 
        <div >
            <div>
                <h1>This is where the playground goes.</h1>
            </div>
            <div onClick={() => {
              setBounce(!bounce);
              playMusic(!music);
              setLoops(!loops);
            }}>
              {animatedBall()}
              {playNote(loops)}
            </div>
            <ProfilePic src="../assets/images/MsSheilaRingArch.jpg" />
          

       {/* <div onClick={() => setBounce(!bounce)}
      style={{
        width: "4rem",
        height: "4rem",
        outlineColor: "black",
        outlineStyle: "solid",
        display: "flex",
        justifyContent: "space-around",
        margin: "20px",
        padding: "20px"
      }}>
        
        <motion.span 
        style={ballStyle}
        transition={bounce && bounceTransition}
        animate={bounce && {
          y: ["100%", "-100%"],
          backgroundColor: ["green", "red"],
        }}
        />
        
    </div> */}
    </div>
   )
}