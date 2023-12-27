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
            <p className="summary">Can you believe the journey we've taken from A.I. being the star of sci-fi flicks to becoming our everyday companion? It's like having a quirky house elf straight out of our favorite fantasy series, showing up unexpectedly – from shaping our social media feeds to suggesting the perfect comeback (or throwing in an autocorrect curveball). But relax, no need to panic! A.I. isn't scheming to take your job or turn us into an army of robots (at least, not yet... let's keep it that way). </p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Data</p>
            </div>
        </motion.div>
      </>
    )
};