// BlogList 13 : "Building Your Personal Brand"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post13() {
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
           <Link to='/blog/building-your-personal-brand' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Building Your Personal Brand</h3>
                </div>
            </Link>
            <p className="summary">In a world saturated with online personas, crafting a distinct and impactful personal brand can feel like building a sandcastle in a hurricane. But fear not, fellow digital voyagers! With strategy and a dash of audacity, you can carve your niche and establish yourself as a force to be reckoned with.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Work</p>
            </div>
        </motion.div>
      </>
    )
};