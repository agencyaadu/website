import React from "react";
import Not from "../../assets/images/Bar.svg";
import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="notFound">
      <Link to="/">
        <img src={Not} alt="" />
      </Link>
    </div>
  );
};

export default NotFound;
