// BlogList 2 : "Meta Mayhem"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post2() {
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
            <Link to='/blog/meta-mayhem' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Meta Mayhem</h3>
                </div>
            </Link>
            <p className="summary">Is the Metaverse More Than Just Mark Zuckerberg's Midlife Crisis? But here's the thing: the Metaverse has potential. We're talking about revolutionizing the way we work, socialize, and even learn. Want to collaborate with colleagues worldwide without leaving your living room? Boom, the Metaverse has you covered. Want to attend a virtual concert with your favorite band, even if they're performing on the moon? No problem, Metaverse to the rescue!</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Meta</p>
            </div>
        </motion.div>
      </>
    )
};