// BlogList 16 : "The future of work"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post16() {
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
           <Link to='/blog/the-future-of-work' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>The future of work</h3>
                </div>
            </Link>
            <p className="summary">Buttercup, because the future of work is a thrilling tech-powered rollercoaster! Robots, AI, and virtual reality are shaking the foundation of everything we thought we knew about jobs. But fear not, my fellow humans, because this revolution isn't here to steal your lunch money, it's here to transform your experience.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Technology</p>
            </div>
        </motion.div>
      </>
    )
};