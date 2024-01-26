// BlogList 10 : "Blockchain Beyond Bitcoin"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post10() {
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
           <Link to='/blog/blockchain-beyond-bitcoin' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Blockchain Beyond Bitcoin</h3>
                </div>
            </Link>
            <p className="summary">Forget fancy cars and Lamborghinis, the real gold rush of the 21st century is happening in the invisible world of digital ledgers and encrypted blocks. We're talking about blockchain, the technology behind cryptocurrency, but its potential stretches far beyond Bitcoin's flashy headlines. So, put down your mining rig and step into the real revolution.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Blockchain</p>
            </div>
        </motion.div>
      </>
    )
};