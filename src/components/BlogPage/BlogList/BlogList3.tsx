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
                <h3>Navigating the Cloud</h3>
                </div>
            </Link>
            <p className="summary">A Hilarious Journey into Cloud Security Networks. Welcome, cloud enthusiasts, tech aficionados, and anyone who's ever wondered if the cloud is just a mythical place where data goes to relax and take a break. Today, we're diving into the nebulous world of Cloud Security Networks, and guess what? We're not just talking about it—we're making it as engaging as a comedy show! Buckle up for a hilarious journey through the clouds!</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Data</p>
            </div>
        </motion.div>
      </>
    )
};