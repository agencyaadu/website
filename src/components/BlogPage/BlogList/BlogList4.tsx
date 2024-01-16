// BlogList 4 : "EXPECTATIONS WITH TECH IN 2040"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post4() {
    // ============================ REDIRECT TO Top(0, 0) ============================
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
        <motion.div
        className="post"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
        >
           <Link to='/blog/expectations-with-tech-in-2040' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Expectations with Tech in 2040</h3>
                </div>
            </Link>
            <p className="summary">First and foremost, I'm pretty sure flying cars would be a common sight in 2040. And if Elon Musk has his way, those flying cars would probably be powered by memes and Tesla batteries. Yep, that's right, we would be zooming through the skies while Pepe the Frog memes scroll across our windshields. Oh, and for sure we would have self-driving cars too, and I mean, I can't wait to take a nap on my way to work while my car curses out all the other drivers. 'Can't you f\*cking merge properly, Karen?!'</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Technology</p>
            </div>
        </motion.div>
      </>
    )
};