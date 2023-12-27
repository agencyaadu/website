import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

import "./Logo.scss";

const Logo = () => {

    // const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="Logo-wrapper">
      <div className="boththewords">
        <p className="greyish">a</p>
        <p className="goat-us">A</p>
      </div>
    </div>

    // ANIMATION ON PAUSE FOR NOW
    // <div className="Logo-wrapper" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
    //     <div className="boththewords">
    //     <motion.p
    //       className='greyish'
    //     >
    //       a
    //     </motion.p>
    //     <AnimatePresence mode='popLayout'>
    //       {isVisible ? (
    //         <motion.p
    //         initial={{
    //           x: '-200px',
    //           y: '0'
    //         }}
    //         animate={{
    //           x: '0px',
    //           y: '0'
    //         }}
    //         exit={{
    //           x: '-200px',
    //           opacity: '0',
    //           y: '0'
    //         }}
    //         transition={{
    //           type: 'spring',
    //           stiffness: 200, // Adjust to control the speed
    //           damping: 20     // Adjust to control the bounce
    //         }}            
    //         >
    //           <motion.span
    //           className='greyish'
    //           >
    //             gency
    //           </motion.span>
    //         </motion.p>
    //       ): null}
    //     </AnimatePresence>
    //     <motion.p
    //     className='goat-us'
    //     layout
    //     transition={{
    //       type: 'spring',
    //       stiffness: 200, // Adjust to control the speed
    //       damping: 20     // Adjust to control the bounce
    //     }}        
    //     >
    //       A
    //     </motion.p>
    //     <AnimatePresence mode='popLayout'>
    //       {isVisible ? (
    //         <motion.p
    //         initial={{
    //           x: '-200px',
    //           y: '0px'
    //         }}
    //         animate={{
    //           x: '0px',
    //           y: '0px'
    //         }}
    //         exit={{
    //           opacity: '0',
    //           x: '-200px',
    //           y: '0px'
    //         }}
    //         transition={{
    //           type: 'spring',
    //           stiffness: 200, // Adjust to control the speed
    //           damping: 20     // Adjust to control the bounce
    //         }}            
    //         >
    //           <motion.span
    //           className='goat-us'
    //           >
    //             adu
    //           </motion.span>
    //         </motion.p>
    //       ): null}
    //     </AnimatePresence>
    //     </div>
    // </div>
  )
}

export default Logo