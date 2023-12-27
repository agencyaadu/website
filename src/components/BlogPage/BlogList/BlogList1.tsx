// BlogList 1 : "Portfolio"

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
           <Link to='/blog/portfolio' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Portfolio</h3>
                </div>
            </Link>
            <p className="summary">Hey there! Get ready to join me on a cool trip into the world of personal websites, where artists, designers, and all sorts of talented folks show off their awesome work. I'm super excited to share some tips and stories that'll help you make your own website stand out. Think of your portfolio as a fancy online resume – but way cooler. In today's digital world, having a great-looking portfolio is like having a golden ticket. It's how you show off your skills and catch the eye of people who might want to work with you.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Portfolio</p>
            </div>
        </motion.div>
      </>
    )
};