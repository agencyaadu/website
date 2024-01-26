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
                <h3>Crafting a Winning Social Media Strategy</h3>
                </div>
            </Link>
            <p className="summary">In today's digital landscape, a thriving business needs a rock-solid social media strategy. It's not just about posting pictures and hoping for the best; it's about crafting a targeted approach that engages your audience, builds brand loyalty, and ultimately drives results. Before you dive headfirst into content creation, take a step back and understand who you're trying to reach. Who are your ideal customers? What are their interests, needs, and pain points? What platforms do they frequent?</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Work</p>
            </div>
        </motion.div>
      </>
    )
};