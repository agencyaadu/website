import React from "react";
import Blog from "../../assets/images/blog.svg";
import "./Blog.scss";
import { Link } from "react-router-dom";

const CommingSoon: React.FC = () => {
  return (
    <div className="comingSoon">
      <Link to="/">
        <img src={Blog} alt="" />
      </Link>
    </div>
  );
};

export default CommingSoon;
