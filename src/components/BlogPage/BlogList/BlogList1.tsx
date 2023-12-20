// BlogList 1 : "Unlock Creative Potential"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post1() {
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
           <Link to='/blog/unlock-creative-potential' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Unlock Creative Potential</h3>
                </div>
            </Link>
            <p className="summary">A Journey Through Inspiring Portfolios. In this digital age, a well-designed and carefully curated portfolio can leave a lasting impact on potential clients, employers, or collaborators. With countless platforms available, it becomes essential to highlight your unique talents, skills, and achievements through an engaging website. Building my own portfolio has been an enriching journey, and I'd love to share the insights I've gathered. To spark your creativity and offer guidance for building your own portfolio, I've curated a collection of outstanding examples from various fields.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Portfolio</p>
            </div>
        </motion.div>
      </>
    )
};