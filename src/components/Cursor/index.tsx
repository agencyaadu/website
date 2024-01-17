import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


interface MousePosition {
    x: number;
    y: number;
}

const Cursor: React.FC = () => {

    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0
      });
      console.log(mousePosition)
    
      useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY,
          })
        }
    
        window.addEventListener("mousemove", mouseMove);
    
        return () => {
          window.removeEventListener("mousemove", mouseMove);
        }
      }, [])
    
      const variants = {
        default: {
          x: mousePosition.x-7,
          y: mousePosition.y-7,
          opacity: 0.72,
        },
      }
    
    return (
        <>
        <motion.div
            className="cursor" 
            variants = {variants}
            animate = 'default'
            transition = {{ease: "backOut"}}
        >
        </motion.div>
        </>
    )
}

export default Cursor;