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
           <Link to='/blog/transforming-your-cryptocurrency-initiative-expanding-horizons-for-enhanced-success-rebranding-crypto-project' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Transforming Your Cryptocurrency Initiative</h3>
                </div>
            </Link>
            <p className="summary">Cryptocurrency projects, like any business, sometimes need a fresh start. Crypto project rebranding can be a strategic move to revitalize a project, attract new investors, and reengage the community. The importance of rebranding lies in its ability to change public perception and redefine the project's goals and values.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Vinoliya</p>
            <p><LiaTagSolid className="info-icon"/>  Rebranding</p>
            </div>
        </motion.div>
      </>
    )
};