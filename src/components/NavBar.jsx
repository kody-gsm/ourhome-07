import React from "react";
import logo from "../assets/logo.png";
import "../styles/nav.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-area">
      <div className="nav-bar">
        <Link to="/"><img src={logo} className="logo-img" /></Link>
        <button className="btn-qna-more" onClick={() => window.location.href='/qna-answers'}>질문들 모아보기</button>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;
