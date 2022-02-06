import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ballStyle = {
    display: 'block',
    width: '1rem',
    height: '1rem',
    background: 'green',
    borderRadius: '0.5rem'
}

const bounceTransition = {
    y: {
      duration: 0.6,
      yoyo: Infinity,
      ease: "easeOut",
    }
  }

export default function HomePlayground() {
    const [bounce, setBounce] = useState(false);

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
          padding: "20px"
        }}>
          
          <motion.span 
          style={ballStyle}
          transition={bounce && bounceTransition}
          animate={bounce && {
            y: ["300%", "-100%"],
            backgroundColor: "red",
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
            <div onClick={() => setBounce(!bounce)}>
              {animatedBall()}
            </div>
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