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
            <p className="summary">Get ready for a thrilling journey into the Metaverse – not just some old sci-fi fantasy, but the real deal brought to life by none other than Mark Zuckerberg, reshaping the very essence of the internet. But before you gear up with your VR headset and dive headfirst into this digital wonderland, let's pause for a moment. Is the Metaverse truly the futuristic utopia that Zuckerberg envisions, or is it merely another shiny plaything for the big tech giants, possibly paving the way for privacy nightmares?</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Meta</p>
            </div>
        </motion.div>
      </>
    )
};