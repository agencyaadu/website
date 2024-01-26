// BlogList 15 : "Apps for the Modern Entrepreneur"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post15() {
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
           <Link to='/blog/apps-for-the-modern-entrepreneur' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Apps for the Modern Entrepreneur</h3>
                </div>
            </Link>
            <p className="summary">In the hustle and bustle of entrepreneurship, every minute counts. That's why having the right apps in your arsenal can be a game-changer, streamlining tasks, boosting productivity, and keeping you connected wherever you roam. So, ditch the scattered spreadsheets and overflowing inboxes, and check out these must-have apps for the modern entrepreneur.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Work</p>
            </div>
        </motion.div>
      </>
    )
};