// BlogList 9 : "Buttercup: The Future of Work"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post9() {
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
           <Link to='/blog/buttercup' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Buttercup: The Future of Work</h3>
                </div>
            </Link>
            <p className="summary">Gone are the days of cubicles and water cooler gossip. The office of the future is a kaleidoscope of remote workers, AI-powered assistants, and robots that can probably make better coffee than you (sorry, Brenda). But fear not, fellow humans! This tech revolution isn't here to steal your jobs, it's here to transform them. Hold onto your hard hats, folks, because the future of work is about to take us on a wild ride! Buckle up, because technology is in the driver's seat, and it's not pulling any punches.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Technology</p>
            </div>
        </motion.div>
      </>
    )
};