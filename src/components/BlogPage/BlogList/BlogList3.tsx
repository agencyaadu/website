// BlogList 3 : "Navigating the Cloud"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post3() {
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
            <Link to='/blog/navigating-the-cloud' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Revamping Crypto Ventures: Elevate Market Impact and Broaden Reach</h3>
                </div>
            </Link>
            <p className="summary">In the dynamic world of cryptocurrencies, rebranding a crypto project is often a strategic necessity. The imperative to rebrand can stem from various factors such as the need to address past challenges, adapt to market changes, or redefine the project's goals and values.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Vinoliya</p>
            <p><LiaTagSolid className="info-icon"/>  Rebranding</p>
            </div>
        </motion.div>
      </>
    )
};