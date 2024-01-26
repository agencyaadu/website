// BlogList 14 : "Conquering Your Fears"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post14() {
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
           <Link to='/blog/conquering-your-fears' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Conquering Your Fears</h3>
                </div>
            </Link>
            <p className="summary">Fear. It's the little voice in your head whispering "don't" when your heart screams "do." It's the icy hand gripping your ankle just as you peek over the edge of the cliff. It's the monster under the bed, the gremlin in the machine, the reason you haven't even considered...well, everything you secretly dream of. But here's the thing about fear: it's a paper tiger. Roaring loud, yes, but ultimately harmless unless you let it cage you. And guess what? You hold the key.</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Work</p>
            </div>
        </motion.div>
      </>
    )
};