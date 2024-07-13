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
            <Link to='/blog/the-necessity-of-rebranding-in-crypto-amplifying-visibility-and-interaction-rebranding-crypto-project' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>The Necessity of Rebranding in Crypto</h3>
                </div>
            </Link>
            <p className="summary">Rebranding in the crypto industry holds significant strategic value for several reasons. Firstly, it can rejuvenate a project's image, making it more appealing to new investors and users. Crypto project rebranding goes beyond a simple change of logo or name; it involves redefining the project’s mission, vision, and values.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Vinoliya</p>
            <p><LiaTagSolid className="info-icon"/>  Rebranding</p>
            </div>
        </motion.div>
      </>
    )
};