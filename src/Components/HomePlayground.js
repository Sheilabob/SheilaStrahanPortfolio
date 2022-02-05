import * as React from 'react';
import { motion } from 'framer-motion';

const ballStyle = {
    display: 'block',
    width: '1rem',
    height: '1rem',
    background: 'black',
    borderRadius: '0.5rem'
}

const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.8,
    },
  }

export default function HomePlayground() {
    return ( 
        <div>
            <div>
                <h1>This is where the playground goes.</h1>
            </div>
       <div
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
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
          backgroundColor: ["green", "red"],
        }}
      />
    </div>
    </div>
   )
}