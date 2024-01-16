// BlogList 6 : "LIFE OF A 19 YEAR OLD BLOGGER"

import {AiOutlineUser} from "react-icons/ai";
import {LiaTagSolid} from "react-icons/lia";
import "../Blog.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Post6() {
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
           <Link to='/blog/life-of-a-blogger' onClick={scrollToTop} className="link">
                <div className="title">
                <h3>Life of a 19 Year Old Blogger</h3>
                </div>
            </Link>
            <p className="summary">As a blogger, I’m constantly trying to come up with new and interesting ideas to keep my readers entertained (aka stop them from clicking on that pesky “x” button). But let’s be real, the struggle is real. Sometimes I sit in front of my laptop for hours, trying to come up with a catchy title, only to end up with something like “10 Reasons Why Batman is the Best Superhero Ever” (which is actually true, fight me if you disagree). But my real inspiration behind starting this blog is my love for Batman. I mean, who wouldn’t be a fan of that brooding, billionaire, crime-fighting vigilante?</p>
            <div className="info">
            <p className="author"><AiOutlineUser className="info-icon"/>  Prashant Rawat</p>
            <p><LiaTagSolid className="info-icon"/>  Blogging</p>
            </div>
        </motion.div>
      </>
    )
};