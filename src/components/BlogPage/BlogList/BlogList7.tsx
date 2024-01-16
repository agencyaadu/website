// BlogList 7 : "WEB DEVELOPMENT"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post7() {
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
           <Link to='/blog/web-development' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Web Development</h3>
                </div>
            </Link>
            <p className="summary">You see, web development is like a crazy ex-girlfriend. At first, everything seems all rainbows and unicorns. You're excited to learn and create some dope websites. But then, BAM! Just like your ex, it hits you with a million problems and errors that make you want to pull your hair out. And sometimes, you even question why you got into this mess in the first place.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Web Development</p>
            </div>
        </motion.div>
      </>
    )
};