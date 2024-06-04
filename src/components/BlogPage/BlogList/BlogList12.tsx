// BlogList 12 : "Crafting a Winning Social Media Strategy"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post12() {
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
           <Link to='/blog/crafting-winning-social-media' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Example</h3>
                </div>
            </Link>
            <p className="summary">Example</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Example</p>
            <p><LiaTagSolid className="info-icon"/>  Example</p>
            </div>
        </motion.div>
      </>
    )
};