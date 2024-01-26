// BlogList 8 : "Cybersecurity in 2024"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post8() {
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
           <Link to='/blog/cybersecurity-in-2024' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Cybersecurity in 2024</h3>
                </div>
            </Link>
            <p className="summary">Hold onto your hard drives, folks, because 2024 is shaping up to be a wild ride in the cybersecurity rodeo. Hackers are upping their game, slinging code like Wyatt Earp slinging lead, and our precious data is smack dab in the middle of the dusty saloon. But fear not, brave netizens! We've got the lowdown on the hottest cyber trends, and some nifty tips to keep your digital doors bolted shut.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Cybersecurity</p>
            </div>
        </motion.div>
      </>
    )
};